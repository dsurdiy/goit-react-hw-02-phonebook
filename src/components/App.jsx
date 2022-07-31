import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </label>

        <ul>
          {filteredContacts.map(({ name, id, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
