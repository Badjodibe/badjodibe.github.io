const KPPTheorie = () => {

    return(
        <>
            <div className="postMeta">
                <div className="postDate">Publier le 15 Décembre 2024 </div>
                <h1>L'algorithme des k plus proche voisin</h1>
                <div className="postImage">
                    <img src="../../../default.jpg" alt="" />
                </div>  
            </div>
            <div className="postContent">
                <div>
                    <h3>Introduction</h3>
                    <div>
                        L'algorithme des <span>k plus proche voisin ou k nearest neighbor</span>   est l'un des algorithmes d'apprentissages
                        les plus simple á comprendre et á implémenter. C'est l'un des plus vieux algorithme d'apprentissage.
                        C'est un algorithme qui est utilisé pour la tâche de classification ainsi que les tâches de 
                        regression. Dans cet article je vais t'expliquer comment l'algorithme des K plus proche voisin 
                        fonctionne d'une manière simple que tu pourra toi même implémenter.
                    </div>
                    <h4>Algorithme</h4>
                    <div>
                        C'est un algorithme d'apprentissage superviser c'est á dire qu'il lui faut un cible les plus simple
                        á réaliser. Il est á la fois utiliser pour les tâches de classifications(pédiction d'une valeur discrète) et les tâches de regressions
                        (prédiction d'une valeur continue).
                        Une des raisons de sa simplicité est qu'il ne nécessite pas de paramètre ce qui rends la 
                        comprenhension et l'optimisation un moins complexe. Nombreux sont les algorithmes d'apprentissage 
                        qui nécessite des paramètres, ce n'est pas le cas de KPP. Tous ceux dont il á besoin est une base 
                        de données de référence sur lequel s'appuiyé pour faire de la prèdcition. Néanmoins, il as aussi des 
                        inconvenient, quand les données deviennent volumineux il prends du temps pour s'exécuter. 
                    </div>
                    <h4>Principe</h4>
                    <div>
                        Il se base sur le principe de la similarité. Étant donnée un variable d'entré x_i, dont on chercher
                        á prédire un cible y_i en se basant sur une référence X appartement R[n,m] et Y appartement á R[n].
                        Notez que chaque élément x de X á une association y dans Y qui est sa correspondance, on l'appelle la
                        variable cible en apprentissage, c'est ce que vous aimerait prédire. Par exemple vous voudriez 
                        prédire le prix  d'un téléphone portable (qui est le cible) en se basant sur la marque, l'année
                        de fabricate, sa memoire  (ce sont les caractéristiques x). L'algorithme fait la prédiction en renvoyant
                        les k(qui est un nombre prédéfinie)  y dans Y associé au k x dans X dont il est similaire. Pour faire de la prédiction, 
                        dans le cas de la classification la valeur prédit est celle qui á le plus d'occurrence dans les
                        k y retourner mais dans le cas de la regression, la valeur prédit est très généralement la moyenne
                        de ces k y retournés.
                    </div>
                    <h4>Algorithme</h4>
                    <p>
                        Soit <span>x</span> la valeur dont on cherche la prédiction <span>X</span> la base de référence <span>k</span>
                        le nombre prédéfinie de voisin proche et <span>x_i</span>  appartenant à <span>X</span> 
                    </p>
                    <div>
                        <ol>
                            <li>Initialiser le k</li>
                            <li>Pour tout x_i dans la base de référence X calculer la distance entre x et x_i</li>
                            <li>Retourner les k x_ qui sont proche de x</li>
                            <li>Trouver leur correspondance dans Y</li>
                            <li>retourner la moyenne de ces valeur</li>
                        </ol>
                    </div>
                    <div>

                    </div>
                    <h4>type de tâche</h4>
                    <div>
                        L'algorithme des K plus proche voisin est utilisé pour les tâches de classification et de regression.
                        C'est un algorithme superviser. On peux l'utiliser pour ces genre de tâches. Par exemple détecter un
                        objet, prédire le prix d'un produits, classer les email etc.
                    </div>
                    <h3>Conclusion</h3>
                    <p>
                        L'algorithme des k plus proche voisin est un algorithme superviser simple á implémenter qui est 
                        utiliser à la fois pour les tâches de classifications et de prédictions. Il ne néssite pas de 
                        paramètre, on dit que c'est un algorithme non-paramètrique. Vous pouvez l'utiliser pour les tâches
                        comme les classification d'email, les détections d'objet etc.
                    </p>
                </div>
            </div>
        </>
    )
}
export default KPPTheorie;