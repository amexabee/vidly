// import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Form from './common/form';

// const MovieForm = () => {
//   // const { id } = useParams();
//   const [navigate, setNavigate] = useState(false);
//   if (navigate) return <Navigate to="/" replace={true} />;

//   return (
//     <div>
//       <h1>Movie Form</h1>
//       <button className="btn btn-primary" onClick={() => setNavigate(true)}>
//         Save
//       </button>
//     </div>
//   );
// };

class MovieForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
    navigate: false,
  };
  handleNavigate = () => {
    this.setState({ navigate: true });
  };

  render() {
    if (this.state.navigate) return <Navigate to="/" replace={true} />;
    return (
      <div>
        <h1>Movie Form</h1>
        <button className="btn btn-primary" onClick={this.handleNavigate}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
