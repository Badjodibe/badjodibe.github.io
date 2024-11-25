export default function ChiffrementCesar(){
    return(
        <>
             <div className="ProblemDetailContainer">
                 <h2 className="ProblemDetailTitle">
                    Chiffrement par décalage (César)
                 </h2>
                 <div className="ProblemDetailDefault">Énoncé :</div>
                 <p className="ProblemDetailDescription" >
                    Le chiffrement de César est une méthode de chiffrement par substitution où chaque lettre
                    du texte clair est décalée d'un certain nombre de positions dans l'alphabet.
                    Par exemple, un décalage de 1 transforme 'A' en 'B', 'B' en 'C', etc. Écrivez un 
                    programme qui chiffre un message donné en utilisant ce décalage.
                 </p>
                 <div className="ProblemDetailDefault">Explication</div>
                 <ul className="ProblemDetailDescription" >
                     <li>
                        <strong>Texte clair</strong> est le message original que l'on souhaite chiffrer.
                     </li>
                     <li>
                        <strong>Texte chiffré</strong>  est le message après avoir été chiffré.
                     </li>
                     <li>
                        <strong>Décalage</strong>  est le nombre de positions de décalage dans l'alphabet.
                     </li>
                 </ul>
                 <div className="ProblemDetailDefault">Exemple 1</div>
                 <p className="ProblemDetailDescription">
                     <p><strong>Input:</strong> <span>WORLD, décalage = 1</span></p>
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