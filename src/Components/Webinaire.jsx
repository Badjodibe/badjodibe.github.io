export default function Webinaire(
    img, title, description, statut, date, lieu
){
    return(
        <>
            <div>
                <div>
                    <img src={img} alt="Alternative" />
                </div>
                <div>
                    <div>
                        <div>{title}</div>
                        <div>{description}</div>
                    </div>
                    <div>
                        <div>{date}</div>
                        <div>{lieu}</div>
                        <div>{statut}</div>
                    </div>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        </>
    );
}
