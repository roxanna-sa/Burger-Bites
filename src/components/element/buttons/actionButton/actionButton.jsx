import './actionButton.scss'

const Action = ({ className, text, onClick }) => {

  return (
    <button type='button' className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Action;

