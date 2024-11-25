export default function Fichier(){
    return(
        <>
            <div>
                <h2>Les fichiers</h2>
                <div>
                    Un fichier est une unité de stockage sur un ordinateur qui contient des données,
                    telles que du texte, des images, des vidéos, des programmes, etc. Les fichiers sont 
                    organisés de manière hiérarchique dans un système de fichiers, où ils sont souvent 
                    regroupés dans des répertoires ou des dossiers. <br />

                    Chaque fichier possède un nom unique qui permet de l'identifier dans le système de
                    fichiers. Les fichiers peuvent avoir différentes extensions de nom de fichier, qui 
                    indiquent souvent le type de contenu qu'ils contiennent ou le programme associé à leur 
                    traitement. <br />

                    Les fichiers peuvent être ouverts, lus, écrits, modifiés, déplacés, copiés ou 
                    supprimés par des programmes informatiques, selon les autorisations et les
                    capacités du système d'exploitation sur lequel ils sont stockés. <br />

                    Chaque fichier est localiser dans le système des fichier par son chemin. un chemin (path)
                    fait référence à l'adresse ou à l'emplacement d'un fichier ou d'un répertoire dans un
                    système de fichiers. Il s'agit d'une chaîne de caractères qui spécifie l'emplacement
                    exact d'un fichier ou d'un répertoire dans la hiérarchie du système de fichiers. un chemin
                    peut être relatif ou absolue <br />
                </div>
                <div>
                    <span>Chemin absolu </span> spécifie l'emplacement complet d'un fichier
                    ou d'un répertoire à partir de la racine du système de fichiers. Par exemple, sur 
                    un système de fichiers Unix, `/usr/local/bin` est un chemin absolu qui spécifie le 
                    répertoire `bin` situé dans `local`, qui lui-même est situé dans `usr`. Sur un système 
                    Windows, `C:\Program Files\Java` est un exemple de chemin absolu. <br />

                    <span>Chemin relatif </span> spécifie l'emplacement d'un fichier ou d'un répertoire par
                    rapport à un répertoire de référence. Par exemple, `../../images/photo.jpg` est un 
                    chemin relatif qui spécifie le fichier `photo.jpg` situé deux niveaux au-dessus du 
                    répertoire courant.
                </div>
                <h3>L'objet Path</h3>
                <div>
                    En Java, la classe `Path` fait partie du package <span>java.nio.file</span> , et elle
                    est utilisée pour représenter un chemin de fichier ou de répertoire dans le système de
                    fichiers. La classe `Path` fournit des méthodes pour manipuler les chemins, effectuer 
                    des opérations de fichiers et de répertoires, et travailler avec des chemins relatifs 
                    et absolus.
                </div>
                <h3>Les methode de l'objet Path</h3>
                <div>
                    
                </div>
                <div>
                    Comme dit au début, les fichiers sont utilisé pour stocker ou récuperer les informations. Cela garantie la 
                    persistance de données. Chaque traitement sur les fichiers doit suivre un cycle. Dans ce qui va suivre vous 
                    aller apprendre comment effectuer les opérations sur les fichiers á savoir les ajout ou les récupération 
                    d'information. 
                </div>
            </div>
        </>
    )
}