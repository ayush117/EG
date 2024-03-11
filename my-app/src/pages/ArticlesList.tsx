import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const ArticlesList = () => {
  const { data, loading, error } = useFetch(
    "https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles"
  );

  if (loading || error) {
    throw new Promise(resolve => setTimeout(resolve, 1000));
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-red-400 font-bold underline">
          Articles
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {data !== null &&
          (data as any[]).map((item: any) => <Card data={item} />)}
      </div>
    </>
  );
};

export default ArticlesList;
