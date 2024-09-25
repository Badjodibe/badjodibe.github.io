import ProblemList from "../../Components/ProblemList";

export default function Problems(){
    return(
        <>
            <div className="mt-15 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gray-100 m-5 dark:bg-zinc-600">
                {/* Texte à gauche */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
                    Bienvenue 
                    </h2>
                    <p className="text-gray-600 text-lg dark:text-white">
                       Ingénieur de logiciel. Developper des logi Par ailleurs j'aime passé mon temps á développer des modèles de modèles 
                       d'intelligence artificiel
                    </p>
                </div>

                {/* Image à droite */}
                <div className="md:w-1/3  flex justify-center md:justify-end">
                    <img
                    src="/practice.jpg"
                    alt="Placeholder"
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            
            <ProblemList/>
        </>
    )
}