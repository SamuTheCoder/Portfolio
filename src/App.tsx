import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { AboutPage } from './pages/AboutPage';
import { ProjectPage } from './pages/ProjectPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjBoardPage } from './pages/projects/ProjBoardPage';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <ProjectsPage /> },
      { path: '/projects/projboard', element: <ProjBoardPage /> },
      { path: '/projects/:slug', element: <ProjectPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '*', element: <ProjectPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
