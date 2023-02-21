import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Navigate to="movies" replace />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<MovieForm />} />
      <Route path="customers" element={<Customers />} />
      <Route path="rentals" element={<Rentals />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="not-found" replace />} />
    </Route>
  )
);

function App() {
  return (
    // <main className="container">
    //   <Movies />
    // </main>
    <RouterProvider router={router} />
  );
}

export default App;
