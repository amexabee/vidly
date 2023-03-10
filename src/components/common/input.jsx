const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input {...rest} className="form-control" id={name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
