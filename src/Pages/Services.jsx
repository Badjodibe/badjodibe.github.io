import ReactDOM from 'react-dom/client'
function renderDeveloppement(){
  const container = document.getElementById("cl"); 
  ReactDOM.createRoot(container).render(
    <Developpement/>
  )
}
function renderData(){
  const container = document.getElementById("cl"); 
  ReactDOM.createRoot(container).render(
    <Data/>
  )
}
function renderArtificille(){
  const container = document.getElementById("cl"); 
  ReactDOM.createRoot(container).render(
    <Artificille/>
  )
}
// Pour les outils

function renderLanguage(){
  const container = document.getElementById("t"); 
  ReactDOM.createRoot(container).render(
    <Language/>
  )
}
function renderIde(){
  const container = document.getElementById("t"); 
  ReactDOM.createRoot(container).render(
    <Ide/>
  )
}
function renderFramework(){
  const container = document.getElementById("t"); 
  ReactDOM.createRoot(container).render(
    <Framework/>
  )
}
function renderModelisation(){
  const container = document.getElementById("t"); 
  ReactDOM.createRoot(container).render(
    <Productivite/>
  )
}

export default function Services(){

return(
    <>
      <div className='display'>
          <div className='display-content'>
            <h1 className="title_principal">
              Les défis
            </h1>
            <p className="text-soutien">
            Polyvalant et gourmant de savoir, j'utilise la technologies <br /> du numerique pour relever les 
            défis, apporter des solutions.
            </p>
          </div>
          <div className='cote' id="cote">
            J'aime la liberté de l'esprit á chercher les idées innovants, les regroupés et proposer
            des solutions uniques.
          </div>
      </div>
      <hr className="m-3"/>
      <div>
        <div className="mes-services">
          <div className="all-services">
            <div className="service"> <button onClick={renderDeveloppement}>Développement informatique</button></div>
            <div className="service"><button onClick={renderData}>Analyse de données</button></div>
            <div className="service"><button onClick={renderArtificille}>Intelligence artificielle</button></div>
          </div>
          <div className="service-short">
            <div className="description-contanair" id='cl'>
                <div className="description">
                  <h3 className='service-title'>
                  Transformez vos idées en réalité numérique.
                  </h3>
                  <p className="description-service">
                  Que votre projet de système d'information soit complexe ou ambitieux,
                  je suis là pour vous accompagner dans sa concrétisation.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div>
            <h1 className='accroche'>
            </h1>
            <p className="blog-description">

            </p>
        </div>
        <hr className="m-3"/>
        <div className='display-reverse'>
          <div className='display-content'>
            <h1 className="title_principal">
              Ici sont les outils que j'utilise
            </h1>
            <p className="text-soutien">
              J'utilise quodidiennement les outils plus polulaire.
            </p>
          </div>
          <div className='cote' id="categorie">
                  <button className="tool-categorie" onClick={renderLanguage}>Language</button>
                  <button className="tool-categorie" onClick={renderIde}>IDE</button>
                  <button className="tool-categorie" onClick={renderFramework}>Framework</button>
                  <button className="tool-categorie" onClick={renderModelisation}>Modélisation et Productivité</button>
          </div>
      </div>
      <hr className="m-3"/>
      <div className="tools-display" id="t">
              <div className="tools">
                <button className="tool"> Java</button>
                <button className="tool">Python</button>
                <button className="tool">React.js</button>
                <button className="tool">HTML&CSS</button>
              </div>
      </div>
      <div className='show-more-content'>
            <button className='show-more'><a href="#/about">Contact Moi</a></button>
      </div>
    </>
);
}
function Developpement(){
  return(
    <div className="description-contanair" >
        <div className="description">
          <h3 className='service-title'>
          Transformez vos idées en réalité numérique
          </h3>
            <p className="description-service">
            Que votre projet de système d'information soit complexe ou ambitieux,
            je suis là pour vous accompagner dans sa concrétisation.
            </p>
        </div>
    </div>
  );
}
function Data(){
  return(
    <div className="description-contanair">
        <div className="description">
            <h3 className='service-title'>Prenez des décisions éclairées</h3>
            <p className="description-service">
            La prise de décision est toujours un processus crucial.
            J'analyse vos données afin de mettre en lumière ce qu'elles cachent,
            vous permettant ainsi de prendre des décisions éclairées
            </p>
        </div>
      </div>
  );
}
function Artificille(){
  return(
    <div className="description-contanair">
        <div className="description">
            <h3 className='service-title'>
            Utilisation de l'IA pour des Décisions Assistées
            </h3>
            <p className="description-service">
            Intégrer l'Intelligence Artificielle dans vos systèmes,
            je Vous accompagne dans vos projets.
            </p>
        </div>
      </div>
  );
}
/* Tools */
function Language(){
  return(
    <div className="tools">
          <button className="tool"> Java</button>
          <button className="tool">Python</button>
          <button className="tool">Java Script</button>
          <button className="tool">HTML&CSS</button>
          <button className="tool">bash</button>
        </div>
  );
}
function Ide(){
  return(
    <div className="tools">
          <button className="tool"> Eclipse</button>
          <button className="tool">VS Code</button>
          <button className="tool">TextStudio</button>
          <button className="tool">Jupyter Lab</button>
          <button></button>
        </div>
  );
}
function Productivite(){
  return(
    <div className="tools">
          <button className="tool"> Git</button>
          <button className="tool">Postman</button>
          <button className="tool">StartUML</button>
          <button className="tool">HTML&CSS</button>
          <button></button>
        </div>
  );
}
function Framework(){
  return(
    <div className="tools">
          <button className="tool">Spring boot</button>
          <button className="tool">React.Js</button>
          <button className="tool">Tailwind</button>
        </div>
  );
}
/* Mes services  */

function Analyse(){
  return(
    <>
    </>
  );
}
function Software(){
  return(
    <>
    </>
  );
}
function ArtificilleIntelligence(){
  return(
    <>
    </>
  );
}
export {Developpement, Artificille, Data, Analyse, Software, ArtificilleIntelligence, Language, Ide, Framework, Productivite};