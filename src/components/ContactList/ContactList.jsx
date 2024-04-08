import "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filter = useSelector(selectFilteredContacts);

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
