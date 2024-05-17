import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clean, getGifs } from "../../redux/gifs_actions";
import Spinner from "../Spinner/Spinner";
import GifMap from "./GifMap";
import appStyles from "../../App.module.css";
import { Keyword } from "../../Models/gif.models";

function Gifs({ keyword }: any) {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.Gifs);

  useEffect(() => {
    if (!keyword) {
      dispatch(getGifs(""));
    }

    dispatch(getGifs(keyword));
    return () => {
      dispatch(clean(""));
    };
  }, [dispatch, keyword]);

  console.log(data);

  return (
    <>
      {!data ? (
        <Spinner detail="" />
      ) : (
        <>
          <div id={appStyles.mobileVisible}>
            <GifMap data={data} cols={2} />
          </div>
          <div id={appStyles.desktopVisible}>
            <GifMap data={data} cols={4} />
          </div>
        </>
      )}
    </>
  );
}

export default Gifs;
