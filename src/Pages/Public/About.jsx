import React from "react";

const About = () => {
    return (
        <div className=" py-10">
            <div className="container mx-auto px-4">
                {/* Profile Section */}
                <section className=" shadow-lg rounded-lg p-6 mb-8 border-t-4 border-green-600">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3">
                            <img
                                className="w-48 h-48 rounded-full mx-auto border-4 border-green-500 shadow-md"
                                src="./profile.jpeg"
                                alt="Profile"
                            />
                        </div>
                        <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
                            <h1 className="text-3xl  ">
                                BADJO Dibéa Koffi
                            </h1>
                            <h2 className="text-lg text-green-600">
                                Ingénieur Logiciel - Passionné par l’innovation
                            </h2>
                            <p className=" mt-4">
                                Né au Togo et aujourd’hui basé à Béni Mellal, Maroc, je suis animé par une
                                conviction : la technologie peut transformer le monde. Toujours, je suis fasciné par les 
                                mystères de l’informatique. Cette passion m’a conduit à devenir ingénieur logiciel et à m’investir
                                dans des projets innovants mêlant <strong>intelligence artificielle</strong>, <strong>analyse de données</strong>, et 
                                <strong> développement logiciel</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* My Journey */}
                <section className=" shadow-lg rounded-lg p-6 mb-8 border-t-4 border-green-600">
                    <h3 className="text-2xl font-bold  mb-4"> Mon Parcours</h3>
                    <p className=" leading-relaxed">
                        Mon aventure commence avec un diplôme universitaire en mathématiques, physique, et
                        informatique. Rapidement, j’ai compris que ma voie était dans la programmation. Après une{" "}
                        <span className="font-semibold italic">licence en informatique</span> à l'
                        <a
                            href="https://www.usms.ac.ma/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 underline"
                        >
                            Université Sultan Moulay Slimane
                        </a>
                        , j'ai entamé un master en <strong>Informatique Décisionnelle</strong>, explorant des domaines tels que le{" "}
                        <span className="text-green-700 font-medium">Big Data</span>, le{" "}
                        <span className="text-green-700 font-medium">Deep Learning</span> et le{" "}
                        <span className="text-green-700 font-medium">Cloud Computing</span>. Mon projet actuel
                        se concentre sur le traitement d’images médicales, une mission qui allie innovation et impact
                        sociétal.
                    </p>
                </section>

                {/* Storytelling - Hobbies */}
                <section className="shadow-lg rounded-lg p-6 mb-8 border-t-4 border-green-600">
                    <h3 className="text-2xl font-bold  mb-4"> Ce qui m’inspire</h3>
                    <p className=" leading-relaxed">
                        Au-delà des lignes de code, je trouve mon équilibre dans le sport, particulièrement le
                        football, où je cultive l’esprit d’équipe et la stratégie. La musique est une autre source
                        d’énergie qui me permet de garder la créativité intacte. Curieux de nature, je me forme
                        constamment en explorant de nouvelles technologies et en assistant à des conférences.
                        Chaque jour, je me pose une question : <em>“Comment puis-je faire mieux ?”</em> Cette quête
                        d’amélioration continue est mon moteur.
                    </p>
                </section>
                
            </div>
        </div>
    );
};

export default About;
