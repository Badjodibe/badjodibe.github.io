export default function SommesDesPaires(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Problème de la somme des paires dans un tableau</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Étant donné un tableau d'entiers, écrivez un algorithme qui vérifie s'il existe deux 
                    nombres dans le tableau dont la somme est égale à une valeur cible donnée.
                    Si de tels nombres existent, l'algorithme doit retourner <strong>vrai</strong>, 
                    sinon il doit retourner <strong>faux</strong>. 
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Un <strong>tableau</strong> est une structure de données qui stocke des éléments
                        dans un ordre précis et permet un accès rapide aux éléments via leur index.
                    </li>
                    <li>
                        Le but de ce problème est de trouver deux nombres dans ce tableau dont la somme donne un certain <strong>nombre cible</strong>. 
                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>tableau = [2, 7, 11, 15], cible = 9</span></p>
                    <p><strong>Output:</strong> <span>vrai</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>tableau = [1, 2, 3, 4], cible = 8</span></p>
                    <p><strong>Output</strong> <span>faux</span></p>
                    
                </p>
            </div>
       </>
    );
}