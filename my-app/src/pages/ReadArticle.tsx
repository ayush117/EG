import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const ReadArticle = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    id: "",
    summary: "",
    title: "",
    fullText: "",
  });
  const { data, loading, error } = useFetch(
    `https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`
  );

  const handleClick = () => {
    navigate("/articles");
  }
  useEffect(() => {
    if (data !== null) {
      setArticle(data);
    }
  }, [data]);

  if (loading || error) {
    throw new Promise(resolve => setTimeout(resolve, 1000));
  }

  return (
    <>
      <div className="m-0 py-40 px-8 max-w-[700px]">
        <section className="mb-10 p-16 bg-white rounded-lg text-left">
          <h1 className="text-[#204754] font-sans mb-8 text-5xl">{article.title}</h1>
          <p className="text-[#204754] font-sans text-xl">{article.summary}</p>
          <br/>
          <p className="text-[#204754] font-sans text-3xl">{article.fullText}</p>
          <button className="mt-6 p-4 bg-indigo-400 rounded-2xl" onClick={handleClick}>See all articles</button>
        </section>
      </div>
    </>
  );
};

export default ReadArticle;
