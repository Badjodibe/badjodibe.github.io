import React from 'react';
import ArticleCard from './ArticleCard';

const EntrepriesPosts = () => {
  // Exemple de données d'articles
  const articles = [
    {
      image: '/data.jpg',
      title: "Importance des données",
      description: "Les données occupent une place très importante dans notre société. Qu'est ce que les données et en quoi sont ils si importantes. Ce article présente les atouts de l'analyse de données.",
      url: "#/posts/company/data-for-business"
    },
   
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          image={article.image}
          title={article.title}
          description={article.description}
          url={article.url}
        />
      ))}
    </div>
  );
};

export default EntrepriesPosts;
