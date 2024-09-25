export default function SuppressionDeDoublons(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Suppression des doublons de caractères</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Écrivez un programme qui supprime les caractères dupliqués d’une chaîne, ne laissant qu'une seule occurrence de chaque caractère dans l'ordre original.
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Un <strong>tableau</strong> est une structure de données qui stocke des éléments
                        dans un ordre précis et permet un accès rapide aux éléments via leur index.
                    </li>
                    <li>
                        Le but de ce problème est de trouver deux nombres dans ce tableau dont la somme donne un certain <strong>nombre cible</strong>. 
                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>aabbcc</span></p>
                    <p><strong>Output:</strong> <span>abc</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>banana</span></p>
                    <p><strong>Output</strong> <span>ban</span></p>
                    
                </p>
            </div>
       </>
    );
}