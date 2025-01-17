const openLink = () => {
   // window.open("https://forms.gle/2nVsFasDb7zQerwy6", "_blank")
}

export default function Java(){
    return(
            <>
                <div className="Entete">
                    <div className="Meta">
                        <h2 className="text-2xl md:text-4xl xs:text-xl font-bold text-gray-800 mb-4  dark:text-white">
                            Dévenez développeur Java
                        </h2>
                        <p>
                           Vous allez apprendre l'essentielle pour développer en Java. Les bases jusqu'à 
                           la programmation orienté objet, les structures de données et autres.
                        </p>
                        <div className='info' onClick={openLink}>
                            <div className='metaInfo'>
                                <div>
                                    Déjà débuter
                                </div>
                                <button className='enrolle'>
                                    Attendez une autre session.
                                </button>
                            </div>
                            <div className='metaInfo' id="hidden">
                                <div>Horaires</div>
                                <div className="horaire">
                                    De 15h-17h
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/java formation 2.jpg"
                            alt="Placeholder"
                            className="object-fill h-48 w-96 xs:hidden"
                        />
                    </div>
                </div>
                <div className="FormationGuide sticky top-50">
                    <button className="FormationButton" onClick={() => document.getElementById('apropos').scrollIntoView()}>
                         A propos
                    </button>
                    <button className="FormationButton" onClick={() => document.getElementById('apprendre').scrollIntoView()} >
                       Ce que vous allez apprendre?
                    </button>
                    <button className="FormationButton" onClick={() => document.getElementById('aqui').scrollIntoView()}>
                         Qui?
                    </button>
                    <button className="FormationButton" onClick={() => document.getElementById('prerequis').scrollIntoView()}>
                        Prérequis
                    </button>
                </div>
                
                
                <div className="Contenu"> 
                    <h3 id="apropos">A propos de la formation</h3>
                    <div>
                        Sans doute java est l'un voir le premier langage de programmation utilisé dans le développement d'application
                        Il est utilisé dans différent domaine comme le développement (Application mobile, web, desktop), le
                        système embarqué, les jeux vidéos, les logiciels, l'IA, etc. C'est le premier choix des entreprises.
                        dernier pour l'améliorer ce qui prouve son besoin sur le marché. <br />

                        Si vous êtes ici, c'est sûrement par ce que vous désirez apprendre à programmer en Java pour une raison
                        quelconque. Vous êtes à la bonne place, si vous-vous Inscrivez dans cette formation, vous allez apprendrez á développer
                        votre propre application en Java d'une manière simple et efficace.
                    </div>
                    <h3 id="apprendre">Qu'allez vous apprendre?</h3>
                    <div>
                        <div>
                            Cette formation vise à donner à tous la capacité de programmer en Java.
                            Au cours de cette formation, vous allez apprendre la notion liée à la programmation en général,
                            et celles de Java. Vous aurez des bases solides en Java qui vont vous permettre de créer tout programme en Java
                        </div>
                        <div>
                            L'objectif principal de cette formation est de vous apprendre á programmer en Java, vous fournir le 
                            fondement et l'essentielle pour programmer en Java. Nous ne couvrirons pas la programmation évènementielle
                            comme les applications à interface graphique, ou la programmation web, etc. Mais elle vous donnera
                            des bases solides pour que vous puissiez les faire.
                        </div>
                        <div className=" mt-5 mb-5 p-5 border rounded-lg">
                            <ul>
                                <li className='displayModule'>
                                    <span className='module'>Module 1</span>
                                    <p>
                                        Cette partie couvrira la présentation de java d'une manière générale, les outils qu'on va utiliser et comment est-ce que vous
                                        nous allez travailler dans cette formation.
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 2</span>
                                    <p>
                                        Concepts de Base de la programmation et du langage (la variable, les types de données, les opérateurs, 
                                        les structures de décision et conditionnelle, les tableaux)
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 3</span>
                                    <p>
                                        Comment organiser et structurer les programmes avec les fonctions et les packages
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 4</span>
                                    <p>
                                        La programmation orientée orienté objet : Les Classes, les objets, l'héritage, les Classes
                                        abstraites, les interfaces, covariance des variables, le polymorphisme, l'encapsulation
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 5</span>
                                    <p>
                                        Gérer les erreurs peuvant subvenir dans notre programme
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 6</span>
                                    <p>
                                        Nous couvrirons la programmation générique
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 7</span>
                                    <p>
                                        La gestion des fichiers, comment manipuler les fichiers dans notre programme
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Module 8</span>
                                    <p>
                                        Les structures de données, nous apprendrons à structurer et organiser nos données pour faciliter leur traitement 
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                     </div>
                    <h3 id="aqui">À qui est destiné cette formation?</h3>
                    <div>
                        Cette formation est destiné à toute personne désirant apprendre à programmer en Java quelle que soit sa provenance.
                        Elle est conçu d'une manière à être accèssible à toute personne d'une manière simple et informative. Que
                        vous soyez débutant cette formation vous formera sur l'essentielle de la programmation par seulement en Java, si vous 
                        êtes déjà dans le domaine elle vous éclairera sur les concepts qui vous ont peut-être échappé.
                    </div>
                    <h3 id="prerequis">Prérequis</h3>
                    <div>
                        Vous n'avez pas besoin d'un prérequis en programmation ce qui est exigé est un ordinateur
                     </div>
                </div>
                
            </>
    )
}