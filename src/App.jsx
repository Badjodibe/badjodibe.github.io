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
import Problems from './Pages/Public/Problems';
import SommesDesPaires from './Practices/Probleme-de-la-somme-des-paires-dans-un-tableau';
import TrieBulle from './Practices/trie-a-bulle';
import TrieParInsertion from './Practices/trie-par-insertion';
import TrieParSelection from './Practices/trie-par-selection';
import RotationDeChaineDeCharactere from './Practices/rotation-de-chaine-de-caractere';
import Palindrome from './Practices/palindrome';
import InversionDeMot from './Practices/inversion-de-mot';
import SuppressionDeDoublons from './Practices/suppression-de-doublons';
import CompressionDeChaineDeCharactere from './Practices/compression-de-chaine-de-caractere';
import PremierChaineNonRepeter from './Practices/caractere-non-reperte';
import Anagramme from './Practices/anagrame';
import CommingSoon from './Components/comming';
import Transposition from './Practices/transpostion';
import RotationMatrix from './Practices/grand-sous-tableaux';
import Hadmard from './Practices/hadmard';
import PlusGrandSousTableau from './Practices/grand-sous-tableaux';
import ChiffrementCesar from './Practices/chiffrement-cesar';
import MatriceSommes from './Practices/matrice-somme';
import KPP from './Practices/kpp';
import PermutationDeChaine from './Practices/permutation-chaine';
import ParentheseValid from './Practices/parenthese-valide';

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
            <Route path='/ressources/problems' element={<Problems/>}/>
            <Route path='/ressources/problems/probleme-de-la-somme-des-paires-dans-un-tableau' element={<SommesDesPaires/>}/>
            <Route path='/ressources/problems/trie-par-bulle' element={<TrieBulle/>}/>
            <Route path='/ressources/problems/trie-par-insertion' element={<TrieParInsertion/>}/>
            <Route path='/ressources/problems/trie-par-selection' element={<TrieParSelection/>}/>
            <Route path='/ressources/problems/rotation-de-chaine-de-caractere' element={<RotationDeChaineDeCharactere/>}/>
            <Route path='/ressources/problems/palindrome' element={<Palindrome/>}/>
            <Route path='/ressources/problems/transposition-matrice' element={<Transposition/>}/>
            <Route path='/ressources/problems/inversion-de-mot' element={<InversionDeMot/>}/>
            <Route path='/ressources/problems/rotation-de-matrice' element={<RotationMatrix/>}/>
            <Route path='/ressources/problems/hadmard' element={<Hadmard/>}/>
            <Route path='/ressources/problems/chiffrement-de-cesar' element={<ChiffrementCesar/>}/>
            <Route path='/ressources/problems/kpp-algorithme' element={<KPP/>}/>
            <Route path='/ressources/problems/plus-grand-sous-tableau' element={<PlusGrandSousTableau/>}/>
            <Route path='/ressources/problems/matrice-somme' element={<MatriceSommes/>}/>
            <Route path='/ressources/problems/suppression-de-doublons' element={<SuppressionDeDoublons/>}/>
            <Route path='/ressources/problems/compression-de-chaine-de-caractere' element={<CompressionDeChaineDeCharactere/>}/>
            <Route path='/ressources/problems/premier-caractere-non-repete' element={<PremierChaineNonRepeter/>}/>
            <Route path='/ressources/problems/permutation-de-chaine' element={<PermutationDeChaine/>}/>
            <Route path='/ressources/problems/anagramme' element={<Anagramme/>}/>
            <Route path='/ressources/problems/parenthese-valid' element={<ParentheseValid/>}/>
            <Route path='/formations/python-comming' element={<CommingSoon urlImage={"/python.png"} title={"Cette formation sera bientôt disponible"}/>}/>
            <Route path='/formations/data-analysis-comming' element={<CommingSoon urlImage={"/data.png"} title={"Cette formation sera bientôt disponible"}/>}/>
          </Routes>
        </HashRouter>
      <Footer/>
    </>
    
  );
};

export default App;
