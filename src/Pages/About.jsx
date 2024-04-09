import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function About(){
    return (
        <div>
            <div className="about-container">
                <div className="about-div">
                    <h1 className="about-title">Salut</h1>
                    <p className="about-content">
                        Moi c'est <span>Dibé </span>
                        ce que je sais mieux faire, c'est de développer des logiciels. Je passe beaucoup de mon temps
                        sur mon Ordinateur.<br/>
                        <br/>
                        Actuellement, je poursuis mes étude au cycle Master et je travail
                        sur <span> l'utilisation du Big Data couplé avec Deep Learning pour le traitement d'images
                        biomédicalles.
                        </span> <br/>
                        <br/>
                        J'aime partager, si tu t'interesse á la programmation informatique, j'ai créé un page sur
                        laquelle je dépose les cours et projets en programmation informatique. Tu trouveras surement
                        de contenue interessant <a href="https://github.com/mabakal">ici</a>
                       <br/>
                    </p>
                </div>
                <hr />
                <div className="about-div">
                    <h4 className="about-title">Comment j'ai commencer ce voyage?</h4>
                    <p className="about-content">
                        Je  programme il y a plus de quatre ans, au début j'étais curieux sur
                        la programmation et je suis tombé sur un livre de programmation Java. Depuis ce 
                        temps j'ai dévéloper un amour pour la programmation.
                        <br/>
                        Mon parcours d'apprentissage se poursuit alors que j'explore ce monde fascinant 
                        à travers la lecture de livres, la consultation d'articles et la participation 
                        à des conférences. Ces moyens me permettent de rester constamment à jour et
                        de découvrir de nouvelles technologies et pratiques innovantes.<br/>
                        <br/>
                        Aujourd'hui, je mets mes compétences au service de ceux qui désirent se former dans
                        le domaine de la programmation, ainsi que des entreprises qui cherchent à exploiter
                        les avantages offerts par le développement de logiciel.
                    </p>
                </div>
                <hr />
                <div className="about-div">
                    <h4 className="about-title">Quoi d'autre sur moi?</h4>
                    <p className="about-content">
                        Présentement je vie au Maroc, plus précisement á béni Mellal, une des ville calmes du Maroc. 
                        <br/>
                        <br/>
                        Quand je ne suis pas en train de programmer, vous me trouverez souvent en train 
                        de pratiquer le sport. Je suis un passionné de football et j'apprécie regarder 
                        les matchs tout en prenant plaisir à jouer avec mes amis sur le terrain.
                        En dehors de cela, je suis un éternel apprenant, toujours avide de nouvelles 
                        connaissances. J'aime plonger dans les pensées des autres à travers la lecture
                        de livres. Je partage aussi mes découverte et la partage avec les autres.
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