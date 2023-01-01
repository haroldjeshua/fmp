const Input = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};

export default Input;
