import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = () => {
  console.log(process.env.PUBLIC_URL + '메렁');
  const router = createBrowserRouter([
    {
      path: `${process.env.PUBLIC_URL}/`,
      element: <Home />,
    },
    {
      path: `${process.env.PUBLIC_URL}/movie/:id`,
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
