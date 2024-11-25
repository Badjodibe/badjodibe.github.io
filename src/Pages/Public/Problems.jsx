import ProblemList from "../../Components/ProblemList";

export default function Problems(){
    return(
        <>
            <div className="mt-15 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gray-100 m-5 dark:bg-zinc-600">
                {/* Texte à gauche */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
                        La pratique mène à l'excellence.
                    </h2>
                    <p className="text-gray-600 text-lg dark:text-white">
                        Un ensemble de défis pour renforcer vos compétences. Explorez des algorithmes dans 
                        divers domaines, allant des problèmes simples aux plus complexes.
                        Améliorez vos compétences par la pratique.
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