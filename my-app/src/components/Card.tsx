import { useNavigate } from "react-router-dom";

const Card = ({ data }: { data: any}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/articles/" + data.id);
  }

  return (
    <>
      <div className="flex font-sans flex-col justify-between min-h-60 max-w-[700px] rounded-lg bg-slate-700 p-6">
        <div className="text-2xl font-bold text-left text-white">
          {data.title}
          <p className="text-lg font-normal mt-4">{data.summary}</p>
        </div>
        <div className="text-left mt-8">
          <button className="w-full max-w-40 h-10 rounded-lg bg-orange-300 text-xl" onClick={handleClick}>View</button>
        </div>
      </div>
    </>
  );
};

export default Card;
