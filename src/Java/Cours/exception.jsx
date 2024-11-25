export default function Exception(){

    return(
        <>
            <div>
                <h2>Les exceptions</h2>
                <div>
                    En programmation, une erreur (ou une exception) est une condition anormale ou 
                    une situation inattendue qui se produit pendant l'exécution d'un programme et qui
                    peut entraîner une interruption ou un dysfonctionnement du programme. Les erreurs sont 
                    généralement causées par des conditions imprévues ou des circonstances qui ne peuvent 
                    pas être gérées ou résolues par le programme lui-même. <br />
                    Voici quelques exemple d'erreurs qui peuvent se produire
                </div>
                <ol>
                    <li>
                        <h3>Erreur de syntaxe :</h3>
                    </li>
                </ol>
                <h3>Gestion d'exception</h3>
                <div>
                    En Java, les exceptions sont gérées à l'aide de blocs <span>try, catch</span>. 
                    <ol>
                        <li>
                            <h3>try</h3>
                            <div>
                                Ce mot-clé est utilisé pour encapsuler un bloc de code qui peut 
                                potentiellement générer une exception. Si une exception se produit dans 
                                ce bloc, elle peut être capturée par les blocs <span>catch</span> associés.
                            </div>
                            <h3>catch</h3>
                            <div>
                                Utilisé pour capturer et traiter une exception qui a été levée dans le bloc  <span>try</span>.
                                Un ou plusieurs blocs <span>catch</span>  peuvent être associés à un bloc <span>try</span> .
                            </div>
                        </li>
                    </ol>
                </div>
                <h3>Lever une exception</h3>
                <div>
                    Lever une exception, également appelé "jeter une exception" ou "générer une exception",
                    fait référence au processus de signaler une condition anormale ou une situation d'erreur 
                    qui se produit pendant l'exécution d'un programme. Lorsqu'une exception est levée,
                    elle interrompt normalement le flux d'exécution normal du programme et transfère le 
                    contrôle à un gestionnaire d'exceptions qui peut gérer la condition exceptionnelle.
                </div>
                <h3>Signer une exception</h3>
                <div>
                    Lorsque vous signez une exception, vous la déclarez dans la signature d'une méthode ou
                    d'une déclaration de méthode en utilisant le mot-clé `throws`. Cela signifie que vous
                    indiquez explicitement dans la signature de la méthode que cette méthode peut 
                    potentiellement lever une exception de ce type, mais vous ne la traitez pas à 
                    l'intérieur de la méthode elle-même. <br />

                    La signature d'une méthode inclut généralement le nom de la méthode, ses paramètres, 
                    le type de valeur de retour (le cas échéant) et la liste des exceptions pouvant 
                    être levées par cette méthode.
                </div>
                <h3>Personalisation d'exception</h3>
                <div>
                    Pour personnaliser une exception en Java, vous pouvez créer votre propre classe 
                    d'exception en étendant l'une des classes d'exceptions prédéfinies de Java, telles
                    que <span>Exception</span> ou l'une de ses sous-classes comme <span>RuntimeException</span>.
                </div>
                <h1>Résumé</h1>
                <div>

                </div>
            </div>
        </>
    )
}