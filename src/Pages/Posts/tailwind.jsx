import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";

const installation =  `
\`\`\`bash
npx create-react-app mon-projet-tailwind
\`\`\`
`

const dependance =  `
\`\`\`bash
cd mon-projet-tailwind
npm install -D tailwindcss postcss autoprefixer
\`\`\`
`

const configuration =  `
\`\`\`javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
\`\`\`
`

const utilisation =  `
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`
`

export default function Tailwind(){

    useEffect(() => {
        hljs.highlightAll();
      }, []);
  
    return(
        <>
        <div className="postMeta">
                <div className="postDate">Publier le 19 Août 2024 </div>
            </div>
            <h1>Introduction à Tailwind CSS : Simplifier le Design avec des Classes Utilitaires</h1>
            <div className="postImage">
                <img src="../../../deep learning.jpg" alt=""/>
            </div>
            <div className="postContent">
                <h3>Introduction</h3>
                <p>
                    Tailwind CSS est un framework CSS moderne qui se distingue par son approche utilitaire,
                    offrant une méthode flexible et rapide pour créer des interfaces utilisateur.
                    Contrairement aux frameworks CSS traditionnels qui fournissent des composants prédéfinis,
                    Tailwind CSS permet aux développeurs de composer des styles directement dans 
                    leur HTML à l'aide de classes utilitaires. 
                    Cet article explore ce qu'est Tailwind CSS, ses caractéristiques principales, 
                    et comment l'utiliser pour concevoir des interfaces web élégantes et fonctionnelles.
                </p>
                <h4>Qu'est-ce que Tailwind CSS ?</h4>
                <p>
                    Tailwind CSS est un framework de conception de style CSS qui adopte une approche 
                    utilitaire pour la conception des interfaces utilisateur. Au lieu de fournir des 
                    composants et des thèmes prêts à l'emploi, Tailwind propose une vaste gamme de classes
                    utilitaires qui permettent aux développeurs de créer des designs personnalisés en 
                    combinant ces classes.
                </p>
                <h4>Principes Clés de Tailwind CSS</h4>
                <p>
                    <ul>
                        <li>
                            <h5>Classes Utilitaires</h5>
                            <p>
                                Tailwind CSS utilise des classes utilitaires qui appliquent des styles 
                                spécifiques aux éléments HTML. Chaque classe est responsable d'un aspect 
                                particulier du style, comme la couleur de fond, la taille du texte, ou les
                                marges.
                            </p>
                        </li>
                        <li>
                            <h5>Personnalisation</h5>
                            <p>
                                Tailwind CSS intègre des classes pour gérer les styles réactifs.
                                Les classes utilitaires peuvent être conditionnées en fonction des points 
                                de rupture pour offrir une mise en page adaptée aux différents appareils.
                            </p>
                        </li>
                        <li>
                            <h5>Configuration</h5>
                            <p>
                                Tailwind CSS est configuré à l'aide d'un fichier de configuration 
                                <strong>tailwind.config.js</strong>, qui permet de définir des thèmes,
                                des extensions, et des configurations spécifiques au projet.
                            </p>
                        </li>
                        <li>
                            <h5>Installation et Configuration sur react.js</h5>
                            <p>
                                <ul>
                                    <li>
                                        <h5>Creation de projet</h5>
                                        <div dangerouslySetInnerHTML={{ __html: marked(installation) }}></div>
                                    </li> 
                                    <li>
                                        <h5>Installation de Tailwind CSS et ses dépendances</h5>
                                        <div dangerouslySetInnerHTML={{ __html: marked(dependance) }}></div>
                                    </li>
                                    <li>
                                        <h5>Configuration</h5>
                                        <p>
                                            Avant d'utliser CSS il faut établir quelques configuration comme ceci
                                        </p>
                                        <div dangerouslySetInnerHTML={{ __html: marked(configuration) }}></div>
                                    </li>
                                    <li>
                                        <h5>Importation pour l'utilisation</h5>
                                        <p>
                                            Dans vos fichier css, veillez importer les library css pour l'utilisation
                                            comme ceci
                                        </p>
                                        <div dangerouslySetInnerHTML={{ __html: marked(utilisation) }}></div>
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
}
+221775285584

