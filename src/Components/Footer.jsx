import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () =>{
    const current =  () => {
        return new Date().getFullYear();
      };

    return(

            <footer>
            <div className="footer-container">
                <div className="footer-section ">
                    <h4>BADJO Dibéa koffi</h4>
                    <p>
                        Je suis BADJO Dibéa koffi, ingénieur logiciel passionné par la création de solutions innovantes.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Navigation</h4>
                    <ul className='follow'>
                        {/* Image à droite 
                            <!--
                            <li><a href="/about">À propos</a></li>
                            <li><a href="/projects">Projets</a></li>
                       
                        --> 
                        */}
                        <li><a href="#/posts">Blog</a></li>
                        <li><a href="#/formations">Formations</a></li>  
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Suivez moi</h4>
                    <div className='follow'>
                        <div className='followDisplay'>
                            <div>
                                <a href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/"><LinkedInIcon/></a>
                            </div>
                            <div>
                                LinkedIn
                            </div>
                        </div>
                        <div className='followDisplay'>
                            <div>
                                <a href="https://github.com/badjodibe" ><GitHubIcon/></a>
                            </div>
                            <div>
                                GitHub
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p>&copy;{current()} BADJO Dibéa Koffi. Tous droits réservés.</p>
            </div>
            </footer>
    )
}
export default Footer;