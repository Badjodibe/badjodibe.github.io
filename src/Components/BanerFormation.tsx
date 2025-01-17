import React from "react";

const TrainingBanner: React.FC = () => {
  return (
    <section className="py-16 dark:bg-zinc-800 px-6 flex flex-col md:flex-row items-center justify-between bg-slate-200">
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold text-green-600 leading-tight">
          Formez-vous dès aujourd'hui pour bâtir votre avenir
        </h1>
        <p className="mt-4 text-lg ">
          Accédez à des formations numériques d'excellence, conçues pour renforcer vos compétences et garantir votre réussite dans le monde professionnel.
        </p>
      </div>

      {/* Right Content */}
      <div className="mt-8 object-cover md:mt-0">
        <img
          src="./formation.jpg"
          alt="Étudiant heureux en formation"
          className="max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default TrainingBanner;
