import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { Oval } from 'react-loader-spinner';
// import { filterContacts } from 'components/helpers/filterContacts';
import s from 'components/ContactsList/ContactsList.module.css'
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactsList({ filter }) {

  const { contacts, isFetching } = useGetContactsQuery(undefined, {
    selectFromResult: ({data, isFetching}) => ({
      contacts: data && data.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())),
      isFetching
    })
  });

  return (
    <>
      {contacts && contacts.length === 0 && <p>Контактов не найдено </p>}

      {contacts &&
        <ul className={s.list}>
          {contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
        </ul>}
      
      {isFetching && <Oval color="#00FFFF" height={40} width={40} />}
    </>
  )
}