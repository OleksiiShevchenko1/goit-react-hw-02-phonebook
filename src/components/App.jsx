import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    filterContacts: [],
  };

  addContact = data => {
    const newContact = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  filterContacts = ev => {
    this.setState({
      filterContacts: this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(ev.target.value.toLowerCase())
      ),
    });
  };

  updateFilter = ev => {
    this.setState({ filter: ev.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} />
        <ContactList
          contacts={
            this.state.filterContacts.length
              ? this.state.filterContacts
              : this.state.contacts
          }
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
