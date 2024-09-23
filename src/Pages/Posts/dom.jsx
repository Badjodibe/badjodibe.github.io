export default function(){

    return(
        <>
             <div className="postMeta">
                <div className="postDate">Publier le 19 Août 2024 </div>
            </div>
            <h1>Les DOM(Document Object Model)</h1>
            <div className="postImage">
                <img src="../../../deep learning.jpg" alt=""/>
            </div>
            <div className="postContent">
                <h3> Introduction</h3>
                <p>
                    Dans le développement web, le Document Object Model (DOM) est une interface essentielle
                    pour manipuler les documents HTML et XML. Il permet aux développeurs d'accéder et de 
                    modifier le contenu, la structure et le style des pages web de manière dynamique.
                    Dans cet article, nous explorerons les bases du DOM, son fonctionnement, et comment il
                    est utilisé dans le développement web moderne.
                </p>
                <h4>Qu'est ce qu'un DOM?</h4>
                <p>
                    Le DOM est une représentation en mémoire d'un document HTML ou XML sous forme d'une 
                    arborescence. Chaque élément, attribut, et texte dans le document est représenté comme 
                    un objet dans cette structure hiérarchique. En d'autres termes, le DOM transforme un 
                    document en une série d'objets accessibles par les langages de programmation, principalement
                    JavaScript.
                </p>

                <h4>Structure du DOM</h4>
                <p>
                    <ul>
                        <li>
                            <h5>Document</h5>
                            <p>
                                La racine de l'arborescence. C'est le point d'entrée pour accéder à tous les autres objets du DOM.
                            </p>
                        </li>
                        <li>
                            <h5>Éléments</h5>
                            <p>
                            Chaque balise HTML comme  <pre><code> (div, p, a)</code></pre>  est représentée
                            comme un objet dans l'arborescence. Les éléments peuvent avoir des enfants, ce
                            qui crée une hiérarchie.
                            </p>
                        </li>
                        <li>
                            <h5>Attributs</h5>
                            <p>
                                Les propriétés des éléments HTML, comme <pre><code> (class, id, href)</code></pre>  sont également des
                                objets dans le DOM. Ils sont associés aux éléments qu'ils décrivent.

                            </p>
                        </li>
                        <li>
                            <h5>Noeuds de texte</h5>
                            <p>
                                Le texte contenu dans les éléments est également représenté comme des objets
                                dans le DOM. Ces nœuds sont des enfants des éléments auxquels ils 
                                appartiennent.
                            </p>
                        </li>
                    </ul>
                </p>
                <h4>Manipulation d'un DOM</h4>
                <p>
                    L'un des principaux avantages du DOM est la possibilité de manipuler les documents web 
                    de manière dynamique avec JavaScript. Chaque éléments, attribut ou text peut être modifier, supprimer ou créer à
                    travers le DOM
                </p>
            </div>
        </>
    )
}