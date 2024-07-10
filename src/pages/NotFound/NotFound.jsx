import { Link } from "react-router-dom";
import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <>
      <h1>Error 404. Page Not Found</h1>
      <Link className={css.link} to="/">Back to Home Page</Link>
    </>
  );
};

export default NotFound;
