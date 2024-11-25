export default function RotationMatrix(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Rotation d'une matrice (Intermédiaire)
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Écrivez un algorithme pour effectuer une rotation de 90 degrés dans le sens des aiguilles
                    d'une montre sur une matrice carrée.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                     Transposez la matrice, puis inversez l'ordre des colonnes pour obtenir une rotation de 90 degrés.
                     </li>
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span> matrice = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] </span></p>
                     <p><strong>Output:</strong> <span>[[7, 4, 1], [8, 5, 2], [9, 6, 3]]</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span> matrice = [[1, 2], [3, 4]] </span></p>
                     <p><strong>Output</strong> <span> [[3, 1], [4, 2]]</span></p>
        
                 </p>
             </div>
        </>
     );
}