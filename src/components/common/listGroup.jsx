const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedGenre, onItemSelect } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            selectedGenre === item
              ? 'list-group-item active'
              : 'list-group-item'
          }
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
