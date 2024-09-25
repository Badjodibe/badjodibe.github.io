import VideoPlayer from "../Components/Youtube";


export default function Anagramme(){
    return(
       <>
        <div className="containerSolutionProblem">
             <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Vérification d'anagrammes</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Deux chaînes sont dites anagrammes si elles contiennent les mêmes lettres, 
                    mais dans un ordre différent. Écrivez un programme qui vérifie si deux chaînes sont des 
                    anagrammes l’une de l’autre.
                </p>
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>listen et silent</span></p>
                    <p><strong>Output:</strong> <span>True</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>hello et world</span></p>
                    <p><strong>Output</strong> <span>False</span></p>
                    
                </p>
            </div>
            <div className="w-1/3  flex place-content-center bg-gray-200">
                <VideoPlayer  src="https://www.youtube.com/embed/joNr59r7LE4/start=0&end=60" width="900" height="400"/>
            </div>
        </div>
            
       </>
    );
}