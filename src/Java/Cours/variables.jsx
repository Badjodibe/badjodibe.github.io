export default function VariableJava(){

    return(
        <>
            <div>

                <div>
                    Une variable est l'unité de stockage d'information.
                    Une variable est un emplacement nommé dans la mémoire d'un ordinateur où les données 
                    peuvent être stockées et manipulées pendant l'exécution d'un programme informatique.
                    En termes plus simples, une variable est comme une boîte dans laquelle vous pouvez placer
                    des valeurs et à laquelle vous pouvez donner un nom pour y faire référence dans votre 
                    programme. <br /> <br />

                    Lorsque vous créez une variable dans un programme, vous lui donnez un nom et un type 
                    de données spécifique. Le nom de la variable est utilisé pour faire référence à 
                    l'emplacement mémoire où les données sont stockées, tandis que le type de données
                    spécifie quel type de données peut être stocké dans cette variable 
                    (par exemple, entier, décimal, caractère, etc.). Dépendant du type d'information ou de données
                    qu'on vous souhaité procèdé, un type spécifique est données. En Java, il y a plusieurs type de données
                </div>

                <h3>Les types primitifs en Java</h3>
                <div>
                    En Java, les types primitifs sont des types de données fondamentaux qui représentent 
                    des valeurs simples et ne sont pas des objets. Voici les huit types primitifs en Java
                </div>
                <div>
                    <ul>
                        <li>
                            <h3>byte</h3>
                            <p>
                            Ce type primitif est utilisé pour stocker des valeurs entières comprises entre -128 et 127 (8 bits).

                            </p>

                            <h3>short</h3>
                            <p>
                                Ce type primitif est utilisé pour stocker des valeurs entières comprises entre -32,768 et 32,767 (16 bits).
                            </p>
                            <h3>int</h3>
                            <p>
                                Ce type primitif est utilisé pour stocker des valeurs entières comprises entre -2^31 et 2^31 - 1 (32 bits).                        
                            </p>

                            <h3>long</h3>
                            <p>
                                Ce type primitif est utilisé pour stocker des valeurs entières plus grandes
                                que celles pouvant être stockées dans un int, comprises entre -2^63 et 
                                2^63 - 1 (64 bits).  
                            </p>

                            <h3>float</h3>
                            <p>
                                Ce type primitif est utilisé pour stocker des valeurs décimales à virgule flottante de précision simple (32 bits).
                            </p>
                            <h3>double</h3>
                            <p>
                                 type primitif est utilisé pour stocker des valeurs décimales à virgule flottante de double précision (64 bits).               
                            </p>
                            <h3>boolean</h3>
                            <p>
                                Ce type primitif est utilisé pour stocker des valeurs de vérité, soit true (vrai) soit false (faux).
                            </p>
                            <h3>char</h3>
                            <p>
                                Ce type primitif est utilisé pour stocker un seul caractère Unicode (16 bits).
                            </p>
                        </li>
                    </ul>
                </div>
                <h3>Déclaration</h3>
                <div>
                    La déclaration est l'opération qui consite á signaler á la machine une variable. La machine quand à
                    elle va se charger de reserver une espace mémoir correspondant aux caractéristique de la variable. 
                    En Java, la déclaration d'une variable consiste à spécifier le type de la variable et son nom.
                </div>
                <div>
                    Déclaration de varible
                </div>
                <div>
                    <ul>
                        <li>
                            <span>le type: </span> représente le type de données de la variable. Il peut s'agir
                            d'un type primitif (comme int, double, boolean, etc.) ou d'un type de référence (comme String, MyClass, etc.).
                        </li>
                        <li>
                            <span>nomDeVariable: </span> représente le nom de la variable que vous souhaitez utiliser pour faire référence à son emplacement mémoire.
                        </li>
                    </ul>
                </div>
                <h3>Affectation en Java</h3>
                <div>
                    L'affectation est le processus de stockage d'une valeur dans une variable.
                    Pour affecter une valeur à une variable, vous utilisez l'opérateur d'assignation, 
                    représenté par le signe égal (=).
                </div>
                <div>
                    Exemple d'affectation
                </div>
                
            </div>
        </>
    );

}