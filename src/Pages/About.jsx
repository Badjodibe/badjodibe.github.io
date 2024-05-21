import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function About(){
    return (
        <div>
            <div className="about-container">
              <div className="about-title">
                A propos  de moi
              </div>
              <div className="about-div">
                <p>
                    Dibé, avait découvert la programmation un peu tard.
                    Tout a commencé il y a plus de quatre ans, lorsqu'il a mis la main sur un livre de programmation Java.
                    Mais comme le dit le proverbe, il n'est jamais trop tard pour commencer quelque chose de grand.
                    C'est là que son voyage dans le monde du développement logiciel a commencé.
                    <br/>
                    <br/>
                    Dibé est assoifé de connaissance et de résolution de problèmes.
                    Chaque ligne de code était nouvelle opportuinité de créer, de relever les
                    défis pour aider les autres.
                    <br/>
                    <br/>
                    Au fil des ans, Dibé a continué son parcours d'apprentissage, explorant un monde fascinant à
                    travers la lecture de livres, la consultation d'articles et la participation à des conférences.
                    Son désir de rester constamment à jour et de découvrir de nouvelles technologies et pratiques
                    innovantes l'a motivé à poursuivre sans relâche son chemin dans le monde du développement
                    informatique.
                    <br/>
                    <br/>
                    Aujourd'hui, Dibé met ses compétences exceptionnelles au service des entreprises désireuses de
                    tirer parti des avantages offerts par le développement logiciel. En tant que développeur
                    expérimenté et formateur passionné, il partage son expertise avec les autres, les aidant à
                    acquérir les compétences nécessaires pour réussir dans le monde de la technologie.
                    <br/>
                    <br/>
                    En dehors de son travail, Dibé est un passionné de lecture. Pour lui, les livres sont une source
                    intarissable d'inspiration et de savoir. Il puise dans ces pages des idées, des concepts et des
                    perspectives qui enrichissent son esprit et nourrissent sa passion pour la technologie en
                    constante évolution.
                    <br/>
                    <br/>
                    Mais Dibé n'est pas seulement un amoureux des livres, il est aussi un fervent amateur de sport,
                    et plus particulièrement de football. Sur le terrain, il se laisse emporter par l'excitation du
                    jeu, jouant avec fougue et enthousiasme aux côtés de ses amis.
                    Il aime se détendre en regardant un match à la télévision, partageant des moments de joie et de
                    camaraderie avec ceux qui lui sont chers.
                    <br/>
                    <br/>
                    Il n'oublie jamais l'importance de passer du temps avec sa famille. Pour Dibé,
                    chaque moment 
                    passé avec ses proches est précieux, un rappel constant de l'importance des liens familiaux
                    et du soutien inconditionnel qu'ils offrent.
                </p>
              </div>
                <hr />
                <div className="about-div">
                    <h4 className="about-title">Joingnez-moi</h4>
                    <p className="about-content">
                        <div>
                            <div className='flex flex-row justify-around'>
                                <div className='flex flex-row space-x-3'>
                                    <div>
                                        <a href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/" className='follow-item'><LinkedInIcon/></a>
                                    </div>
                                    <div>LinkedIn</div>
                                </div>
                                <div className='flex flex-row space-x-3'>
                                    <div>
                                        <a href="mailto:badjodibe@gmail.com" className='follow-item'><EmailIcon/></a>
                                    </div>
                                    <div>badjodibe@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}