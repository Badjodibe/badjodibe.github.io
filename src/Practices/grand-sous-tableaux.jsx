export default function PlusGrandSousTableau(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Plus grand sous-tableau avec une somme égale à zéro
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Étant donné un tableau d'entiers (positifs, négatifs et zéro), trouvez le plus grand 
                    sous-tableau dont la somme des éléments est égale à zéro.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                    <li>
                        Un <span>sous-tableau</span> est une portion continue d'un tableau.
                    </li>
                    <li>
                        L'algorithme doit parcourir le tableau et trouver un sous-ensemble d'éléments consécutifs dont la somme est égale à 0. 
                    </li>
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span> tableau = [1, 2, -3, 3, -1, 4] </span></p>
                     <p><strong>Output:</strong> <span>[1, 2, -3]</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span> tableau = [4, -4, 6, -6, 10] </span></p>
                     <p><strong>Output</strong> <span>[4, -4, 6, -6]</span></p>
                 </p>
             </div>
        </>
     );
}