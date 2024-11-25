export default function MatriceSommes(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Problème de la somme de deux matrices (Facile)
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Écrivez un programme qui additionne deux matrices de même taille.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        Additionnez élément par élément les deux matrices de même dimension.
                     </li>
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span>A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]  </span></p>
                     <p><strong>Output:</strong> <span>[[6, 8], [10, 12]]</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span> A = [[1, 1], [1, 1]], B = [[2, 2], [2, 2]]  </span></p>
                     <p><strong>Output</strong> <span>[[3, 3], [3, 3]]</span></p>
                     
                 </p>
             </div>
        </>
     );
}