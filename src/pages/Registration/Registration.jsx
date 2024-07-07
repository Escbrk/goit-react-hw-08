import { Link } from "react-router-dom";
import RegistrationForm from "../../components/Forms/RegistrationForm/RegistrationForm";

const Registration = () => {
  return (
    <>
      <p>
        Don&#39;t have an account? Don&#39;t worry, it will only take a few
        seconds 😉
      </p>
      <RegistrationForm />
      <p>
        Or &#9;
        <Link to="/login">login</Link>
      </p>
    </>
  );
};

export default Registration;
