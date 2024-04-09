import { NavLink, Outlet } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navigation(){
    return(
        <div>
            <header>
                <nav className="nav-container">
                    <div className='nav-flex'>
                        <div className='nav-display'>
                            <div><NavLink to={"/"} className='item-display'>Accueil</NavLink></div>
                            <div><NavLink to={"/about"} className='item-display'>Á Propos</NavLink></div>
                            <div><NavLink to={"/blog"} className='item-display'>Blog</NavLink></div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
function FollowMe(){
    return(
        <div className='follow-content'>
            <div>
                <a href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/" className='follow-item'><LinkedInIcon/></a>
            </div>
            <div>
                <a href="https://github.com/badjodibe" className='follow-item' ><GitHubIcon/></a>
            </div>
        </div>
    );
}

function Footer(){

    const current =  () => {
        return new Date().getFullYear();
      };
    return(
       <>
        <div>
            <footer className='footer-container'>
                    <div className='footer-nav'>
                        <div><NavLink to={"/"} className='item-display'>Accueil</NavLink></div>
                        <div><NavLink to={"/about"} className='item-display'>Á Propos</NavLink></div>
                        <div><NavLink to={"/blog"} className='item-display'>Blog</NavLink></div>
                    </div>
                    <div className='footer-follow'>
                        <div>
                            <a href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/" className='follow-item' target='_blank'><LinkedInIcon/></a>
                        </div>
                        <div>
                            <a href="https://github.com/badjodibe" className='follow-item' target='_blank' ><GitHubIcon/></a>
                        </div>
                    </div>
            </footer>
            <hr/>
            <p className='copy-right'>&copy;{current()} BADJO Dibéa Koffi. Tous droits réservés.</p>
        </div> 
       </>
    );
}
export default Navigation;
export {Navigation, FollowMe, Footer};