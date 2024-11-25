export default function StructureRepetitive(){
    return(
        <>
            <div>
                <h3>Les structures répétitives</h3>

                <div>
                    Les structures répétitives (aussi appelées boucles) permettent d'exécuter plusieurs
                    fois un bloc de code tant qu'une condition spécifique est vraie ou jusqu'à ce
                    qu'une condition soit remplie.
                </div>
                <div>
                    <ol>
                        <li>
                            <h3>Boucle while :</h3> 
                            <p>
                                La boucle <span>while</span> permet d'exécuter un bloc de code tant qu'une condition spécifiée est vraie.
                            </p>
                        </li>
                        <li>
                            <h3>Boucle do-while :</h3> 
                            <p>
                                La boucle <span>do-while</span> est similaire à la boucle <span>while</span>, mais elle garantit que le bloc de code est exécuté au moins une fois, même si la condition est fausse.
                            </p>
                        </li>
                        <li>
                            <h3>Boucle for :</h3> 
                            <p>
                                La boucle <span>for</span> permet d'itérer un nombre spécifié de fois. Elle se compose de trois parties : l'initialisation, la condition et l'incrémentation.
                            </p>
                        </li>
                        <li>
                            <h3>Boucle for-each :</h3> 
                            <p>
                                La boucle <span>for-each</span> , également connue sous le nom de boucle améliorée <span>for</span>, est utilisée pour parcourir les éléments d'un tableau ou d'une collection.
                            </p>
                        </li>
                    </ol>
                </div>
                <div>
                    Les structures répétitives sont utilisées pour automatiser l'exécution de tâches
                    répétitives, comme le traitement des éléments d'un tableau, la lecture de données à 
                    partir d'un flux d'entrée, ou l'itération à travers une séquence de nombres.
                    Elles permettent de rendre le code plus concis, lisible et efficace.
                    Il est important de veiller à ce que la condition de sortie soit finalement atteinte
                    pour éviter les boucles infinies.
                </div>
            </div>
        </>
    );
}