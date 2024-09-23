import ArticleList from "./ArticleList";

const Welcome = () => {
    return(
        <div>
            <div className="mt-15 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gray-100 m-5 dark:bg-zinc-600">
                {/* Texte à gauche */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
                    Bienvenue 
                    </h2>
                    <p className="text-gray-600 text-lg dark:text-white">
                        Développeur Java passionné par l'innovation, je suis spécialisé dans la création de
                        solutions sur mesure. Mon expertise s'étend à l'analyse de données financières 
                        complexes et à la construction de modèles prédictifs en utilisant 
                        l'IA et le Big Data. En parallèle de ma carrière, je cultive ma créativité à travers
                        l'écriture et la lecture.
                    </p>
                </div>

                {/* Image à droite */}
                <div className="md:w-1/4  flex justify-center md:justify-end">
                    <img
                    src="/profile.jpeg"
                    alt="Placeholder"
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <div class = "text-5xl text-left ">
                <button class=" p-10 h-24 rounded-3xl underline" onClick={()=> window.open("#/posts", "_self")}>Voir toutes les publications</button>
            </div>
            
            <div>
                <ArticleList />
            </div>
            <hr />
            
            <div>
                <button className="contactButton" onClick={()=> window.open("#/contacts", "_self")}>Contacter moi</button>
            </div>
        </div>
    )
};
export default Welcome;