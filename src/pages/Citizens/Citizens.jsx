import "./Citizens.scss";
import { CitizensTop } from "../../components/CitizensTop/CitizensTop.jsx";
import { CitizensList } from "../../components/CitizensList/CitizensList.jsx";
import { CitizensBottom } from "../../components/CitizensBottom/CitizensBottom.jsx";
import { users as allUsers } from "../../data/users.js";
import { createContext, useCallback, useMemo, useState } from "react";
import { cleanPhoneNumber } from "./../../data/phone";

const USERS_PER_PAGE = 8;
export const PagesContext = createContext();

export const Citizens = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParams, setFilterParams] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [columnFilter, setColumnFilter] = useState({
    isSet: false,
    column: null,
    type: -1,
  });
  const filteredUsers = useMemo(() => {
    setCurrentPage(1);
    return allUsers.filter(
      (user) =>
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cleanPhoneNumber(user.phone).includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allUsers, searchQuery]);

  const DateAndStatusFilteredUsers = useMemo(() => {
    setCurrentPage(1);
    const { startDate, endDate, status } = filterParams;
    const currentStatus =
      status === "active" ? true : status === "unactive" ? false : null;

    return filteredUsers.filter((user) => {
      const userBirthDate = user.birthDate;

      let dateMatches = true;
      let statusMatches = true;

      if (startDate) {
        dateMatches = userBirthDate >= startDate;
      }
      if (endDate) {
        dateMatches = dateMatches && userBirthDate <= endDate;
      }

      if (currentStatus !== null) {
        statusMatches = user.isActive === currentStatus;
      }

      return dateMatches && statusMatches;
    });
  }, [filteredUsers, filterParams]);

  const sortedUsers = useMemo(() => {
    const sorted = [...DateAndStatusFilteredUsers];
    if (columnFilter.isSet) {
      sorted.sort((a, b) => {
        const fieldA = a[columnFilter.column].toString().toLowerCase();
        const fieldB = b[columnFilter.column].toString().toLowerCase();
        return columnFilter.type === 0
          ? fieldA > fieldB
            ? 1
            : -1
          : fieldA < fieldB
          ? 1
          : -1;
      });
    }
    return sorted;
  }, [DateAndStatusFilteredUsers, columnFilter]);

  const totalUsers = sortedUsers.length;
  const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const currentUsers = sortedUsers.slice(startIndex, endIndex);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  return (
    <>
      <div className="page">
        <div className="citizens">
          <div className="citizens__content">
            <CitizensTop
              onSearch={handleSearch}
              filterParams={filterParams}
              setFilterParams={setFilterParams}
            />
            <CitizensList
              users={currentUsers}
              columnFilter={columnFilter}
              setColumnFilter={setColumnFilter}
            />
            <PagesContext.Provider
              value={{
                currentPage,
                setCurrentPage,
                totalPages,
                startIndex,
                endIndex,
                totalUsers,
              }}
            >
              <CitizensBottom />
            </PagesContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
};
