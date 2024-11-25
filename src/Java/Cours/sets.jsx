export default function Sets(){
    return(
        <>
            <div>
                <h2>Les Set</h2>
                <div>
                    Un set (ou ensemble) est une structure de données en informatique qui stocke une 
                    collection non ordonnée d'éléments uniques, c'est-à-dire sans doublons.
                    Contrairement à une liste ou un tableau, un set ne permet pas d'avoir plusieurs
                    fois le même élément. Les sets sont utilisés lorsqu'il est nécessaire de garantir 
                    l'unicité des éléments, comme dans les cas où l'on veut éviter les doublons dans 
                    une collection de données. <br />
                    Les sets sont idéals pour effectuer les opération sur les ensemble comme les unions
                    les intersections, les difféRences etc
                </div>
                <h3>Les set en Java</h3>
                <div>

                </div>
                
                <h3>Les implémentation des Set</h3>
                <div>
                    Les sets en Java sont principalement définis par l'interface Set et ont plusieurs
                    implémentations, chacune ayant des caractéristiques spécifiques adaptées à des besoins
                    différents. Ici voici deux exemple d'une implémentation des sets. Il y en a d'autre
                </div>
                <div>
                    
                    <ol>
                        <li>
                            <span>HashSet</span> est une implémentation de l'interface Set qui utilise une table
                            de hachage pour stocker ses éléments. Il permet de stocker une collection d'objets 
                            sans doublons, et l'ordre des éléments n'est pas garanti.
                        </li>
                        <li>
                            <span>TreeSet</span> est une implémentation de l'interface Set qui utilise
                            un arbre rouge-noir pour stocker ses éléments. Cela signifie que les éléments 
                            sont toujours triés selon leur ordre naturel ou selon un comparateur fourni 
                            lors de la création du set.
                        </li>
                    </ol>
                </div>
                <h3>Création d'un set</h3>
                <div>

                </div>
            </div>
        </>
    )
}