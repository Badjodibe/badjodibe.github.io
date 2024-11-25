export default function PermutationDeChaine(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Permutation de chaîne
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Écrivez un programme qui génère toutes les permutations possibles d’une chaîne donnée.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        Utilisez un algorithme récursif pour échanger les caractères et générer toutes les permutations.
                     </li>
                     <li>
                        Une permutation est une réorganisation des caractères d'une chaîne.
                     </li>
                     
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span>abc</span></p>
                     <p><strong>Output:</strong> <span>["abc", "acb", "bac", "bca", "cab", "cba"]</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span>ab</span></p>
                     <p><strong>Output</strong> <span> ["ab", "ba"]</span></p>
                     
                 </p>
             </div>
        </>
     );
}