import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
