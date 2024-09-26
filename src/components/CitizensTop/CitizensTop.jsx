import { baseUrl } from "../../data/url";
import { Icon } from "../Icon/Icon";

import "./CitizensTop.scss";
import { useCallback, useRef, useState } from "react";
export const CitizensTop = ({ onSearch, filterParams, setFilterParams }) => {
  const [isFilter, setIsFilter] = useState(false);
  const handleSearch = useCallback((e) => {
    onSearch(e.target.value);
  }, []);
  const startDateRef = useRef();
  const endDateRef = useRef();
  const activeStatusRef = useRef();
  const unactiveStatusRef = useRef();

  const handleApplyFilters = () => {
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const status = activeStatusRef.current.checked
      ? "active"
      : unactiveStatusRef.current.checked
      ? "unactive"
      : null;

    setFilterParams({
      startDate: startDate || null,
      endDate: endDate || null,
      status: status,
    });

    setIsFilter(false);
  };

  const handleClearFilters = () => {
    setFilterParams({
      startDate: null,
      endDate: null,
      status: null,
    });

    startDateRef.current.value = "";
    endDateRef.current.value = "";
    activeStatusRef.current.checked = false;
    unactiveStatusRef.current.checked = false;
  };
  return (
    <>
      <div className="citizens__top">
        <h2 className="citizens__title">Граждане</h2>
        <div className="citizens__filter">
          <div className="citizens__search">
            <input
              type="text"
              className="citizens__search__input"
              placeholder="Искать"
              onChange={handleSearch}
            />
            <Icon className="citizens__search__img" iconName={"find"} />
          </div>
          <div className="citizens__filter__params">
            <button
              className="citizens__filter__button"
              onClick={() => setIsFilter(!isFilter)}
            >
              Фильтры
              <Icon
                className={"citizens__filter__img"}
                iconName={"arrow-right"}
              />
            </button>
            <div
              className={`citizens__filter__settings ${
                isFilter ? "active" : ""
              }`}
            >
              <div className="citizens__filter__block">
                <span htmlFor="" className="citizens__filter__label">
                  Дата рождения
                </span>
                <div className="citizens__filter__inputs">
                  <div className="citizens__filter__input">
                    <span className="citizens__filter__left">От:</span>
                    <input
                      type="date"
                      className="citizens__filter__year"
                      ref={startDateRef}
                    />
                  </div>
                  <div className="citizens__filter__input">
                    <span className="citizens__filter__left">До:</span>
                    <input
                      type="date"
                      className="citizens__filter__year"
                      ref={endDateRef}
                    />
                  </div>
                </div>
              </div>
              <div className="citizens__filter__block">
                <span htmlFor="" className="citizens__filter__label">
                  Статус активности
                </span>

                <div className="citizens__filter__radios">
                  <div className="citizens__filter__radio">
                    <input
                      type="radio"
                      name="status"
                      id="active"
                      ref={activeStatusRef}
                    />
                    <label htmlFor="active">Активный</label>
                  </div>
                  <div className="citizens__filter__radio">
                    <input
                      type="radio"
                      name="status"
                      id="unactive"
                      ref={unactiveStatusRef}
                    />
                    <label htmlFor="unactive">Неактивный</label>
                  </div>
                </div>
              </div>
              <div className="citizens__filter__buttons">
                <button
                  className="citizens__filter__apply"
                  onClick={() => handleApplyFilters()}
                  data-text="Применить"
                ></button>
                <button
                  className="citizens__filter__clear"
                  onClick={() => handleClearFilters()}
                  data-text="Очистить"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
