import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
