export default function TrieBulle(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Problème de tri à bulles</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Implémentez l'algorithme de <strong> tri à bulles</strong>pour trier un tableau d'entiers.
                    Le tri à bulles compare chaque paire d'éléments adjacents et les échange si nécessaire pour
                    les mettre dans l'ordre correct. Répétez cette opération jusqu'à ce que le tableau soit trié.
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Le <strong>tri à bulles</strong> est un algorithme simple mais peu efficace pour trier des éléments. Il passe plusieurs fois sur le tableau, comparant les éléments adjacents et les échangeant s'ils sont dans le mauvais ordre.
                        - Cet algorithme est appelé <strong>tri à bulles</strong> parce que les valeurs les plus grandes <strong>remontent</strong>  à la surface comme des bulles dans l'eau.
                    </li>
                    
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>[5, 3, 8, 4, 2]</span></p>
                    <p><strong>Output:</strong> <span>[2, 3, 4, 5, 8]</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>[10, 7, 2, 1]</span></p>
                    <p><strong>Output</strong> <span>[1, 2, 7, 10]</span></p>
                    
                </p>
            </div>
       </>
    );
}