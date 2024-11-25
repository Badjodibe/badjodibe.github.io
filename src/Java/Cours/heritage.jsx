export default function Heritage(){
    return(
        <>
            <div>
                <h2>Héritage</h2>
                <div>
                    L'héritage est l'un des concepts fondamentaux de la programmation orientée objet (POO).
                    Il permet à une classe (appelée sous-classe ou classe dérivée) de hériter des propriétés 
                    et des comportements d'une autre classe (appelée superclasse ou classe de base). <br />

                    Imaginons que vous développez un logiciel pour gérer un zoo. Tous les animaux du zoo 
                    partagent certaines caractéristiques comme un nom et un âge, et tous peuvent manger. 
                    Cependant, chaque type d'animal a des comportements spécifiques. Par exemple, les lions 
                    peuvent rugir, tandis que les oiseaux peuvent chanter. En utilisant le concept d'héritage 
                    on peux créer une classe nommée animal qui régroupe les attributes et les comportement identique
                    á tous les animaux. Chaque animal va ensuite étentendre cette classe en implementant les comportement
                    qui sont spécifique á lui.   
                </div>
                <h3>Quelques points</h3>
                <div>
                    <ul>
                        <li>
                            <span>Classe de base (Superclasse) :</span>La classe dont une autre classe hérite est appelée classe de base ou superclasse.
                            Elle définit les propriétés et les comportements de base que les classes dérivées
                            peuvent utiliser.
                        </li>
                        <li>
                            <span>Classe dérivée (Sous-classe) :</span>La classe qui hérite d'une autre classe est appelée classe dérivée ou sous-classe.
                            Elle hérite des propriétés et des comportements de la classe de base et peut
                            également ajouter de nouvelles fonctionnalités ou modifier le comportement 
                            existant.
                        </li>
                    </ul>
                </div>
                <h3>Qu'est ce qui se passe lors de l'héritage?</h3>
                <div>
                    Lors de l'héritage, la classe héritante hérite des hérite des attributs (variables) 
                    et méthodes (fonctions) définies dans la classe parent. Ces données sont transmis á la classe fille
                    ce qui permet de réutiliser le code, et de ne pas dupliquer l'écriture du code. 
                    Au lieu de redéfinir des comportements communs dans plusieurs classes, tu les définis une seule
                    fois dans la classe parent, puis les classes enfants peuvent les réutiliser. <br />

                    La classe enfant peut redéfinir (surcharger) certaines méthodes de la classe parent pour 
                    apporter des modifications ou un comportement spécifique. Même si la classe enfant redéfinit 
                    certaines méthodes, elle peut toujours accéder à la version parent via l'utilisation de super(), 
                    ce qui permet d'étendre ou de compléter le comportement de la classe parent au lieu de le remplacer
                    complètement.

                </div>
                <h3>Héritage en Java</h3>
                <div>
                    En Java, seule l'héritage simple est pris en charge, ce qui signifie qu'une classe ne
                    peut hériter que d'une seule classe de base. Contrairement á d'autre langages de programmation
                    comme python ou le C++, java ne permet pas l'héritage multiple. Une seule classe ne peux hérité de
                    plusieurs classe á la fois. Cela produira une erreurs. L'exemple ci-dessous n'est pas valable en Java
                    Prenons cette exemple simple, supposons que vous developpiez un robot animalier, cette robot animalier doit
                    avoir á la fois les caractéristique d'un animal et d'un robot. Comme attribut du robot, la batterie, le matière 
                    type de batterie, de la même manière comme les caractéristiques du l'animal vous aurez par exemple comme il 
                    se déplace ou mange. Vous ne pouvez pas utilisé l'héritage multiple en java pour résoudre se problème, en créant 
                    la classe robot animal qui hérite á la fois du robot et d'un animal. Il y a d'autre moyen de 
                    résoudre ce problème en Java en utilisant par exemple les classe Abstraite.
                </div>
                <h3>Héritage concrètement</h3>
                <div>

                </div>
                <h3>Application</h3>
                <div>

                </div>
                <h3>Résumé</h3>
                <div>

                </div>
            </div>
        </>
    )
}