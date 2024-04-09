import  {NavLink}  from 'react-router-dom';
export default function Accueil() {
    return (
        <Principal/>
    );
  }
function Principal(){
    return(
        <>
        <div className='presentation'>
            <div>
                <h1 className='accueil'>Bienvenue!</h1>
                <p className='accueil-content'>
                Salut, je suis Dibé, ingénieur logiciel spécialisé dans la conception et le développement
                de systèmes informatiques. En tant qu'éternel apprenant, je suis actuellement en Master 2,
                travaillant sur l'utilisation du Big Data associé à l'Apprentissage Profond pour
                le traitement d'images biomédicales.
                <br/>
                Sur cette page vous trouverez des ressources liées á au développement informatique.
                Ces ressources sont liées á l'utilisation du développement pour améliorer les activités ou 
                les compétences en informatique.
                <span><a href="./About">En savoir plus sur moi</a></span><br/>
                Tu peux me retrouver sur 
                <span className='follow'> <a href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/">linkedIn </a></span> ou 
                sur <span className='follow'> <a href="https://github.com/badjodibe">GitHub</a></span>.
                <br/> <br/>
                Se lancer dans la programmation demande du travail, c'est pourquoi j'ai créé une
                page pour aider ceux qui désirent emprunter ce chemin. J'y dépose des codes, des
                tutoriels, des cours et des projets pour t'accompagner dans ton parcours.
                Tu y trouveras une multitude de ressources. <span className='follow'> <a href="https://github.com/mabakal">Visite la page</a></span>.<br/>
                </p>
            </div>
        </div>
        <div className="blog-phrase">
           <h2 className="blog-accueil">Voici quelques-uns de mes articles</h2>
        </div>
        <hr />
        <div className='article-content'>
            <div className='article-display'>
                <h2 className='article-title'>Qu'est ce que le Deep Learning</h2>
                <p className='article-description'>
                Le Deep Learning est une branche de l'apprentissage automatique qui imite le fonctionnement 
                des reseaux de neurones humain pour résoudre les problèmes complèxe. Cet article présente 
                l'apprentissage profond ainsi que les problèmes que quelques domaine d'applications
              </p>
            </div>
            <div><button className='button'><NavLink to = {"/Blog"}> Voir plus</NavLink></button></div>
        </div>
        <hr />
        <div className='article-content'>
            <div className='article-display'>
                <h2 className='article-title'>L'analyse de données</h2>
                <p className='article-description'>
                Les données occupent une place très importante dans notre société. Qu'est ce que les données
                et en quoi sont ils si importantes. Ce article présente les atouts de l'analyse de données
                </p>
            </div>
            <div><button className='button'><NavLink to = {"/Blog"}> Voir plus</NavLink></button></div>
        </div>
        <hr />
        <div className='article-content'>
            <div className='article-display'>
                <h2 className='article-title'>Hadoop</h2>
                <p className='article-description'>
                Hadoop est un système de traitement de données distribué très utilisé dans les entreprises, 
                c'est une solution aux problèmes rencontrés par les Systèmes de gestion de base de données habituel.
                Cet article est un guide pour la mettre en place un cluster de hadoop.

                </p>
            </div>
            <div><button className='button'><NavLink to = {"/Blog"}> Voir plus</NavLink></button></div>
        </div>
        <div className='show-more-content'>
            <button className='show-more'><a href="./Blog">Voir plus</a></button>
            </div>
        </>
    );
}
