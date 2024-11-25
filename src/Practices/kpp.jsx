export default function KPP(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                   Pouvez-vous programmer l'algorithme des K-Plus Proche voisin?
                 </h2>
                 <div className="ProblemDetailDefault">Description de l'algorithme des K plus proche voision</div>
                 <p className="ProblemDetailDescription" >
                    L'algorithme des  <span>K plus proches voisins (K-Nearest Neighbors, KNN)</span> 
                    est un algorithme d'apprentissage supervisé utilisé pour résoudre des problèmes 
                    de classification et de régression. Il est simple mais efficace pour classer des 
                    données en fonction de leur proximité à des points déjà étiquetés.
                 </p>
                 <div className="ProblemDetailDefault">Principe de KNN</div>
                 <div>
                        L'idée principale de KNN est de <span>classer un point de données non étiqueté</span> 
                        en fonction des classes des <span>K points de données les plus proches</span>  dans l'ensemble d'apprentissage.
                        Pour la régression, il prédit la valeur cible en prenant la moyenne des valeurs des K voisins les 
                        plus proches.
                 </div>
                 <div className="ProblemDetailDefault" >Algorithme</div>
                 <ul>
                     <li>
                        <h2>Choisir la valeur de K</h2>
                        La première étape consiste à choisir le 
                        nombre de voisins, noté <span>K</span>  Il représente le nombre de points voisins autour
                        d'un point de données que l'on considère pour déterminer son étiquette 
                        (pour la classification) ou sa valeur (pour la régression).
                     </li>
                     <li>
                        <h2>Calculer la distance entre les points</h2> 
                        <p>
                           Ensuite, pour chaque point
                           de données que vous souhaitez classer ou prédire, l'algorithme KNN calcule la 
                           distance entre ce point et <span>tous les autres points</span>  de l'ensemble 
                           d'apprentissage. Les distances couramment utilisées incluent Distance Euclidienne, 
                           Distance de Manhattan, Distance de Minkowski
                        </p>
                        
                     </li>
                     <li>
                        <h2>Trouver les K voisins les plus proches</h2>  Une fois la distance calculée
                        pour chaque point de l'ensemble d'apprentissage, l'algorithme
                        <span>trie ces distances</span>  et sélectionne les <span>K points les plus proches</span>. 
                        Ces voisins sont les points de données les plus similaires (proches) au point que vous
                         souhaitez classer ou prédire.
                     </li>
                     <li>
                        <h2 >Prédire l'étiquette ou la valeur</h2> 
                        <span>Pour les problèmes de classification</span>  , l'algorithme KNN prend un vote 
                        majoritaire parmi les <span>K voisins les plus proches</span>. Le point est affecté à la 
                        classe la plus fréquente parmi ces voisins.
                        <span>Pour une prédiction numérique (régression)</span> ,l'algorithme prend la 
                        <span>moyenne</span>  ou la <span>médiane</span>  des valeurs des K voisins les 
                        plus proches.
                     </li>
                 </ul>  
                 <div>
                     L'algorithme des KPP est l'un des algorithmes de machine learning les plus simple á réaliser
                     votre travail consiste á programmer l'algorithme des KPP voisins.
                  </div> 
             </div>
        </>
     );
}