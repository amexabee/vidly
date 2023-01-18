import './App.css';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="customers" element={<Customers />} />
      <Route path="rentals" element={<Rentals />} />
      <Route path=":id" element={<MovieForm />} />
      <Route index element={<Movies />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
