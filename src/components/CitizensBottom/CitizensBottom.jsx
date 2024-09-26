import "./CitizensBottom.scss";
import { Paginator } from "../Paginator/Paginator";
import { useContext } from "react";
import { PagesContext } from "../../pages/Citizens/Citizens";
export const CitizensBottom = () => {
  const { startIndex, endIndex, totalUsers } = useContext(PagesContext);
  const displayedEndIndex = Math.min(endIndex, totalUsers);
  return (
    <>
      <div className="citizens__bottom">
        <div className="cititzens__info">
          {`На странице показано ${
            startIndex + 1
          }-${displayedEndIndex} граждан из ${totalUsers}`}
        </div>
        <Paginator />
      </div>
    </>
  );
};
