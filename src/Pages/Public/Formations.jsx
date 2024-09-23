import FormationsList from "./FormationsList"
export default function Formations(){

    return(
        <>
        <div class="bg-gray-100 py-8 mt-15 dark:bg-black">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-2xl md:text-4xl  font-bold text-gray-800 mb-4  dark:text-white">
              Découvrez mes formations
            </h2>
          </div>
        </div>
        <div>
          <FormationsList/>
        </div>
    </>
    )
    
}