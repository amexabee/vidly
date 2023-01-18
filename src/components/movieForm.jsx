import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const MovieForm = () => {
  const { id } = useParams();
  const [navigate, setNavigate] = useState(false);
  if (navigate) return <Navigate to="/" replace={true} />;

  return (
    <div>
      <h1>Movie Form -{id}</h1>
      <button className="btn btn-primary" onClick={() => setNavigate(true)}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
