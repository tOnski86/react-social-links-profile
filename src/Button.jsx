import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button className='font-medium bg-grey-700 text-white w-full px-4 py-3 rounded-lg hover:bg-green hover:text-grey-900 transition-all	'>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
