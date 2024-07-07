import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filter = useSelector(selectFilteredContacts);

  return (
    <ul className={css.container}>
      {filter.map((filteredContact) => {
        return (
          <li key={filteredContact.id} className={css.list}>
            <Contact contacts={filteredContact} />
          </li>
        );
      })}
    </ul>
  );
}
