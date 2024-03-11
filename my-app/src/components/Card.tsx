import { useNavigate } from "react-router-dom";

const Card = ({ data }: { data: any}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/articles/:" + data.id);
  }

  return (
    <>
      <div className="flex flex-col justify-between h-60 w-60 rounded bg-slate-700 p-4">
        <div className="text-lg text-white">
          {data.title}
        </div>
        <div className="">
          <button className="w-full h-10 rounded-2xl bg-orange-300 text-xl" onClick={handleClick}>Read</button>
        </div>
      </div>
    </>
  );
};

export default Card;
