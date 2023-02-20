const TableHeader = (props) => {
  const { columns, sortColumn, onSort } = props;
  const raiseSort = (path) => {
    const sorted = { ...sortColumn };
    if (sorted.path === path)
      sorted.order = sorted.order === 'asc' ? 'desc' : 'asc';
    else sorted.order = 'asc';
    sorted.path = path;
    onSort(sorted);
  };

  const renderSortIcon = (column) => {
    if (sortColumn.path !== column.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
