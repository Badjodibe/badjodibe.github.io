import EntrepriesPosts from "./EntreprisePosts";

export default function Entreprise(){

    return(
        <>
        <div className="bg-gray-100 py-8 mt-15 dark:bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl  font-bold text-gray-800 mb-4  dark:text-white">
                Explorer des articles qui vous aides á comprendre comment vous pouvez tirez avantages de la technologie
            </h2>
          </div>
        </div>

        <div>
            <EntrepriesPosts/>
        </div>
    </>
    )
    
}