import mainImage from "../asset/Image/main.png";
import { SignupForm } from "../components/index";
const Signup = () => {
  return (
    <div className="flex justify-around items-center">
      <img src={mainImage} alt="" className="w-[50rem]" />
      <SignupForm />
    </div>
  );
};

export default Signup;
