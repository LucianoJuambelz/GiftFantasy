import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendings } from "../../redux/gifs_actions";
import styles from "./Trending.module.css";
import { Link } from "react-router-dom";

function TrendingComponent() {
  const dispatch = useDispatch();
  const info = useSelector((state: any) => state.Trendings);
  var colors = [
    "#e74c3c",
    "#FBC80A",
    "#4cd964",
    "#5ac8fa",
    "#007aff",
    "#5856d6",
  ];

  useEffect(() => {
    dispatch(getTrendings());
  }, [dispatch]);

  return (
    <>
      <h2 id={styles.trendingsH2}>#Trendings</h2>
      <div>
        <ul id={styles.Trendings}>
          {info &&
            info.map((trending: string, i: number) => {
              return (
                <Link to={`/trending/${trending}`} key={i}>
                  <button
                    style={{
                      backgroundColor: `${colors[i]}`,
                    }}
                    className={styles.trending}
                  >
                    #{trending.toUpperCase()}
                  </button>
                </Link>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default TrendingComponent;
