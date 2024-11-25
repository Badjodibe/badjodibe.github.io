export default function Outils(){
    return(
        <>
            <div>
                <h2>Installation des outils</h2>
                <p>
                    Plusieurs outils sont disponible pour programmer en Java, dans cette formation, je vais utiliser
                    inteliJ, mais vous pouvez choisir votre IDE préféré. Un IDE (Integreted Developpement Environnement)
                    est un outils qui facilite l'écriture de programme informatique. 
                </p>
                <h2>JDK</h2>
                <p>
                    Le JDK (Java Development Kit) est un ensemble d'outils et de logiciels nécessaires pour 
                    développer et exécuter des applications Java. Il s'agit de l'environnement complet pour
                    les développeurs qui souhaitent écrire, compiler, et exécuter des programmes Java. Les JDK à
                    ces différent composant :

                    <ul>
                        <li>
                            <span>JRE (Java Runtime Environment) :</span> C'est l'environnement d'exécution 
                            Java qui permet d'exécuter les programmes Java. Le JRE comprend la JVM
                            (Java Virtual Machine), des bibliothèques de classes et des fichiers 
                            d'assistance nécessaires à l'exécution des applications Java.
                        </li>
                        <li>
                           <span>Javac (Java Compiler) :</span> Le compilateur Java est un outil qui prend 
                           le code source écrit en Java et le compile en bytecode (un code intermédiaire) 
                           que la JVM peut interpréter et exécuter.
                        </li>
                        <li>
                            <span>JVM (Java Virtual Machine) :</span>  C'est la machine virtuelle qui exécute le
                            bytecode Java, indépendamment de la plateforme sur laquelle elle s'exécute. 
                            Cela permet aux applications Java d'être exécutées sur n'importe quel système 
                            d'exploitation, tant que la JVM est présente.
                        </li>
                        <li>
                            <span>Outils de développement : </span> Le JDK comprend des outils supplémentaires
                            comme des débogueurs, des profils d'analyse de performances, des générateurs 
                            de documentation (comme javadoc), et d'autres utilitaires qui facilitent le 
                            développement et la gestion des applications Java.
                        </li>
                    </ul> 
                    
                    
                </p>
                <h3>Télecharger et installer JDK</h3>
                <div>
                    <ol>
                        <li>
                            <h4>Téléchargement du JDK</h4>
                            <div>
                                <ol>
                                    <li>
                                        Rendez-vous sur le site officiel d'Oracle pour télécharger le JDK :
                                        <a href="https://www.oracle.com/java/technologies/javase-jdk-downloads.html" target="_blank">clique ici</a>
                                    </li>
                                    <li>
                                        Sélectionnez la version du JDK que vous souhaitez installer
                                        (la version la plus récente est recommandée, mais vous pouvez 
                                        choisir une version plus ancienne si nécessaire) puis choisissez également 
                                        la version pour votre système d'exploitation <span>Windows, macOS, Linux</span>
                                    </li>
                                    <li>
                                        Téléchargez le fichier d'installation correspondant à votre 
                                        plateforme (par exemple, <span> .exe</span>` pour Windows,
                                        <span> .dmg</span>` pour macOS, ou un package <span>.tar.gz</span> 
                                        pour Linux).
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <h4>Installation</h4>
                            <div>
                                <ul>
                                    <li>
                                        <h4>Sur Windows :</h4>
                                        <div>
                                            <ol>
                                                <li>
                                                     <span>Exécuter le fichier d'installation : </span> Double-cliquez sur le fichier `.exe` téléchargé pour lancer l'installateur.
                                                </li>
                                                <li>
                                                   <span>Suivre les instructions : </span> L'assistant d'installation vous guidera. Il est recommandé de laisser les paramètres par défaut pour l'emplacement d'installation.
                                                </li>
                                      
                                            </ol>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>Sur macOS :</h4>
                                        <div>
                                            <ol>
                                                <li>
                                                    <span>Exécuter le fichier .dmg</span>  Double-cliquez sur
                                                    le fichier <span>.dmg</span> téléchargé pour monter le disque virtuel.
                                                </li>
                                                <li>
                                                    <span>Installer le JDK :</span>  Ouvrez l'installateur et suivez les instructions.
                                                </li>
                                                <li>
                                                    <span>Vérifier l'installation :</span> Ouvrez un terminal et tapez <span>java -version</span>  pour vérifier que le JDK est correctement installé.
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </div>
                <h2>Téléchargement et installation de inteliJ</h2>
                <p>
                    <ol>
                        <li>
                            Allez sur le site officiel de JetBrains pour télécharger IntelliJ IDEA 
                            <a href="https://www.jetbrains.com/idea/download/" target="_blank">cliquer ici</a>
                        </li>
                        <li>
                            Choisissez une version gratuite et open-source qui convient à la plupart des projets Java standards puis télécharger
                            un installeur correspondant á votre système d'exploitation.
                        </li>
                        <li>
                            Double cliquer sur l'installeur pour installer l'IDE.
                        </li>
                    </ol>
                </p>
            </div>
        </>
    )
}