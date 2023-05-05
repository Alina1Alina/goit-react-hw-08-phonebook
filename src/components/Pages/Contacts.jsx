import {ContactForm} from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title } from 'components/ContactForm/StyledContactForm';

 
export const Contacts = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};


