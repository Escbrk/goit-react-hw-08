import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => toast.success("Downloaded"))
      .catch((e) => toast.error(e));
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
    </div>
  );
};

export default Contacts;
