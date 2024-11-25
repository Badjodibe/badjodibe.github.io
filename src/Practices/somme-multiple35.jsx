export default function SommeMultiple35(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">Somme des multiples de 3 et 5</h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Trouver la somme de tous les nombres naturels inférieurs à un certain nombre \( N \) 
                    qui sont des multiples de 3 ou 5. Un multiple est un nombre divisible par un autre sans
                    reste (par exemple, 15 est un multiple de 3 parce que \( 15 \div 3 = 5 \) sans reste). 
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        La transposition d'une matrice consiste à échanger les lignes et les colonnes.
                     </li>
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span> \( N = 10 \)   </span></p>
                     <p><strong>Output:</strong> <span> 23 </span></p>
                     <p><strong>Explication:</strong> <span> Les multiples de 3 ou 5 en dessous de 10 sont 3, 5, 6, et 9. Leur somme est \( 3 + 5 + 6 + 9 = 23 \). </span></p>
                     
                 </p>
             </div>
        </>
     );
}