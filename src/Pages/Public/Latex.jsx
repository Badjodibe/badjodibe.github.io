const openLink = () => {
     window.open("https://forms.gle/x3AJ3osLVe8Sf8W27", "_blank")
 }
 
 export default function Latex(){
     return(
             <>
                 <div className="Entete">
                     <div className="Meta">
                         <h2 className="text-2xl md:text-4xl xs:text-xl font-bold text-gray-800 mb-4  dark:text-white">
                         LaTeX pour tous : Rédigez des documents techniques et académiques avec aisance
                         </h2>
                         <p>
                            Transformez vos idées en documents impeccables et professionnels : maîtrisez LaTeX, 
                            le puissant outil utilisé par les experts pour créer des publications, des rapports et des 
                            présentations de qualité supérieure.
                         </p>
                         <div className='info' onClick={openLink}>
                            <div className='metaInfo'>
                                <div>
                                    1 Février 2025
                                </div>
                                <button className='enrolle'>
                                    Inscrivez-vous.
                                </button>
                            </div>
                            <div className='metaInfo'>
                                <div>Horaires</div>
                                <button className='horaire'>
                                    15h-17h
                                </button>
                            </div>
                        </div>
                     </div>
                     <div>
                         <img
                             src="/latex.png"
                             alt="Placeholder"
                             className="object-fill h-48 w-96 xs:hidden"
                         />
                     </div>
                 </div>
                 <div className="FormationGuide">
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
                        LaTeX est un système de préparation de documents basé sur le langage de balisage, conçu pour 
                        produire des documents de haute qualité, notamment dans les domaines scientifiques, techniques 
                        et académiques. Contrairement aux traitements de texte traditionnels, LaTeX se concentre sur 
                        le contenu plutôt que sur la mise en forme, permettant ainsi de produire des documents structurés,
                        cohérents et parfaitement formatés, même pour des projets complexes. <br></br> <br />

                        Dans le but de vous faire découvrir latex et ces avantages, son utilisation, j'organise une formation dans lequel je vous présenterais latex
                        et comment l'utiliser. Tu es étudiant enseignant ou n'import qui désirant intégrer latex dans ta rédaction,
                        je t'invite dans cette formation gratuite.
                     </div>
                     <h3 id="apprendre">Qu'allez vous apprendre?</h3>
                     <div>
                         <div>
                            Cette formation vous permettra de maîtriser LaTeX pour créer des documents professionnels, 
                            qu'ils soient simples ou complexes. Vous apprendrez à structurer, formater et personnaliser
                            vos documents, à intégrer des éléments multimédia et à rédiger des équations. Vous serez également 
                            capable de gérer les références bibliographiques et d’optimiser votre processus de rédaction pour
                            une meilleure efficacité.
                         </div>
                         <div className=" mt-5 mb-5 p-5 border rounded-lg">
                         <ul>
                                <li className='displayModule'>

                                    <span className='module'>Introduction à LaTeX</span>
                                    <p>
                                        <ul>
                                            <li>Historique et avantages de LaTeX par rapport aux éditeurs traditionnels</li>
                                            <li>Installation, configuration et présentation de LaTeX</li>
                                            <li>Concept en Latex, Structure de base du document en Latex</li>
                                        </ul>
                                    
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Bases de la mise en forme de texte</span>
                                    <p>
                                        <ul>
                                            <li>Manipulation du texte</li>
                                            <li>Mise en page simple</li>
                                            <li>Personnalisation de la police et du style</li>
                                            <li>Personnalisation de la police et du style</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Tableaux, mathématiques et documents multimédia</span>
                                    <p>
                                        <ul>
                                            <li>Équations, matrice et symboles mathématiques</li>
                                            <li>Création et personnalisation des tableaux</li>
                                            <li>Équations et symboles mathématiques</li>
                                            <li>Insérer des images et ajuster leur taille, position et légendes.</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Références et bibliographies</span>
                                    <p>
                                        <ul>
                                            <li>Gestion des citations et bibliographies</li>
                                            <li>Gestion des références croisées</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Documents complexes et gestion de projets longs</span>
                                    <p>
                                        <ul>
                                            <li>Création de documents longs</li>
                                            <li>Chapitres, sections et sous-sections</li>
                                            <li>Table des matières automatique</li>
                                            <li>Gestion des annexes et index</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Latex et quelques sciences</span>
                                    <p>
                                        <ul>
                                            <li>Informatique, chimie, physique</li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <span className='module'>Projet de fin</span>
                                    <p>
                                     Application des compétences acquises dans un projet pratique
                                    </p>
                                </li>
                            </ul>
                         </div>   
                      </div>
                     <h3 id="aqui">À qui est destiné cette formation?</h3>
                     <div>
                            <ul>
                                <li>Étudiants et chercheurs souhaitant améliorer leurs présentations académiques</li>
                                <li>Professionnels des secteurs techniques et scientifiques ayant besoin de rédiger des documents complexes.</li>
                                <li>Toute personne désirant maîtriser la rédaction de documents avec LaTeX.</li>
                            </ul>
                     </div>
                     <h3 id="prerequis">Prérequis</h3>
                     <div>
                            Latex est un outil que tout le monde peut apprendre, vous n'avez pas besoin d'un prérequis et votre domaine d'activité importe peu
                      </div>
                 </div>
                 
             </>
     )
 }