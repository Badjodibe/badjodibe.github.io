import Formation from "../../Components/Formation"

export default function(){

    const formations = [
        {
            image : "/default.jpg" ,
            title : "Intoduction à python",
            url :"https://github.com/mabakal/begin-with-python",
            description : "Python est devenu le langage de premier choix de nombreux développeurs, quelques raisons de ce choix est que python est un langage polyvalent",
            price :"Free",
            niveau : "Intermediaire"
        },
        {
            image : "/data.jpg" ,
            title : "Apprenez á analyser les données",
            url :"https://github.com/mabakal/Data-analysis",
            description : "La prise de décision est cruciale dans la vie quotidienne. Les résultats de nos actions sont directement influencés par les choix que nous faisons. L'une des approches pour prendre des décisions éclairées ",
            price :"Free",
            niveau : "Intermediaire"
        },
        {
            image : "/data.jpg" ,
            title : "Apprenenez á programmer en Java",
            url :"https://github.com/mabakal/Java",
            description : "Liberer votre talent en développand en Java ",
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