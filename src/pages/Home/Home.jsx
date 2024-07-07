import { FaAddressCard } from "react-icons/fa6";
import css from "./Home.module.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia.jsx";

const Home = () => {
  return (
    <div>
      <h1>Hello, User!</h1>
      <h2>This contact app will help you to organize your contacts!</h2>
      <FaAddressCard className={css.contactCard} />

      <SocialMedia />

      <p className={css.sign}>Made by Paul&trade; </p>
    </div>
  );
};

export default Home;
