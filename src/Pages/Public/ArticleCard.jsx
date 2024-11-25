import React from 'react';

const ArticleCard = ({ image, title, description, url }) => {
  const openInNewTab = () => {
    window.open(url, '_self');
  };

  return (
    <div className="max-w-sm rounded  overflow-hidden shadow-lg m-4 cursor-pointer  hover:border-blue-600 dark:bg-black border" onClick={openInNewTab}>
      {/* Image cliquable */}
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      {/* Titre et description cliquables */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;

