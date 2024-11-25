export default function Function(){
    return(
        <>
            <div>
                <h1>Les Fonctions</h1>
                <div>
                    Les fonctions sont de concept qui sont utilisé dans plusieurs domaine. Il sont plus connue en 
                    mathématique. Une fonction est un ensemble d'opération qui est effectué sur des données puis
                    ensuite produit des resultats ou non. Prenons un exemple d'un fonction qui permet de calculer les
                    bénéfique mensuel d'une entreprise. En entrée, cette fonction reçoit 
                    En programmation, une fonction est un bloc de code qui effectue une tâche spécifique 
                    et peut être appelé (ou invoqué) à partir d'autres parties du programme pour exécuter 
                    cette tâche. Les fonctions permettent de regrouper du code en unités logiques et 
                    réutilisables, ce qui facilite la gestion et la maintenance du code. <br />

                    Les fonctions peuvent accepter des paramètres en entrée, qui sont des valeurs fournies 
                    lors de l'appel de la fonction, et elles peuvent également renvoyer une valeur en sortie,
                    qui est le résultat de l'exécution de la fonction. <br />

                </div>

                <h3>Signature de la fonction :</h3>
                <div>
                    La signature d'une fonction comprend son nom, ses paramètres et son type de retour.
                    Deux fonctions peuvent avoir le même nom tant que leur signature est différente,
                    ce qui permet de surcharger les fonctions (avoir plusieurs fonctions avec le même 
                    nom mais des paramètres différents). Également appelée prototype de fonction, comprend 
                    plusieurs éléments qui définissent sa structure et son comportement.
                    Voici les principaux éléments de la signature d'une fonction en Java :
                    <ol>
                        <li>
                            <span>Nom de la fonction :</span> Il s'agit du nom utilisé pour appeler la
                            fonction lors de son utilisation dans le code.
                        </li>
                        <li>
                            <span>Paramètres de la fonction :</span> Ce sont les valeurs que la fonction
                            accepte en entrée pour effectuer son travail. Chaque paramètre est composé 
                            d'un type et d'un nom. Les paramètres sont placés entre les parenthèses 
                            après le nom de la fonction.
                        </li>
                        <li>
                            <span>Type de retour :</span> C'est le type de données que la fonction renvoie
                            après son exécution. Si une fonction ne renvoie aucune valeur, son 
                            type de retour est déclaré comme <span>void</span>.
                        </li>
                    </ol>
                </div>
                <h3>Les paramétres d'une fonction</h3>
                <div>
                    Les paramètres de fonction sont des variables déclarées dans la déclaration d'une fonction 
                    pour recevoir des valeurs lorsqu'elle est appelée. Ces valeurs, appelées arguments,
                    sont passées à la fonction lors de son appel et sont utilisées à l'intérieur de la
                    fonction pour effectuer des opérations. <br />
                    Ils sont sont déclarés entre parenthèses après le nom de la fonction. Chaque paramètre est composé d'un type suivi de son nom.
                    Ces types peuvent être de n'importe quel type de données valide en Java, y compris les types primitifs <span>int, double, boolean</span>  et les types de référence <span>objets, tableaux</span>.
                </div>
                <h3>Surcharge de fonction</h3>
                <p>
                    Imagignez que vous avez créer un fonction qui calcule la moyenne d'un tableau d'entier puis
                    retourne le resultat. Dans une dans le même programme, vous avez besoin d'une fonction qui
                    calcule et retourne la moyenne de d'un tableau, mais cette fois des double. Vous pouvez notez que 
                    les opérations de la méthode moyenne est identique, pour les entiers de même que pour les double. Aller 
                    vous créer une methode moyenne pour retourner cette fois çi les doubles? Java permet d'utiliser 
                    une même méthode pour des données différent, c'est la <span>surcherge de méthode</span> <br />

                    La surcharge de fonction (ou surcharge de méthode) en Java se produit lorsque plusieurs
                    méthodes dans une même classe partagent le même nom, mais ont des signatures différentes.
                    Cela permet d'utiliser le même nom de méthode pour différentes opérations, selon le type,
                    le nombre ou l'ordre des paramètres fournis.
                </p>
                <h4>Caractéristiques de la surcharge de fonction :</h4>
                <div>
                    <ol>
                        <li>
                            <span>Nom identique : </span> Toutes les méthodes surchargées ont le même nom.
                        </li>
                        <li>
                            <span>Signature différente :</span> Les méthodes doivent se différencier par :
                            <ul>
                                <li>Le nombre de paramètres.</li>
                                <li>Le type de paramètres.</li>
                                <li>L'ordre des paramètres.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <h4>Création de fonction</h4>
                <div>
                    
                </div>
                <h4>Appel de fonction</h4>
                <div>

                </div>
                <h4>Résumé</h4>
            </div>
        </>
    );
}