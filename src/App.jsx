import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/Public/About'
import Welcome from './Pages/Public/Welcome'
import Hadoop from './Pages/Posts/setup-hadoop-cluster-on-aws';
import Lstm from './Pages/Posts/understand-lstm';
import DeepLearning from './Pages/Posts/what-is-deep-learning';
import Business from './Pages/Posts/data-for-business';
import SpringDataJpa from './Pages/Posts/spring-data-jpa';
import Footer from './Components/Footer';
import Blog from './Pages/Public/Blog';
import Header from './Components/Header';
import Contact from './Components/ContactMe';
import { HashRouter } from "react-router-dom";
import APIREST from './Pages/Posts/api-rest';
import Feature from './Pages/Posts/feature-engenering';
import SpringJWT from './Pages/Posts/spring-jwt-security';
import Formations from './Pages/Public/Formations';
const App = () => {
  return (
    <>
      <Header/>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route path="/about" element={<About/>} />
            <Route path='/posts/setup-hadoop-cluster-on-aws' element={<Hadoop/>}/>
            <Route path='/posts/understand-lstm' element={<Lstm/>}/>
            <Route path='/posts/what-is-deep-learning' element={<DeepLearning/>}/>
            <Route path='/posts/data-for-business' element={<Business/>}/>
            <Route path='/posts/spring-data-jpa' element={<SpringDataJpa/>}/>
            <Route path='/posts/spring-boot-jwt-security' element={<SpringJWT/>}/>
            <Route path='/posts/api-rest' element={<APIREST/>}/>
            <Route path='/posts/feature-engenering' element={<Feature/>}/>
            <Route path='/posts' element={<Blog/>}/>
            <Route path='/contacts' element={<Contact/>}/>
            <Route path='/formations' element={<Formations/>}/>

          </Routes>
        </HashRouter>
      <Footer/>
    </>
    
  );
};

export default App;
