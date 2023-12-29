import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/api';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from '@chakra-ui/react';
import { selectIsLoading } from 'redux/selectors';
import { ContactFormBox, ContactListBox, ContactPageBox } from './Contacts.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactPageBox>
      <ContactFormBox>
      <ContactForm />
        <ContactFilter />
      </ContactFormBox>
      <ContactListBox>
        {isLoading ? <Spinner color="orange.500" /> : <ContactList />}
      </ContactListBox>
    </ContactPageBox>
  );
}