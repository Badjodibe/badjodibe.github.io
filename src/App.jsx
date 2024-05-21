import './App.css'
import Blog from './Pages/Blog';
import About from './Pages/About';
import Accueil from './Pages/Accueil';
import   {Navigation }  from './Components/Components';
import DeepLearning from './Articles/deepLearning';
import DataForBusiness from './Articles/data-for-business';
import HadoopCluster from './Articles/set-up-hadoop-cluster';
import Services from './Pages/Services';
import ErrorPage from './Pages/ErrorPage';
import Lstm from './Articles/lstm';

import {
  RouterProvider,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Accueil/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/erroElement' element={<ErrorPage/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/blog/deepLearning' element={<DeepLearning/>}/>
    <Route path='/blog/data-for-business' element={<DataForBusiness/>}/>
    <Route path='/blog/set-up-hadoop-cluster' element={<HadoopCluster/>}/>
    <Route path='/blog/lstm' element={<Lstm/>}/>
</Route>
  )
  );

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App
