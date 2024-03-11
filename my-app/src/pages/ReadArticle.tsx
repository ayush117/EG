import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const ReadArticle = () => {
  let { id } = useParams();
  const [article, setArticle] = useState({
    id: "",
    summary: "",
    title: "",
  });
  const { data, loading, error } = useFetch(
    `https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`
  );

  useEffect(() => {
    if (data !== null) {
      setArticle(data);
    }
  }, [loading, error]);

  if (loading || error) {
    throw new Promise(resolve => setTimeout(resolve, 1000));
  }

  return (
    <>
      <div>
        {article && article.id}
        <h1 className="text-3xl text-red-400 font-bold underline">
          Articles {id}
        </h1>
      </div>
      <div className="text-white rounded mt-10 text-left text-xl">
        <div>Title :</div>
        <div className="mt-10">Summary :</div>
      </div>
    </>
  );
};

export default ReadArticle;
