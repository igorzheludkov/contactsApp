import './App.css'
import PhoneForm from './components/phoneForm'
import ContactsList from './components/contactsList'
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState([])

  function removeContact(e) {
    setContacts(contacts.filter((el, i) => i !== +e.target.value))
  }

  function getContact(e) {
    setContacts([...contacts, JSON.parse(e.target.value)])
  }

  return (
    <>
      <PhoneForm getContact={getContact} />
      <ContactsList contacts={contacts} removeContact={removeContact}/>
    </>
  )
}

export default App
