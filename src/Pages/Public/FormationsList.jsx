import Formation from "../../Components/Formation"

export default function(){

    const formations = [
        {
            image : "/default.jpg" ,
            title : "Intoduction à la programmation en python",
            url :"https://github.com/mabakal/begin-with-python",
            description : "Python est devenue le langage de premier choix de nombreux développeurs, quelques raisons de ce choix est que python est un langage polyvalent, apprenez á apprendre python maintenant",
            price :"Free",
            niveau : "Intermediaire"
        },
        {
            image : "/data.jpg" ,
            title : "Introduction á l'analyse de données avec python",
            url :"https://github.com/mabakal/Data-analysis",
            description : "Dotez vous des outils afin d'analyser les données pour mieux prendre des décision",
            price :"Free",
            niveau : "Intermediaire"
        },
        {
            image : "/data.jpg" ,
            title : "Introduction á la programmation en Java",
            url :"https://github.com/mabakal/Java",
            description : "Java est un vieux langage de programme difficile á s'en débarasser. Il est utilisé pour développer des systèmes de grand envergure. Commencer dès maintenant á programmer á Java",
            price :"Free",
            niveau : "Intermediaire"
        }
    ]
    return(
        <>
            <div className="formationList">
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
        </>
    )
}