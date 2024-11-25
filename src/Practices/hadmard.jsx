export default function Hadmard(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                 Produit de Hadamard (Intermédiaire)
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Implémentez l'opération Hadamard, c'est-à-dire la multiplication élément par élément 
                    de deux matrices de même taille.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        Multipliez chaque élément correspondant des deux matrices.
                     </li>
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span> A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]   </span></p>
                     <p><strong>Output:</strong> <span>[[5, 12], [21, 32]]</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span>A = [[2, 3], [4, 5]], B = [[1, 0], [0, 1]]   </span></p>
                     <p><strong>Output</strong> <span>[[2, 0], [0, 5]]</span></p>
        
                 </p>
             </div>
        </>
     );
}