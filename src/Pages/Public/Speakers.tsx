import React from "react";

type SpeakerProps = {
  image: string;
  name: string;
  description: string;
  linkedin: string;
};

const SpeakerCard: React.FC<SpeakerProps> = ({ image, name, description, linkedin }) => {
  return (
    <div className="text-center bg-gray-800 rounded-lg p-6 w-full max-w-sm">
      {/* Image */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Nom */}
      <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {/* Lien LinkedIn */}
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 mx-auto bg-gray-700 rounded-full hover:bg-blue-500 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="text-white w-6 h-6"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.5 11.5h-3v-5c0-1.378-1.121-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5h-3v-10h3v1.255c.875-.813 2.071-1.255 3.5-1.255 2.481 0 4.5 2.019 4.5 4.5v5z" />
        </svg>
      </a>
    </div>
  );
};



const SpeakerSection: React.FC = () => {
  // Liste des intervenants
  const speakers = [
    {
      image: "/images/speaker1.png", // Remplacez par vos chemins d'image
      name: "Ajoutez un sous-en-tête ici",
      description:
        "Il y a juste assez d'espace ici pour quelques lignes de texte. Utilisez-le bien.",
      linkedin: "https://www.linkedin.com/in/example1",
    },
    {
      image: "/images/speaker2.png",
      name: "Ajoutez un sous-en-tête ici",
      description:
        "Il y a juste assez d'espace ici pour quelques lignes de texte. Utilisez-le bien.",
      linkedin: "https://www.linkedin.com/in/example2",
    },
    {
      image: "/images/speaker3.png",
      name: "Ajoutez un sous-en-tête ici",
      description:
        "Il y a juste assez d'espace ici pour quelques lignes de texte. Utilisez-le bien.",
      linkedin: "https://www.linkedin.com/in/example3",
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-6">
      <h2 className="text-center text-white text-3xl font-bold mb-12">
        Intervenants
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            image={speaker.image}
            name={speaker.name}
            description={speaker.description}
            linkedin={speaker.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakerSection;

