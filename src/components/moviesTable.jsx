import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;

  const columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => <Link to={movie._id}>{movie.title}</Link>,
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stoke' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          onClick={() => onDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      items={movies}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default MoviesTable;