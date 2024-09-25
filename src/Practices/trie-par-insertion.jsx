export default function TrieParInsertion(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Problème de tri par insertion</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Écrivez un algorithme qui trie un tableau d'entiers à l'aide du <strong>tri par insertion </strong>
                    Cet algorithme prend les éléments un par un et les place à leur position correcte dans la partie déjà triée du tableau.
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Le <strong>tri par insertion</strong> fonctionne en prenant un élément à chaque tour,
                        en le comparant avec les éléments déjà triés, et en le plaçant à sa position correcte.
                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>[4, 3, 2, 1]</span></p>
                    <p><strong>Output:</strong> <span>[1, 2, 3, 4]</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>[9, 5, 1, 7]</span></p>
                    <p><strong>Output</strong> <span>[1, 5, 7, 9]</span></p>
                    
                </p>
            </div>
       </>
    );
}