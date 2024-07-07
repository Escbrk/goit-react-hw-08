import { FaAddressCard } from "react-icons/fa6";
import css from "./Home.module.css";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia.jsx";

const Home = () => {
  return (
    <div>
      <h1>Hello, User!</h1>
      <p>This contact app will help you to organize your contacts!</p>
      <FaAddressCard className={css.contactCard} />

      <SocialMedia />

      <h2>Made by Paul </h2>
    </div>
  );
};

export default Home;
