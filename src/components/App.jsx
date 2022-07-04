import React from 'react';
import { Form } from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    // this.state.contacts.forEach(contact => {
    //   if (contact.name === data.name) {
    //     alert(`${data.name} is already in contacts`);
    //   }
    //   return;
    // });
    this.setState(({ contacts }) => {
      contacts.forEach(contact => {
        if (contact.name === data.name) {
          alert(`${data.name} is already in contacts`);
          return;
        }
      });
      return { contacts: [data, ...contacts] };
    });
  };

  deleteContact = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(() => {
      return { contacts: filteredContacts };
    });
  };

  onChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  returnFilteredContacts() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={this.returnFilteredContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
