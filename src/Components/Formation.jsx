export default function Formation({image ,title, description, price, niveau, url}){

    const openLink = () => {
        window.open(url, "_blank")
    }
    return(
            <div className="displayFormation" onClick={openLink}>
                <img className="formationImage" src={image} alt="" /> 
                <div className="p-4 space-y-6 justify-center">
                    <div className="formationTitle">{title}</div>
                    <div className="formationInformation">
                        <div>{niveau}</div>
                        <div>{price}</div>
                    </div>
                    <div className="formationDescription">{description}</div>
                </div>
            </div>
    );
}