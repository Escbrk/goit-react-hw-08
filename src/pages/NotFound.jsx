import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Error 404. Page Not Found</h1>
      <Link to="/">Back to Home Page</Link>
    </>
  );
};

export default NotFound;
