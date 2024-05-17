import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GifsModule from "../../components/Gifs/GifsModule";

function Trending() {
  const { trending } = useParams();
  const [urlPath, setUrlPath] = useState(trending);

  useEffect(() => {
    setUrlPath(trending);
  }, [trending]);

  return <GifsModule value={urlPath} />;
}

export default Trending;
