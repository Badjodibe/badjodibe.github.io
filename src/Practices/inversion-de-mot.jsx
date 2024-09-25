export default function InversionDeMot(){
    return(
       <>
            <div className="ProblemDetailContainer">
                <h2 className="ProblemDetailTitle">Inversion de chaque mot dans une phrase</h2>
                <div className="ProblemDetailDefault">Énoncé :</div>
                <p className="ProblemDetailDescription" >
                    Écrivez un programme qui inverse les lettres de chaque mot d’une phrase, mais conserve l’ordre des mots.   
                </p>
            
                <div className="ProblemDetailDefault">Exemple 1</div>
                <p className="ProblemDetailDescription">
                    <p><strong>Input:</strong> <span>hello world</span></p>
                    <p><strong>Output:</strong> <span>olleh dlrow</span></p>
                    
                </p>
                <div className="ProblemDetailDefault">Exemple 2</div>
                <p className="ProblemDetailDescription">
                    <p> <strong>Input</strong> <span>OpenAI rocks</span></p>
                    <p><strong>Output</strong> <span>IAnepO skco</span></p>
                    
                </p>
            </div>
       </>
    );
}