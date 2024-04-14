export default function Accueil() {
    return (
        <Principal/>
    );
  }
function Principal(){
    return(
        <>
        <div className='presentation'>
                <h1 className='accueil'>Bienvenue!</h1>
                <p className='accueil-content'>
                Salut, je suis Dibe, un développeur avec plus de 4 ans d'expérience dans le domaine de la programmation.
                Mon objectif est d'aider à transformer des idées en réalité numérique.
                Que ce soit en développant des applications, l'analyse de données j'aime relever
                les défis techniques et trouver des solutions innovantes. <span className='lien'><a href="./about">En savoir plus sur moi</a></span>
                <br/>
                <br/>
                Retrouver-moi sur
                <span className='lien'> <a href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/">linkedIn </a></span> ou 
                sur <span className='lien'> <a href="https://github.com/badjodibe">GitHub</a></span>.
                <br/> <br/>
                En plus de développement, j'ai une passion pour l'enseignement et le partage de connaissance. 
                j'ai créer une page sur laquelle je dépose des ressources, liées á la programmation.
                 <span className='lien'> <a href="https://github.com/mabakal">Visite la page</a></span>.<br/>
                </p>
        </div>
        <hr/>
        <div className="blog-phrase">
           <h2 className="blog-accueil">Articles</h2>
        </div>
        <hr />
        <div className='bg-gray-200'>
            <div className='article-content'>
                <div className='article-display'>
                    <h2 className='article-title'>Qu'est ce que le Deep Learning</h2>
                    <p className='article-description'>
                    Le Deep Learning, une branche de l'apprentissage automatique, 
                    s'inspire du fonctionnement des réseaux de neurones humains pour résoudre 
                    des problèmes complexes. Cet article explore 
                    l'apprentissage profond ainsi que ses applications dans divers domaines.
                </p>
                </div>
                <div>
                    <button className='button'><a href="#/blog/deepLearning">Voir plus</a></button>
                </div>
            </div>
            <hr />
            <div className='article-content'>
                <div className='article-display'>
                    <h2 className='article-title'>L'analyse de données</h2>
                    <p className='article-description'>
                    Les données occupent une place très importante dans notre société. Qu'est ce que les données
                    et en quoi sont ils si importantes. Ce article présente les atouts de l'analyse de données.
                    </p>
                </div>
                <div>
                    <button className='button'><a href="#/blog/data-for-business">Voir plus</a></button>
                </div>
            </div>
            <hr />
            <div className='article-content'>
                <div className='article-display'>
                    <h2 className='article-title'>Hadoop</h2>
                    <p className='article-description'>
                    Hadoop est un système de traitement de données distribué très utilisé dans les entreprises, 
                    c'est une solution aux problèmes rencontrés par les Systèmes de gestion de base de données habituel.
                    Cet article est un guide pour mettre en place un cluster de hadoop.
                    </p>
                </div>
                <div>
                    <button className='button'><a href="#/blog/set-up-hadoop-cluster">Voir plus</a></button>
                </div>
            </div>
        </div>
        <div className='show-more-content'>
            <button className='show-more'><a href="#/blog">Voir Plus</a></button>
        </div>
        </>
    );
}
