import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";


const importation =`
\`\`\`python
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
\`\`\`
`
const construct = `
\`\`\`python
eurud = eurusd.drop(["Unnamed: 0"], axis=1) # Quelque anomalie corrigé
    X_full, close= eurusd[["open", "high", "low", "close", "rsi", "on_balance_volume", "std", "ema_max", "adx"]], eurusd["close_shift"] # rècuperation des caractéristiques et des cibles
    def prepare_data(X_, y_Sl, y_Tp, n_steps):
        X, y = [], [],
        for i in range(len(X_) - n_steps):
            X.append(X_.iloc[i:i+n_steps, :])
            y.append(close.iloc[i+n_steps])
        return np.array(X), np.array(y)
    X, y = prepare_data(X_full, close, 24) # Ici j'ai choisie un pas de dépendance de  24
\`\`\`
`
const split = `
\`\`\`python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
\`\`\`
`
const setup = `
\`\`\`python
n_steps = 24
model = tf.keras.Sequential([
tf.keras.layers.LSTM(units=3,return_sequences=True, activation='relu', input_shape=(n_steps, 9)),
tf.keras.layers.LSTM(units=3, return_sequences=False),
tf.keras.layers.Dense(units=1)
\`\`\`
`
const compile = `
\`\`\`python
model.compile(optimizer='adam', loss='mse')
    model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2)
\`\`\`
`
const test = `
\`\`\`python
predict = model.predict(X_test)
mean_squared_error(y_test, predict)
\`\`\`
`

export default function Lstm() {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return(
        <>
           <div className="postMeta">
                <div className="postDate">Publier le </div>
                <h1>LSTM application prédiction du prix d'instrument financier</h1> 
                <div className="postImage">
                    <img src="../../../neural network.jpg" alt=""/>
                </div>
            </div>
            <div className="postContent">
                <div>
                    <h3>Introduction</h3>
                    <p>
                        Le deep learning, ou apprentissage profond, est une catégorie 
                        de l'apprentissage automatique qui utilise des éléments appelés neurones pour résoudre 
                        des tâches complexes. Son principe de fonctionnement est basé sur le traitement de 
                        l'information par le cerveau humain, où l'information passe à travers des neurones 
                        pour produire le résultat final. Les modèles de deep learning ont du succès dans 
                        divers secteurs en raison de leur capacité à résoudre des problèmes pour lesquels 
                        les algorithmes de machine learning classiques sont inefficaces. Que ce soit dans 
                        le e-commerce, la finance, la médecine et bien d'autres domaines.
                        Dans cet article, je vais vous présenter le LSTM, un modèle de deep learning, ainsi 
                        qu'une application. À la fin de cet article, vous comprendrez le LSTM et comment il 
                        peut être utilisé pour prédire le prix des instruments financiers.
                    </p>
                    <h4>Les réseaux de neuronne</h4>
                    <p>
                        Avant de vous présenter le LSTM, clarifions les réseaux de neurones. Pour simplifier, 
                        je vais vous présenter un réseau à une seule couche. Sur la figure 1, nous voyons un 
                        réseau de neurones à une seule couche où les informations d'entrée (appelées la couche 
                        d'entrée) sont les 
                        sur lesquels une opération linéaire est effectuée. Le résultat de cette combinaison 
                        linéaire est une entrée pour une fonction appelée la fonction d'activation au niveau 
                        de la première couche. Cette même opération est effectuée en considérant la première 
                        couche comme la couche de sortie pour produire le résultat final, comme le montre bien 
                        la figure 1. Pour un réseau de neurones à plusieurs couches, il suffit d'ajouter des 
                        couches au niveau de la couche cachée. Malgré leur puissance, il est facile de remarquer 
                        que ces réseaux ne tiennent pas compte des dépendances temporelles de l'information.
                        Par exemple, le prix d'un instrument financier aujourd'hui dépendra du prix d'hier, 
                        ou encore la température d'aujourd'hui dépendra de celle d'hier.
                        Pour faire face à ce problème, une autre catégorie de réseaux de neurones a été développée
                        : les réseaux de neurones récurrents. Ces modèles sont mieux adaptés pour les problèmes
                        ayant une dépendance temporelle. Dans cette catégorie, il existe plusieurs modèles, 
                        notamment les Réseaux de Neurones Récurrents Standards, les Gated Recurrent Unit, et 
                        les Réseaux de Neurones Récurrents Bidirectionnels. Le LSTM (Long Short-Term Memory) est 
                        un modèle de réseau de neurones récurrent très utilisé. Dans la suite, nous allons utiliser
                        le LSTM pour prédire le prix d'un instrument financier.
                    </p>
                    <div>
                        <p>Et sur le 2</p>
                        <div><img src= "/images/IA/reseau de neuronne.png" alt="alt" height = "50" /></div>
                    </div>
                    <h4>L'architecure des LSTM</h4>
                    <p>
                        Les LSTM (Long Short-Term Memory) sont un type de réseaux de neurones récurrents conçu 
                        spécifiquement pour résoudre les problèmes ayant une forte dépendance temporelle.
                        Dans chaque cellule des neurones LSTM, il y a des composants spécifiques qui permettent 
                        de gérer ces dépendances. Les principaux composants sont :
                        <br/>
                        Cellule mémoire : La cellule mémoire est responsable de gérer les dépendances temporelles 
                        en décidant quelles informations doivent être transmises à la couche suivante, oubliées 
                        ou conservées. Elle agit comme un régulateur d'information.
                        Porte d'entrée : Cette porte décide quelles informations doivent être stockées dans la 
                        cellule mémoire à partir des nouvelles entrées.
                        Porte d'oubli : Cette porte détermine quelles parties des informations stockées dans la 
                        cellule mémoire doivent être oubliées ou mises à jour.
                        Porte de sortie : Cette porte est utilisée pour déterminer quelles informations de la 
                        cellule mémoire doivent être transmises à la couche suivante dans le réseau.
                        En combinant ces composants, les LSTM sont capables de capturer et de traiter efficacement 
                        les dépendances temporelles dans les séquences de données, ce qui les rend 
                        particulièrement adaptés à la modélisation de séries temporelles et à la prédiction 
                        de valeurs futures, comme dans le cas de la prédiction du prix d'un instrument financier.
                    </p>
                    <h4>Application des LSTM</h4>
                    <p>
                        Les LSTM ont de nombreuses applications, voici quelques exemples :

                        Traitement du langage naturel (NLP) : Les LSTM sont très efficaces pour des tâches de 
                        traitement du langage naturel telles que la classification de texte, la génération de 
                        texte, la traduction automatique, la compréhension de texte, la génération de légendes 
                        pour les images, etc.
                        Vision par ordinateur : Les LSTM peuvent être appliqués à des tâches de vision par 
                        ordinateur telles que la reconnaissance d'objets, la détection d'objets, la segmentation 
                        sémantique.
                        Séries temporelles : Les LSTM sont adaptés à la modélisation et à la prédiction des séries
                        temporelles, telles que les prévisions météorologiques, la prédiction des ventes, 
                        la surveillance de la santé, la détection d'anomalies, etc.
                        Finance : Les LSTM sont utilisés pour la prévision des prix des actions, la détection de
                        fraude, la modélisation des risques, etc.
                    </p>
                    <h3>
                        Application du LSTM : prédiction du prix d'un instrument 
                    financier (EUR/USD)
                    </h3>
                    <p>
                        Dans cette partie, nous allons prédire le prix de l'instrument financier EUR/USD.
                        Les données utilisées ont été téléchargées depuis la plateforme de MetaTrader à l'aide 
                        du langage MQL5. Dans une première phase, elles ont été prétraitées en créant de nouvelles
                        variables. Nous ne verrons pas la partie du téléchargement et du prétraitement des données,
                        mais nous passerons directement à la construction du modèle.
                        
                        <br />
                        TensorFlow est la bibliothèque dans laquelle se trouve le modèle, pandas et
                        numpy sont utilisés pour le traitement et la construction du jeu de données.
                        J'utilise également la fonction train_test_split de Scikit-learn pour diviser mes données 
                        en données d'apprentissage et de test.
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: marked(importation) }}></div>
                    <p>
                        Dans une première partie, nous allons construire les caractéristiques et la cible.
                        Les caractéristiques qui seront incluses dans le modèle sont : le prix d'ouverture,
                        le prix de clôture, le plus haut, le plus bas, ainsi que trois autres indicateurs
                        techniques : le RSI, le volume de transactions cumulé et l'écart type, ainsi que 
                        la moyenne mobile exponentielle. Nous utiliserons une fenêtre de 24 pas dans le 
                        passé, ce qui signifie que le modèle doit prendre en compte les 24 prix précédents.
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: marked(construct) }}></div>
                    <p>
                        Une fois les caractéristiques et la cible construites, nous allons maintenant 
                        diviser nos données en données d'apprentissage et de test en utilisant la 
                        fonction train_test_split de sklearn. J'ai choisi d'allouer 30 % des données 
                        pour les données de test et 70 % pour les données d'apprentissage.
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: marked(split) }}></div>
                    <p>
                    a mise en place du réseau est fait avec deux couches en utilisant la methode séquentielle
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: marked(setup) }}></div>
                    <p>
                        A présent nous allons tester le modèle et mésuré l'erreur
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: marked(test) }}></div>
                    <h3>
                    Conclusion
                    </h3>
                    <p>
                        Le LSTM est un modèle de réseau de neurones, plus précisément un type de réseau 
                        de neurones récurrents, qui conserve les informations à long terme. Il utilise 
                        différents composants pour y parvenir, tels que la cellule mémoire qui régule les 
                        informations à conserver, la porte d'entrée qui détermine les informations à stocker 
                        dans la cellule, la porte d'oubli qui gère les informations à oublier, et la porte de 
                        sortie qui transmet les informations au neurone suivant. Les LSTM sont utilisés pour 
                        réaliser différentes tâches telles que la prédiction des séries temporelles,
                        la traduction automatique, etc.
                    </p>
                </div>
            </div>
        </>
    )
}
