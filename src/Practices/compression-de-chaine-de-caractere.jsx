export default function CompressionDeChaineDeCharactere(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Compression de chaine de caractères</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                        Écrivez un algorithme qui compresse une chaîne en remplaçant les séquences de lettres 
                        identiques consécutives par la lettre suivie du nombre d'occurrences. Si la chaîne compressée est plus longue que l'originale, retournez l'originale.
                </p>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>aaabbcccc</span></p>
                    <p><strong>Output:</strong> <span>a3b2c4</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>abcd</span></p>
                    <p><strong>Output</strong> <span>abcd</span></p>
                    
                </p>
            </div>
       </>
    );
}