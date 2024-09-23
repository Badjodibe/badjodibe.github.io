import LinkedIn from "@mui/icons-material/LinkedIn"
import GitHub from "@mui/icons-material/GitHub"
import { Twitter } from "@mui/icons-material"
import { Email } from "@mui/icons-material"
import { WhatsApp } from "@mui/icons-material"

export default function Contact(){
    return(
        <>
            
            <div className="contactContainer">
                <div className="contactAction">Contacter Moi</div>
                <div className="postDate">Vous pouvez me joindre sur mes differents comptes</div>
                <div className="contacts">
                    <button onClick={()=> window.open("https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/", "_blank")} ><LinkedIn/> </button>
                    <button onClick={()=> window.open("https://www.github.com/Badjodibe/", "_blank")} ><GitHub/></button>
                    <button onClick={()=> window.open("https://x.com/BADJO90482868", "_blank")} ><Twitter/> </button>
                    <button onClick={()=> window.location = 'mailto:badjodibe@gmail.com'} ><Email/> </button>
                    <button onClick={()=> window.open("https://wa.me/212682386800", "_blank")} ><WhatsApp/> </button>
                </div>
            </div>
        </>
    )
}