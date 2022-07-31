import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(({ contacts, name }) => {
      const contact = {
        name,
        id: nanoid(),
      };

      return {
        contacts: [contact, ...contacts],
        name: '',
      };
    });
  };

  render() {
    const { name, contacts } = this.state;

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
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}
