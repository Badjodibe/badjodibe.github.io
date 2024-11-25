export default function Polymorphisme(){
    return(
        <>
            <div>
                <h2>Polymorphisme</h2>
                <p>
                    Le polymorphisme est un concept clé de la programmation orientée objet (POO) qui permet
                    à un même nom de méthode ou d'opérateur d'être utilisé pour effectuer différentes 
                    actions en fonction du contexte d'utilisation. En d'autres termes, le polymorphisme 
                    permet à un objet de prendre différentes formes.
                </p>
                <h3>olymorphisme statique (lié à la surcharge de méthodes) :</h3>
                <p>
                    Il s'agit du polymorphisme qui se produit au moment de la compilation. 
                    Il est associé à la surcharge de méthodes, où plusieurs méthodes portent le même nom 
                    mais ont des listes de paramètres différentes. Le compilateur détermine quelle méthode 
                    appeler en fonction des types des arguments fournis lors de l'appel de la méthode.
                </p>
                <h3>Polymorphisme dynamique (lié à l'héritage et à la liaison dynamique) :</h3>
                <p>
                    Il s'agit du polymorphisme qui se produit au moment de l'exécution. Il est associé à 
                    l'héritage et à la substitution de méthodes. Lorsqu'une méthode d'un objet est appelée, 
                    Java détermine quelle méthode exécuter en fonction du type réel de l'objet au moment de
                    l'exécution, plutôt que du type déclaré de la référence utilisée pour accéder à l'objet.
                    Cela permet aux méthodes héritées d'être redéfinies dans les classes dérivées, et chaque
                    classe peut fournir son propre comportement pour ces méthodes.
                </p>
            </div>
        </>
    )
}