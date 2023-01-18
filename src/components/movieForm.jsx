import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const MovieForm = () => {
  //   const { id } = useParams();
  const [navigate, setNavigate] = useState(false);
  if (navigate) return <Navigate to="/products" replace={true} />;

  return (
    <div>
      <h1>Movie Form -{/*id*/}</h1>
      <button onClick={() => setNavigate(true)}>Save</button>
    </div>
  );
};

export default MovieForm;
