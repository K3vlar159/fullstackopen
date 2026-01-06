import { useState } from 'react'
import PersonForm from './PersonForm'
import Contact from './Contact'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value)
  }

  

  const filteredPersons = (filter === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter = {filter} 
        handleFilterChange = {handleFilterChange}
      />
      <PersonForm 
        handleNameChange = {handleNameChange} 
        handleNumChange = {handleNumChange} 
        addPerson = {addPerson} 
        newName = {newName} 
        newNumber = {newNumber}
      />
      <h2>Numbers</h2>
      {filteredPersons.map(person => 
          <Contact key={person.name} person = {person} />
        )}
    </div>
  )
}

export default App