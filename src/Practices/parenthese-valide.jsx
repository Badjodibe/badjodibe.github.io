export default function ParentheseValid(){
    return(
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Problème du parenthésage valide avec une pile
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                        Étant donné une chaîne de caractères contenant uniquement les symboles 
                        '(', ')', '{', '}', '[' et ']', écrivez un algorithme qui vérifie si 
                        la chaîne contient des parenthèses correctement équilibrées.
                        Une chaîne est considérée comme valide si chaque parenthèse ouverte a 
                        une parenthèse correspondante qui est fermée dans le bon ordre.
                 </p>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span> chaîne = &#123;&#91;&#40;&#41;&#93;&#125;
                     </span></p>
                     <p><strong>Output:</strong> <span>vrai</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span> chaine= &#123;&#91;&#40;&#93;&#41;&#125;
                     </span></p>
                     <p><strong>Output</strong> <span>Faux</span></p>
                 </p>
             </div>
     );
}