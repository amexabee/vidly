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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route path="movies" element={<Movies />} />
      <Route path="customers" element={<Customers />} />
      <Route path="rentals" element={<Rentals />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
