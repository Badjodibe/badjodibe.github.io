import React from "react";
import ArticleList from "./ArticleList";

const Welcome = () => {
    return (
        <div className=" dark:bg-zinc-800 bg-gray-300">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16  m-5 rounded-lg shadow-lg">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold mb-4">
                        Bienvenue dans mon univers !
                    </h1>
                    <p className="text-lg mb-6">
                        Je suis <strong>BADJO Dibéa Koffi</strong>, ingénieur logiciel et passionné par 
                        l'innovation. Mon objectif : créer des solutions technologiques qui ont un impact 
                        réel. Explorez mon travail et laissez-vous inspirer !
                    </p>
                    <a
                        href="#/about"
                        className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-md shadow-md hover:bg-gray-100"
                    >
                        En savoir plus sur moi
                    </a>
                </div>
                <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                    <img
                        src="/profile.jpeg"
                        alt="BADJO Dibéa Koffi"
                        className="rounded-lg shadow-md w-60 md:w-80"
                    />
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-white dark:bg-zinc-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-6xl text-left font-bold text-gray-800 dark:text-white mb-8">
                         Mes Compétences
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 dark:bg-zinc-600 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-green-600 mb-2">
                                Développement Logiciel
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Expertise en développement frontend et backend, avec des technologies 
                                modernes comme React, Spring boot et Java.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-zinc-600 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-green-600 mb-2">
                                Analyse de Données
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Maîtrise des outils de Big Data et des algorithmes pour analyser et 
                                interpréter des ensembles de données complexes.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-zinc-600 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-green-600 mb-2">
                                Intelligence Artificielle
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Création de solutions basées sur le Machine Learning et le Deep Learning 
                                pour des cas d'usage variés.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Projects Section 
                <section className="py-16 bg-gray-50 dark:bg-zinc-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                         Projets Réalisés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-zinc-600 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-green-600 mb-2">
                                Plateforme d'analyse financière
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Développement d'une plateforme utilisant l'IA pour analyser les marchés 
                                financiers et prendre des décisions d'investissement.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-600 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-green-600 mb-2">
                                Système de gestion d'inventaire
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Conception d'un système permettant de gérer efficacement les stocks 
                                et les inventaires pour les entreprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            */}
            

            {/* Article Section */}
            <div className="container mx-auto px-4">
                <ArticleList />
            </div>
        </div>
    );
};

export default Welcome;
