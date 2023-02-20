import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = (props) => {
  const { items, columns, sortColumn, onSort } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody items={items} columns={columns} />
    </table>
  );
};

export default Table;
