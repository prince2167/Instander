import mainImage from "../asset/Image/main.png";
import { LoginForm } from "../components/index";

const Login = () => {
  return (
    <div className="flex  justify-around items-center min-h-screen">
      <img src={mainImage} alt="" className=" hidden xl:block w-[50rem]" />
      <LoginForm />
    </div>
  );
};

export default Login;
