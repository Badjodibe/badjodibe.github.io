export default function PremierChaineNonRepeter(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Recherche de la première sous-chaîne non répétée</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Trouvez le premier caractère non répété dans une chaîne. Si tous les caractères sont répétés,
                    retournez une indication que la chaîne ne contient aucun caractère unique.
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                        Parcourez la chaîne pour comptabiliser la fréquence de chaque caractère.
                    </li>
                    <li>
                    Retournez le premier caractère dont la fréquence est égale à 1.                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>swiss</span></p>
                    <p><strong>Output:</strong> <span>w</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>aabbcc</span></p>
                    <p><strong>Output</strong> <span>None</span></p>
                    
                </p>
            </div>
       </>
    );
}