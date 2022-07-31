import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(({ contacts, name, number }) => {
      const contact = {
        name,
        id: nanoid(),
        number,
      };

      return {
        contacts: [contact, ...contacts],
        name: '',
        number: '',
      };
    });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleNumberChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
