import "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const filter = useSelector(selectVisibleContacts);


  return (
    <ul>
      {filter.map((filteredContact) => {
        return (
          <li key={filteredContact.id}>
            <Contact contacts={filteredContact} />
          </li>
        );
      })}
    </ul>
  );
}
