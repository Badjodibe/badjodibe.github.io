import { NavLink } from "react-router-dom";
function Services(){
return(
    <>
        <div className="blog-container">
          <h1 className="blog-title" id="#voir-plus">
          J'aime les défis, je vous aident sur vos projet
          </h1>
          <p className="blog-description">
          Voici les projets qui sont á ma porté, les projets surlesquelles j'intevient
          </p>
        </div>
        <div className="blog-phrase">
           <h2 className="blog-accueil">Explorez les!</h2>
        </div>
        <div className='blog-article'>
            <div className='blog-article-content'>
                <div className="b-title">
                  <h3> Développement de Système d'information </h3>
                  </div>
                <div className="paragraphe">
                  <p >
                    Le deep learning est une catégorie d'intelligence artificielle immitant le fonctionnement
                    des réseaux de neuronnes biologique pour résoudre les problèmes complexes.
                  </p>
                </div>
                <div><NavLink to={"/blog/deepLearning"} className="lien">Lire plus</NavLink></div>
            </div>
            <div className='blog-article-content'>
                <div className="b-title">
                  <h3> Analyse de données</h3>
                  </div>
                <div  className="paragraphe">
                  <p>
                    Nous vivons dans un monde où les données jouent un rôle crucial dans les processus
                    de prise de décision. Toute les entreprises font des courses á la conquête de données
                  </p>
                </div>
                <div><NavLink to={"/blog/data-for-business"} className="lien">Lire plus</NavLink></div>
            </div>
            <div className='blog-article-content'>
                <div className="b-title">
                  <h3>Mise en place de Système Intellgente</h3>
                  </div>
                <div className="paragraphe">
                  <p >
                    Si tu ingénieur en big data, data cette article je vais te rendre facile l'installation 
                    d'un cluster de hadoop, non seulement vous allez comprendre le système de hadoop vous ...
                  </p>
                </div>
                <div><NavLink to={"/blog/set-up-hadoop-cluster"} className="lien">Lire plus</NavLink></div>
            </div>
        </div>
        <div>
            <div>Mes outils</div>
        </div>
        <div>
            <div>
                <h4>Language de Programmation</h4>
            </div>
        </div>
      </>
);
}
export default Services;