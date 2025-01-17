import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = () => {
  // Exemple de données d'articles
  const articles = [
    {
      image: '/deep learning.jpg',
      title: "Qu'est ce que le Deep Learning",
      description: "Le Deep Learning, une branche de l'apprentissage automatique, s'inspire du fonctionnement des réseaux de neurones humains pour résoudre des problèmes complexes. Cet article explore l'apprentissage profond ainsi que ses applications dans divers domaines.",
      url: '#/posts/developers/what-is-deep-learning'
    },
    {
      image: '/data.jpg',
      title: "Importance des données",
      description: "Les données occupent une place très importante dans notre société. Qu'est ce que les données et en quoi sont ils si importantes. Ce article présente les atouts de l'analyse de données.",
      url: "#/posts/company/data-for-business"
    },
    {
      image: 'https://via.placeholder.com/400',
      title: "Mise en place d'un cluster de Hadoop",
      description: "Hadoop est un système de traitement de données distribué très utilisé dans les entreprises, c'est une solution aux problèmes rencontrés par les Systèmes de gestion de base de données habituel. Cet article est un guide pour mettre en place un cluster de hadoop.",
      url: "#/posts/developers/setup-hadoop-cluster-on-aws"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-8">
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

export default ArticleList;
