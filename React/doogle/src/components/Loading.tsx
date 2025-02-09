import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <BallTriangle color="#00bfff" height={550} width={80} />
    </div>
  );
};

export default Loading;
