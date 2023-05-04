import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Team from './components/Team';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="service" element={<Team />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
