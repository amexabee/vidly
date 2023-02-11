import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import NavBar from './components/navBar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/login';
import RegisterForm from './components/registerForm';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="customers" element={<Customers />} />
      <Route path="rentals" element={<Rentals />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="new" element={<MovieForm />} />
      <Route index element={<Movies />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
