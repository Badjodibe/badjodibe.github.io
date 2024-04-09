import { NavLink } from "react-router-dom";

export default function Blog() {
    return (
      <>
        <div className="blog-container">
          <h1 className="blog-title" id="#voir-plus">
          Je partage sur la développement de logiciel ainsi que toutes autres pensées
          qui me viennent et que je juge bon de partager.
          </h1>
          <p className="blog-description">
          Si tu es intéressé par le développement informatique ou par l'utilisation
          de la technologie pour améliorer ton activité, tu trouveras ici des articles intéressants.
          </p>
        </div>
        <div className="blog-phrase">
           <h2 className="blog-accueil">Explorez les!</h2>
        </div>
        <div className='blog-article'>
            <div className='blog-article-content'>
                <div className="b-title">
                  <h3> Qu'est ce que le Deep Learning?</h3>
                  </div>
                <div className="paragraphe">
                  <p >
                    Le deep learning est une catégorie d'intelligence artificielle immitant le fonctionnement
                    des réseaux de neuronnes biologique pour résoudre les problèmes complexes...
                  </p>
                </div>
                <div><NavLink to={"/blog/deepLearning"} className="lien">Lire plus</NavLink></div>
            </div>
            <div className='blog-article-content'>
                <div className="b-title">
                  <h3> Importance des données?</h3>
                  </div>
                <div  className="paragraphe">
                  <p>
                    Nous vivons dans un monde où les données jouent un rôle crucial dans les processus
                    de prise de décision. Toutes les entreprises font des courses á la conquête de données...
                  </p>
                </div>
                <div><NavLink to={"/blog/data-for-business"} className="lien">Lire plus</NavLink></div>
            </div>
            <div className='blog-article-content'>
                <div className="b-title">
                  <h3>Mettre en place un cluster de hadoop</h3>
                  </div>
                <div className="paragraphe">
                  <p >
                    Le volume de données généré deviennent de plus en plus grand à un point que les systèmes
                    de stockage habituel rencontre des limites. Hadoop est un système de traitement de données ...
                  </p>
                </div>
                <div><NavLink to={"/blog/set-up-hadoop-cluster"} className="lien">Lire plus</NavLink></div>
            </div>
        </div>
      </>
    );
  }
