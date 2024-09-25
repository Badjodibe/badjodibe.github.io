export default function RotationDeChaineDeCharactere(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Rotation de chaîne</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                Écrivez un programme qui vérifie si une chaîne est une rotation d'une autre.
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Une chaîne B est une rotation de A si, lorsque vous concaténez A avec elle-même,
                        B apparaît comme sous-chaîne.
                    </li>
                    <li>
                        Le but de ce problème est de trouver deux nombres dans ce tableau dont la somme donne un certain <strong>nombre cible</strong>. 
                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>abcde et cdeab</span></p>
                    <p><strong>Output:</strong> <span>vrai</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>abc et acb</span></p>
                    <p><strong>Output</strong> <span>faux</span></p>
                    
                </p>
            </div>
       </>
    );
}