import { useState } from 'react';
import Section from "components/Section/Section";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import Phonebook from "components/Phonebook/Phonebook";

export default function ContactsView() {
  const [filter, setFilter] = useState('');
  
  return (
    <>
      <Section title='Phonebook'>
        <Phonebook />
      </Section>
        
      <Section title='Contacts'>
        <ContactsList filter={filter}/>
      </Section>
      
      <Section>
        <Filter filterValue={filter} onFilterContact={setFilter}/>
      </Section>
    </>
  )
}