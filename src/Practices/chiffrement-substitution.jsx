export default function Substitution(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Chiffrement par substitution aléatoire
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Dans le chiffrement par substitution aléatoire, chaque lettre de l'alphabet est 
                    remplacée par une lettre différente, déterminée par un tableau de substitution.
                    Écrivez un programme qui prend un texte clair et le chiffre en utilisant une 
                    substitution aléatoire prédéfinie.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        <strong>Tableau de substitution</strong>  est un tableau qui définit quelle lettre remplace une autre.
                     </li>
                     
                    
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span>HELLO,</span> </p>
                     <p><strong>Output:</strong> <span>XPSME</span></p>
                     
                 </p>
                 <div className="ProblemDetailDefault">Exemple 2</div>
                 <p className="ProblemDetailDescription">
                     <p> <strong>Input</strong> <span>HELLO, décalage = 3</span></p>
                     <p><strong>Output</strong> <span> KHOOR</span></p>
                     
                 </p>
             </div>
        </>
     );
}