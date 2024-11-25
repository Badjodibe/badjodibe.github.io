export default function Interface(){

    return(
        <>
            <div>
                <h2>Interface</h2>
                <p>
                    Une interface en Java est une collection de méthodes abstraites et de constantes.
                    Elle fournit un moyen de spécifier un ensemble de méthodes que les classes doivent 
                    implémenter. Les interfaces sont similaires aux classes abstraites, mais elles ne 
                    peuvent contenir que des méthodes abstraites (méthodes sans corps) et des constantes. <br />
                 
                    En plus des méthodes abstraite, elles contiennent également des constante
                </p>
                <h3>Quelques points sur les interfaces</h3>
                <div>
                    <ol>
                        <li>
                            <h4>Méthodes abstraites</h4>
                            <p>
                                Toutes les méthodes d'une interface sont implicitement abstraites, ce qui signifie 
                                qu'elles n'ont pas de corps et sont destinées à être redéfinies (ou implémentées)
                                dans les classes qui les implémentent. <br />
                            </p>
                        </li>
                        <li>
                            <h4>Constantes</h4>
                            <p>
                                Les constantes dans une interface sont implicitement <span> public </span> 
                                <span> static </span> et <span>final </span>
                                , ce qui signifie qu'elles sont des valeurs constantes qui ne
                                peuvent pas être modifiées.
                            </p>
                        </li>
                        <li>
                            <h4>Implémentation</h4>
                            <p>
                                Pour implémenter une interface, une classe doit utiliser le mot-clé 
                                <span>implements</span> et fournir une implémentation pour toutes les
                                méthodes abstraites de l'interface. Une classe peut implémenter plusieurs
                                interfaces.
                            </p>
                        </li>
                        <li>
                            <h4>Héritage</h4>
                            <p>
                                Les interfaces peuvent hériter d'autres interfaces à l'aide du mot-clé 
                                <span>extends</span>. Une interface peut étendre une ou plusieurs autres 
                                interfaces.
                            </p>
                        </li>
                    </ol>
                </div>
                <h3>Création d'une interface</h3>
                <div>

                </div>
                <h3>Implémentation d'une interface</h3>
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