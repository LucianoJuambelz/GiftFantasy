import { useEffect, useState } from "react";
import detailStyles from "../Detail/Detail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clean, getRandomGif } from "../../redux/gifs_actions";
import Spinner from "../../components/Spinner/Spinner";
import { data } from "../../Models/gif.models";
import Bookmarks from "../../components/Bookmark/Bookmark";
import Share from "../../components/Share/Share";
import BookmarkNotVisible from "../../components/Bookmark/BookmarkNotVisible";
import { useAuth0 } from "@auth0/auth0-react";

function Random() {
  const dispatch = useDispatch();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const { isAuthenticated } = useAuth0();

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const random: data = useSelector((state: any) => state.Random);

  useEffect(() => {
    dispatch(getRandomGif());

    return () => {
      dispatch(clean("random"));
    };
  }, [dispatch]);

  return (
    <section className={detailStyles.Detail}>
      {!Object.keys(random).length ? (
        <Spinner detail="" />
      ) : (
        <article
          className={
            random.data.user
              ? detailStyles.detailRow
              : detailStyles.detailRowNoUser
          }
        >
          {random.data.user && (
            <>
              <div className={detailStyles.detailUserImageContainer}>
                <img
                  className={detailStyles.detailUserImage}
                  src={random.data.user.avatar_url}
                  alt={random.data.user.username}
                />
                <div className={detailStyles.nameRow}>
                  <p>{random.data.user.username}</p>
                  {random.data.user.is_verified && (
                    <svg
                      viewBox="-1 0 18 18"
                      version="1.1"
                      className={detailStyles.verified}
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Artboard-2"
                          transform="translate(-324.000000, -132.000000)"
                          fill="#15CDFF"
                        >
                          <g
                            id="Group-3"
                            transform="translate(323.000000, 132.000000)"
                          >
                            <polygon
                              className="_3TKzAHOKiB8g0z3rZL240A"
                              id="sprocket"
                              points="8.95093746 16.1755971 6.18494567 16.8455287 4.34519872 14.6949378 1.70947694 13.628319 1.49869564 10.8185214 2.85993451e-13 8.42276436 1.49869564 6.02700728 1.70947694 3.21720971 4.34519872 2.1505909 6.18494567 4.92383911e-14 8.95093746 0.669931593 11.7169293 4.82947016e-14 13.5566762 2.1505909 16.192398 3.21720971 16.4031793 6.02700728 17.9018749 8.42276436 16.4031793 10.8185214 16.192398 13.628319 13.5566762 14.6949378 11.7169293 16.8455287"
                            ></polygon>
                            <path
                              d="M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z"
                              id="check"
                              fill="#121212"
                              transform="translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className={detailStyles.instagram}
                  onClick={() => {
                    window.location.href = `${random.data.user.instagram_url}`;
                  }}
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </>
          )}
          <div className={detailStyles.gifContainer}>
            <h2>{random.data.title.toUpperCase()}</h2>
            {isLoading && <Spinner detail="detail" />}
            <img
              className={detailStyles.detailImage}
              src={random.data.images.downsized_medium.url}
              alt={random.data.title}
              onLoad={handleImageLoad}
              style={{ display: isLoading ? "none" : "block" }}
            />
            <div className={detailStyles.socialSide}>
              {isAuthenticated ? (
                <div className={detailStyles.socialIconContainer}>
                  <Bookmarks data={random.data} />
                </div>
              ) : (
                <div
                  className={detailStyles.socialIconContainer}
                  id={detailStyles.notVisible}
                >
                  <BookmarkNotVisible />
                </div>
              )}
              <Share />
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default Random;
