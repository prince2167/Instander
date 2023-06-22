import { ShimmerPostCard } from "../ShimmerCard/ShimmerPostCard";
import { CreatePsot } from "../components/index";

const Home = () => {
  return (
    <div className="w-700">
      <CreatePsot />
      <ShimmerPostCard />
    </div>
  );
};

export default Home;
