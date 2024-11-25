export default function CommingSoon(
    {urlImage, title}
){
    return(
        <>
            <div className="CommingContainer">
                <div className="CommingTitle">{title}</div>
                <div className="object-center"> 
                    <img src={urlImage} alt="Une erreur c'est produite" className="CommingImage" />
                </div>
            </div>
        </>
    );
}