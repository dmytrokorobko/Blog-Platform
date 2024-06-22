import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { About } from './pages/About';
import { Page404 } from './pages/Page404';
import { Article } from './pages/Article';
import { Login } from './pages/Auth/Login';
import { Dashboard } from './pages/Auth/Dashboard';
import { LoginArticles } from './pages/Auth/LoginArticles';
import { LoginEdit } from './pages/Auth/LoginEdit';

function App() {
  const myRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}/>
      <Route path='/articles' element={<Articles />}/>
      <Route path='/articles/:slug' element={<Article />}/>
      <Route path='/about' element={<About />}/>

      <Route path='/login' element={<Login />}/>
      <Route path='/auth' element={<Dashboard />}>
        <Route path='articles' element={<LoginArticles />}/>
        <Route path='article' element={<LoginEdit />}/>
        <Route path='article/:id' element={<LoginEdit />}/>
      </Route> 

      <Route path='/404' element={<Page404 />}/>
      <Route path='/*' element={<Page404 />}/>
    </Route>
  ))
  return (
    <RouterProvider router={myRoutes} />
  );
}

export default App;
