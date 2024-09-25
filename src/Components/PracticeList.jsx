import PracticeFormat from "./PracticeFormat"

export default function PraticeList(){
    
    data = [
        {
            url : "url",
            title : "title",
            description : "title",
            openUrl : "openUrl"
        }
    ]
    
    return(
        <>
         <div>

         </div>

         <div>
            {
                data.map((practice, key) =>
                    <PracticeFormat
                    key={key}
                    url={practice.url}
                    title={practice.title}
                    description={practice.description}
                    openUrl={practice.openUrl}
                    />
            
            )
            }
         </div>
        </>
    )
}