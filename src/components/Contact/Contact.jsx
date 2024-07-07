import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { useState } from "react";
import ContactEditor from "../ContactEditor/ContactEditor";

const Contacts = ({ contacts }) => {
  const [isEditing, setIsEditing] = useState();
  const dispatch = useDispatch();
  const { name, number, id } = contacts;

  return (
    <>
      {isEditing ? (
        <ContactEditor
          initialValue={contacts}
          contactId={id}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <div>
          <p className={css.info}>
            <RiContactsFill />
            {name}
          </p>
          <p className={css.info}>
            <FaPhone />
            {number}
          </p>
        </div>
      )}

      {!isEditing && (
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
      )}
    </>
  );
};

export default Contacts;
