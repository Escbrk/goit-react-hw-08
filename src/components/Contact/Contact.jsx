import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contacts;
  return (
    <>
      <div>
        <p>
          <RiContactsFill />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id))
            .unwrap()
            .then(() => toast.success("Deleted"))
            .catch((e) => toast.error(e));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contacts;
