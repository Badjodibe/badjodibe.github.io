import React from 'react';

const ArticleCard = ({ image, title, description, url }) => {
  const openInNewTab = () => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

  return (
    <div class="max-w-sm rounded  overflow-hidden shadow-lg m-4 cursor-pointer" onClick={openInNewTab}>
      {/* Image cliquable */}
      <img class="w-full h-48 object-cover" src={image} alt={title} />
      {/* Titre et description cliquables */}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center">{title}</div>
        <p class="text-gray-700 text-base text-center dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;

