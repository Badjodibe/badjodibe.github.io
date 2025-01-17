import React from 'react';
import ArticleCard from './ArticleCard';

const DevelopersPosts = () => {
  // Exemple de données d'articles
  const articles = [
    {
      image: '/deep learning.jpg',
      title: "Qu'est ce que le Deep Learning",
      description: "Le Deep Learning, une branche de l'apprentissage automatique, s'inspire du fonctionnement des réseaux de neurones humains pour résoudre des problèmes complexes. Cet article explore l'apprentissage profond ainsi que ses applications dans divers domaines.",
      url: '#/posts/developers/what-is-deep-learning'
    },
    {
      image: '/default.jpg',
      title: "Mise en place d'un cluster de Hadoop",
      description: "Hadoop est un système de traitement de données distribué très utilisé dans les entreprises, c'est une solution aux problèmes rencontrés par les Systèmes de gestion de base de données habituel. Cet article est un guide pour mettre en place un cluster de hadoop.",
      url: "#/posts/developers/setup-hadoop-cluster-on-aws"
    },
    {
        image: '/default.jpg',
        title: "Fondements de Spring data jpa",
        description: "Spring data est un écosystèmes facilitant l'accès, l'interaction avec les base de données sur le framework spring boot. Il permet d'accédé á de base de données",
        url: "#/posts/developers/spring-data-jpa"
      },
    {
      image: '/default.jpg',
      title: "Introduction aux API Rest",
      description: "Les API (Interfaces de Programmation d'Applications) jouent un rôle crucial dans le développement de logiciels modernes.",
      url: "#/posts/developers/api-rest"
    },
    {
      image: '/deep learning.jpg',
      title: "Introduction au Feature Engineering",
      description: "Le feature engineering est une étape cruciale dans le développement de modèles d'IA. Il consiste à créer, sélectionner, et transformer les caractéristiques",
      url: '#/posts/developers/feature-engenering'
    },
    {
      image: '/default.jpg',
      title: "Sécuriser une application spring boot avec JWT",
      description: "La sécurité est un aspect crucial de toutes application, une application non sécurisé ou vulnérables est exposés à des attaques. Ces attaque peuvent ce présenté sous différent formé comme la prise de controller d'un compte utilisateur",
      url: '#/posts/developers/spring-boot-jwt-security'
    },
    {
      image: '/default.jpg',
      title: "L'algorithme des K plus proche voisin",
      description: "L'algorithme des k plus proche voisin ou k nearest neighbor est l'un des algorithmes d'apprentissages les plus simple á comprendre et á implémenter. C'est l'un des plus vieux algorithme d'apprentissage.",
      url: '#/posts/developers/algorithme-des-k-plus-proche-voisin'
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

export default DevelopersPosts;
