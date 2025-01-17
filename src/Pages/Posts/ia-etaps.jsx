const IASteps = () => {

    return(
        <>
            <div className="postMeta">
                <div className="postDate">Publier le 15 Décembre 2024 </div>
                <h1> Les étapes pour construire un modèles de machine learning</h1>
                <div className="postImage">
                    <img src="../../../default.jpg" alt="" />
                </div>
                
            </div>
            <div className="postContent">
                <div>
                    <h3>Introduction</h3>
                    <div>
                        A mon début  en apprentissage automatique, très souvent, je ne suis pas des étapes important pour 
                        entrainer mes modèles. Je pensais qu'il suffit de connaitre un modèle, quel type de problème convient 
                        á un modèle puis avoir disposé les données d'appliqué le modèle aux données. Mais plus j'ai des 
                        expériences dans le domaine je me rends compte qu'il faut que ça. Ce n'est pas aussi simple, il faut 
                        passé par plusieurs étapes avant d'appliquer des modèles spécifiques à vos données. Aujourd'hui,
                        je me rends compte qu'appliqué un modèle á un dataset est la tâche la plus facile á faire.
                        Dans ce qui va suivre, je vais te présenter quelques étapes que je pense être nécessaire á passer
                        avant d'appliquer ton modèle aux données. 
                    </div>
                    <h4>Définition du problème</h4>
                    <div>
                        Ceci est indispensable, comprendre le problème á fortement lié á la solution dans tout le domaine. Un problème bien
                        compris résoudre à moitié le problème. Le célèbre savant Einstein á dit, je cite "Si on me donne un problème á résoudre 
                        en une heure, je passerai 59 minutes à chercher de comprendre le problème, une fois que je l'ai compris, je prendrai une 
                        minute pour trouver la solution.". Il faut comprendre le problème et s'il est nécessaire faire appèle à quelqu'un dans 
                        le domaine pour apprendre de son expertise. 
                    </div>
                    <h4>Collect de données</h4>
                    <div>
                        Une fois le problème compris, l'étape suivante est la collecte des données. Collecter les données sans comprendre le
                        problème, c'est comme prendre de l'arme pour aller dans combattre sans connaitre la nature du combat, sa violence ou
                        la caractéristique de l'ennemie que tu va affronter. Si on comprend un problème, on s'aura quel type de données collecter
                        Les données à collecter sont en relation directe avec les problèmes, les données qui peuvent nous aider á créer un modèle
                        capable de répondre à la problématique. Les données proviennent de différentes sources, les base de données, les pages
                        web, les réseaux sociaux, etc.
                    </div>
                    <h4>Préparer les données</h4>
                    <div>
                        C'est le moment de purifier les données, on appelle ça la manipulation de données. Je veux bien le diviser en deux étapes
                        Une pour la purification de données et l'autre pour l'ingénierie des caractéristiques (c'est la clé pour un bon modèle).
                        Très souvent les données recueillies ne sont pas sous de bon format ou de type. Je donne un exemple, vous avez collecté
                        une variable qui est le chiffre d'affaires, mais le problème, c'est que c'est sous forme de chaine de caractère. Ce qui
                        veut dire qu'on ne peut pas effectuer de l'opération arithmetic sur ce dernier. Ceci n'est qu'un cas, il y en a plusieurs
                        cas. Purifier les données, c'est d'organisation chaque observation de chaque variable pour qu'il soit sous un même format
                        afin d'appliquer l'opération adéquate sur ce dernier. Les autres étapes est l'ingénerie de caractéristiques, comme je l'ai 
                        dit plus haut, ce sont les clés d'un bon modèle. L'objectif d'un modèle est d'arriver á trouver les relations qui existe entre
                        les données. Par exemple la relation qui peut existe entre la taille et l'age. Pour des problèmes de grand variable c'est 
                        un peu difficile á un modèle de trouver la relation directement, il faut aider le modèle á le trouver, c'est ça l'ingénerie
                        des caractéristiques, il consiste à créer des nouvelles variables á partir des variables primaire en applicant certaines 
                        opérations sur eux. Surement, c'est la partie qui va occuper la majeure partie de votre temps. Même si vous avez appliqué
                        les données pour l'ajusté et il faut seulement ajuster les caractéristiques.

                    </div>
                    <h4>Analyser les données</h4>
                    <div>
                        On dit souvent qu'une image vaut mille mots, c'est ici la confirmation. La visualisation de données
                        vous permet de voir sous forme de diagramme les relations qui existent entre les données. vous verrez
                        comment les variables sont distribué et la relation qui existe entre ces derniers. En visualisation 
                        ces informations, vous aurez une meilleurs idée du modèle á choisir, le modèle qui correspond le mieux
                        á vos données.
                    </div>
                    <h4>Choisir le modèle</h4>
                    <div>
                        Plusieurs modèles sont disponibles pour être entrainé, il y a des modèles d'apprentissage superviser,
                        des modèles d'apprentissage non-superviser, les modèles d'apprentissage par partitionnement, etc.
                        Si vous avez bien compris le problème, les données que vous avez ainsi que la relation entre ces 
                        derniers, vous pourrait facilement choisir un modèle approprié. Un modèle rare sont des fois où vous
                        trouveriez des grandes précisions au premier coup, il faut toujours réajuster le modèle à tavers les
                        données.
                    </div>
                    <h4>Entrainer le modèle</h4>
                    <div>
                        C'est la phase d'entrainement des modèles, ici vous applique votre modèle à votre dataset,
                        c'est l'étape la plus simple. Il suffit de connaitre comment est ce que les api fonctionne,
                        comme tensorflow, ou pytorch etc. Vous sélectionner l'algorithme le modèle que vous voulez
                        et appliquer les données á ce dernier.
                    </div>
                    <h4>Tester le modèle</h4>
                    <div>
                        Il faut tester le modèle pour voir s'il aura la capacité de capter la relation qui existe entre de nouvelles données. Ici, il 
                        ne faut pas commettre l'erreur de tester le modèle sur les mêmes données d'entrainement. Le modèle ne sera pas efficace Pourquoi?
                        Par ce que les données d'entrainement sont utilisé pour trouver les paramètre du modèle. Si vous les tester en utilisant 
                        les mêmes données, ne soyez pas surpris qu'il fasse de bonnes prédictions. Mais plutôt, utiliser une nouvelle base de données
                        pour tester le modèle.
                    </div>
                    <h4>Évaluer le modèle</h4>
                    <div>
                        C'est l'étape d'évaluation du modèle
                    </div>
                    <h3>Conclusion</h3>
                    <p>
                        Les données occupent une place très capital dans les processus décisionnelles. Aujourd'hui, entreprise 
                        investissent massivement pour se doter des systèmes de collete et de traitement de données. La raison principales
                        est que les données permettent de prendre des décisions de manière efficaces et réduisant les erreures.
                    </p>
                </div>
            </div>
        </>
    )
}
export default IASteps;