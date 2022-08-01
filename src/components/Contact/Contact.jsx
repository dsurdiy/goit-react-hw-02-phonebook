import PropTypes from 'prop-types';

export const Contact = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
