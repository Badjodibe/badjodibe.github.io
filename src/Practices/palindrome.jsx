export default function Palindrome(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Vérification de palindrome</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Un <strong>palindrome</strong> est un mot ou une phrase qui se lit de la même façon dans les deux sens.
                    Écrivez un programme qui vérifie si une chaîne donnée est un palindrome. 
                    Ignorez les espaces, les majuscules et la ponctuation.
                    
                </p>
                <div className="ProblemDetailDefault">Explication</div>
                <ul className="ProblemDetailDescription" >
                    <li>
                    Le programme doit éliminer les caractères non alphanumériques avant la vérification.
                    </li>
                    <li>
                    Vous devez comparer la chaîne initiale avec sa version inversée pour savoir si c’est un palindrome.
                    </li>
                </ul>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>A man, a plan, a canal: Panama</span></p>
                    <p><strong>Output:</strong> <span>True</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>hello</span></p>
                    <p><strong>Output</strong> <span>False</span></p>
                    
                </p>
            </div>
       </>
    );
}