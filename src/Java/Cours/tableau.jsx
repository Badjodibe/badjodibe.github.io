export default function Tableau(){
    return(
        <>
            <div>
                <h2>Les Tableaux</h2>
                <div>
                    Un tableau est une structure de données qui permet de stocker plusieurs valeurs du même 
                    type sous un seul nom. Les éléments d'un tableau peuvent être accédés et manipulés 
                    individuellement en utilisant un index.
                </div>
                <h3>Tableaux á une dimension</h3>
                <h4>Déclaration</h4>
                <div>
                    Un tableau est déclaré en spécifiant le type des éléments du tableau suivi du nom du
                    tableau et de la taille du tableau entre crochets (`[]`).
                </div>
                <h3>Création de tableau</h3>
                <div>
                    Après avoir déclaré un tableau, vous devez le créer en utilisant l'opérateur  <span>new</span>
                    suivi du type des éléments du tableau et de la taille du tableau entre crochets (`[]`).
                </div>
                <h3>Initialisation d'un tableau :</h3>
                <div>
                    Vous pouvez initialiser un tableau lors de sa déclaration ou après sa création en 
                    spécifiant les valeurs des éléments entre crochets (`[]`). 
                </div>
                <h3>Accès aux éléments d'un tableau :</h3>
                <div>
                    Les éléments d'un tableau sont accessibles en utilisant leur index (position) dans le tableau. 
                    L'index commence à 0 pour le premier élément et se termine à `taille - 1` pour le dernier élément.
                </div>
                <h3>Modification des éléments d'un tableau :</h3>
                <div>
                    Vous pouvez modifier les éléments d'un tableau en utilisant leur index.
                </div>
                <h2>Tableau á plusieurs dimension</h2>
                <div>
                    vous pouvez créer des tableaux à plusieurs dimensions pour stocker des données dans 
                    une structure de tableau en deux dimensions, trois dimensions, ou plus.
                </div>
                <h3>Déclaration d'un tableau à deux dimensions :</h3>
                <div>
                    Pour déclarer un tableau à deux dimensions, vous spécifiez le type des éléments du tableau
                    suivi de deux paires de crochets  <span>[][]</span>.
                </div>
                
            </div>
        </>
    );
}