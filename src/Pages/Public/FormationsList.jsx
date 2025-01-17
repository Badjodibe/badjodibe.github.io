import Formation from "../../Components/Formation"

export default function FormationList(){

    const formations = [
        {
            image : "/python.png" ,
            title : "Intoduction à la programmation en python",
            url :"https://github.com/mabakal/begin-with-python",
            description : "Un langage de plus en plus adopté par les développeurs et aussi scientifique, " + 
            "c'est un langage qui convient le mieux pour les défis auxquels ont fais face aujourd'hui sur l'IA" +
             "",
            price :"Gratuite",
            niveau : "Intermediaire"
        },
        {
            image : "/java.png" ,
            title : "Développer vos propre application en Java",
            url :"#/formations/java-avance",
            description : "Sans doute java est l'un voir le premier langage de programmation utilisé " + 
            "dans le développement d'application Il est utilisé dans différent domaine comme le " + 
            "développement (Application mobile, web, desktop), le système embarqué, les jeux vidéos," + 
            "les logiciels, l'IA, etc.",
            price :"Gratuite",
            niveau : "Avancé"
        },
        {
            image : "/latex.jpeg" ,
            title : "Apprenez à rédiger tout document avec latex, quelques soit leur complexité",
            url :"#/formations/latex-pour-les-debutants",
            description : "Latex est un système de créations de documents divers. Il est incontournables dans" +
             "a rédaction scientifique, utilisé par des chercheurs, des enseignants des" + 
            "étudiants pour rédiger leurs documents. ",
            price :"Gratuite",
            niveau : "Débutant"
        }
       
    ];

    return(
        <div className="dark:bg-zinc-700  pt-5 pb-10">
            <div className="formationList ">
                {
                    formations.map((formation, index) => 
                        <Formation 
                            key={index}
                            image={formation.image}
                            title={formation.title}
                            description={formation.description}
                            price={formation.price}
                            url={formation.url}
                            niveau={formation.niveau}
                        />
                    )

                }
            </div>
        </div>
            
    )
}