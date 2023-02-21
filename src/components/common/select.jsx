const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <select {...rest} className="form-control" id={name}>
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
