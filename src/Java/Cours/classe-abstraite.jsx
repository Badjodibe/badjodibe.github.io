export default function ClasseAbstraite(){
    return(
        <>
            <div>
                <h2>Classe Abstraite</h2>
                <div>
                    Une classe abstraite est une classe en Java qui ne peut pas être instanciée directement,
                    ce qui signifie que vous ne pouvez pas créer d'objets à partir d'une classe abstraite.
                    Au lieu de cela, elle sert de modèle pour d'autres classes qui en héritent 
                    (ou en étendent), appelées classes concrètes.
                </div>
                <h3>Quelques points á retenir sur les classes abstraites</h3>
                <div>
                    <ol>
                        <li>
                            <h4>Déclaration :</h4>
                            <p>
                                Une classe abstraite est déclarée à l'aide du mot-clé <span>abstract</span>.
                                Elle peut avoir des méthodes abstraites (méthodes sans implémentation) ainsi que
                                des méthodes concrètes (méthodes avec implémentation). Une classe abstraite doit avoir
                                obligatoirement au moins une méthode abstraite.
                            </p>
                        </li>
                        <li>
                            <h4>Méthodes abstraites :</h4>
                            <p>
                                Une méthode abstraite est déclarée sans corps, c'est-à-dire sans implémentation.
                                Elle est destinée à être redéfinie (ou implémentée) dans les classes filles. 
                                Une classe abstraite peut avoir un ou plusieurs méthodes abstraites.
                            </p>
                        </li>
                        <li>
                            <h4>Instanciation interdite :</h4>
                            <p>
                                Comme une classe abstraite ne peut pas être instanciée directement, elle ne 
                                peut être utilisée que comme classe parente pour créer d'autres classes.
                                Une classe abstraite peut contenir des constructeurs, mais ils ne peuvent pas
                                être utilisés pour instancier la classe abstraite elle-même.
                            </p>
                        </li>
                        <li>
                            <h4>Héritage</h4>
                            <p>
                                Une classe fille (ou sous-classe) d'une classe abstraite doit fournir des 
                                implémentations pour toutes les méthodes abstraites héritées de la classe
                                abstraite parente. Sinon, la classe fille doit également être déclarée comme 
                                abstraite.
                            </p>
                        </li>
                    </ol>
                </div>  
                <h3>Création d'une class abstraite</h3>
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