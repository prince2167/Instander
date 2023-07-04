import axios from "axios";

const loginService = async (formData) =>
  await axios.post("/api/auth/login", formData);

const signupService = async (formData) =>
  await axios.post("/api/auth/signup", formData);
export { loginService, signupService };
