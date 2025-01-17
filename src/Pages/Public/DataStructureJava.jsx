const openLink = () => {
    window.open("https://forms.gle/x3AJ3osLVe8Sf8W27", "_blank")
}

export default function StructuresDeDonnees(){
    return(
            <>
                <div className="Entete">
                    <div className="Meta">
                        <h2 className="text-2xl md:text-4xl xs:text-xl font-bold text-gray-800 mb-4 dark:text-white">
                        Structures de Données en Java : Maîtrisez les bases et les implémentations avancées
                        </h2>
                        <p>
                           Découvrez les structures de données essentielles pour le développement en Java : 
                           maîtrisez leur implémentation, leur utilisation et leur optimisation pour résoudre des 
                           problèmes complexes dans vos projets logiciels.
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
                            src="/data_structure.jpg"
                            alt="Placeholder"
                            className="object-fill h-48 w-96 xs:hidden"
                        />
                    </div>
                </div>
                <div className="FormationGuide">
                    <button className="FormationButton" onClick={() => document.getElementById('apropos').scrollIntoView()}>
                         À propos
                    </button>
                    <button className="FormationButton" onClick={() => document.getElementById('apprendre').scrollIntoView()} >
                       Ce que vous allez apprendre ?
                    </button>
                    <button className="FormationButton" onClick={() => document.getElementById('aqui').scrollIntoView()}>
                         Pour qui ?
                    </button>
                    <button className="FormationButton" onClick={() => document.getElementById('prerequis').scrollIntoView()}>
                        Prérequis
                    </button>
                </div>
                
                <div className="Contenu"> 
                    <h3 id="apropos">À propos de la formation</h3>
                    <div>
                       Les structures de données sont au cœur de la programmation efficace. 
                       Cette formation vous présentera des concepts fondamentaux et avancés, 
                       tout en vous guidant dans l'implémentation pratique en Java. Que vous soyez 
                       étudiant, professionnel ou simplement curieux, cette formation est faite pour vous.
                    </div>
                    <h3 id="apprendre">Qu'allez-vous apprendre ?</h3>
                    <div>
                        <div>
                           Cette formation couvre les concepts suivants :
                        </div>
                        <div className="mt-5 mb-5 p-5 border rounded-lg">
                        <ul>
                               <li className='displayModule'>
                                   <span className='module'>Introduction aux structures de données</span>
                                   <p>
                                       <ul>
                                           <li>Définition et importance</li>
                                           <li>Notions de complexité algorithmique</li>
                                           <li>Choix des structures en fonction des besoins</li>
                                       </ul>
                                   </p>
                               </li>
                               <li>
                                   <span className='module'>Structures de données linéaires</span>
                                   <p>
                                       <ul>
                                           <li>Tableaux dynamiques</li>
                                           <li>Listes chaînées</li>
                                           <li>Piles et files</li>
                                       </ul>
                                   </p>
                               </li>
                               <li>
                                   <span className='module'>Structures de données non linéaires</span>
                                   <p>
                                       <ul>
                                           <li>Arbres binaires, AVL, et Trie</li>
                                           <li>Graphes : DFS, BFS</li>
                                           <li>Applications pratiques</li>
                                       </ul>
                                   </p>
                               </li>
                               <li>
                                   <span className='module'>Collections en Java</span>
                                   <p>
                                       <ul>
                                           <li>Maps et Sets</li>
                                           <li>Itération et parcours des collections</li>
                                           <li>Utilisation avancée du Stream API</li>
                                       </ul>
                                   </p>
                               </li>
                               <li>
                                   <span className='module'>Projets pratiques</span>
                                   <p>
                                    Mise en œuvre des compétences acquises dans un projet final.
                                   </p>
                               </li>
                           </ul>
                        </div>   
                     </div>
                    <h3 id="aqui">À qui est destinée cette formation ?</h3>
                    <div>
                           <ul>
                               <li>Étudiants et développeurs débutants souhaitant améliorer leurs bases en Java</li>
                               <li>Professionnels cherchant à optimiser leurs algorithmes</li>
                               <li>Passionnés de programmation désirant approfondir leurs connaissances</li>
                           </ul>
                    </div>
                    <h3 id="prerequis">Prérequis</h3>
                    <div>
                           Une connaissance de base en programmation Java est recommandée, mais pas obligatoire.
                     </div>
                </div>
                
            </>
    )
}
