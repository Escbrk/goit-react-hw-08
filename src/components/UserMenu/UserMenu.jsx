import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import toast from "react-hot-toast";
import css from './UserMenu.module.css'

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut())
            .unwrap()
            .then(() => toast.success("You're logged Out!"))
            .catch(() => toast.error("Error, pls try again!"));
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
