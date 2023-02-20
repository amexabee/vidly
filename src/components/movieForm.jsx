import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Movie Form - {id}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
