import { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

const ContactEditor = ({ contactId, initialValue, onClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);
  console.log(value.id);

  // const handleChange = () => {
  //   //
  // };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(editContact(value))
          .then(() => onClose())
          .catch(() => console.log(2));
        //
      }}
    >
      <input
        type="text"
        onChange={(e) =>
          setValue({
            name: e.target.value,
          })
        }
      />
      <button>Save</button>
    </form>
  );
};

export default ContactEditor;
