export default function TrieParSelection(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Problème de tri par sélection</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Implémentez l'algorithme de <strong>tri par sélection </strong>
                    pour trier un tableau. Cet algorithme divise le tableau en deux parties :
                    la partie triée et la partie non triée. À chaque itération, il sélectionne l'élément minimum 
                    de la partie non triée et le place à la fin de la partie triée.
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Le <strong>tri par sélection</strong> fonctionne en parcourant la partie non triée du 
                        tableau pour trouver l'élément minimum, puis en l'échangeant avec le premier élément non trié.
                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>[7, 4, 5, 2]</span></p>
                    <p><strong>Output:</strong> <span>[2, 4, 5, 7]</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>[3, 6, 1, 8]</span></p>
                    <p><strong>Output</strong> <span>[1, 3, 6, 8]</span></p>   
                </p>
            </div>
       </>
    );
}