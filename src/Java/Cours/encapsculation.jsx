export default function Encapsculation(){
    return(
        <>
            <div>
                <h2>Encapsculation</h2>
                <div>
                    L'encapsulation est l'un des principes fondamentaux de la programmation orientée 
                    objet (POO) et fait partie des concepts clés qui contribuent à la création de code 
                    robuste et modulaire. L'encapsulation consiste à regrouper les données (attributs)
                    et les méthodes qui les manipulent au sein d'une même entité, appelée classe.
                    Les données sont cachées et ne sont pas accessibles directement depuis l'extérieur
                    de la classe. Au lieu de cela, l'accès et la manipulation des données se font via 
                    des méthodes spéciales appelées <span>getters </span> et <span>setters</span>. <br />

                    Les données d'une classe sont déclarées comme privées, ce qui signifie qu'elles ne 
                    peuvent être accédées ou modifiées directement depuis l'extérieur de la classe. 
                    Cela protège les données contre les modifications non autorisées et garantit leur 
                    intégrité. <br />

                    En regroupant les données et les méthodes qui les manipulent au sein d'une même classe,
                    l'encapsulation favorise la modularité du code. Cela permet de diviser le code en petites
                    unités autonomes, ce qui facilite la maintenance, la réutilisation et l'extension du code.

                </div>
                <h3>Les getters et les setters</h3>
                <div>
                    Les getters et les setters sont des méthodes utilisées pour accéder et modifier les
                    valeurs des attributs (ou des propriétés) d'une classe en Java. Ils sont utilisés pour 
                    implémenter le principe d'encapsulation, qui consiste à protéger les attributs d'une 
                    classe en les rendant privés et en fournissant des méthodes publiques pour y accéder 
                    et les modifier de manière contrôlée.
                    <ol>
                        <li>
                            <span>Getters (Accesseurs)</span> sont des méthodes qui permettent de lire la 
                            valeur d'un attribut  d'une classe. Leur nom commence généralement par 
                            get suivi du nom de l'attribut, avec la première lettre en majuscule.
                        </li>
                        <li>
                            <span> Setters (Mutateurs) </span> Les setters sont des méthodes qui permettent
                            de modifier la valeur d'un attribut. Leur nom commence généralement par 
                            set suivi du nom de l'attribut, avec la première lettre en majuscule. 
                            Ils peuvent inclure une validation pour contrôler la nouvelle valeur avant de 
                            l'attribuer à l'attribut.
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}