export default function PracticeFormat(
    {url, title, description, openUrl }
){
   const openLink = () => {
    window.open(openUrl, "_self")
   }
    return(
        <>
           <div onClick={openLink} class="relative h-96 w-full bg-cover bg-center" style= {{backgroundImage: `url(${url})`}}>
                <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                <div class="absolute bottom-8 left-8 text-white">
                    <h1 class="text-4xl font-bold">{title}</h1>
                    <p class="mt-2 text-lg">{description}</p>
                </div>
            </div>
 
        </>
    )
}