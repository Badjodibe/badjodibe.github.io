export default function Transposition(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">Transposition de matrice (Facile)</h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Implémentez un algorithme pour transposer une matrice donnée. 
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        La transposition d'une matrice consiste à échanger les lignes et les colonnes.
                     </li>
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span>matrice = [[1, 2, 3], [4, 5, 6]]  </span></p>
                     <p><strong>Output:</strong> <span>[[1, 4], [2, 5], [3, 6]]</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span>matrice = [[1, 2], [3, 4], [5, 6]]  </span></p>
                     <p><strong>Output</strong> <span>[[1, 3, 5], [2, 4, 6]]</span></p>
                     
                 </p>
             </div>
        </>
     );
}