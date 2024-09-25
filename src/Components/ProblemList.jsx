import Problem from "./Problem"

export default function ProblemList(){
    const  problems = [
        {
            title : "Probleme de la somme des paires dans un tableau",
            difficulty : "Facile",
            domain : "Strucutre de données",
            url : "#/ressources/problems/probleme-de-la-somme-des-paires-dans-un-tableau"
        },
        {
            title : "Vérification d'anagrammes",
            difficulty : "Facile",
            domain : "NLP",
            url : "#/ressources/problems/anagramme"
        },
        {
            title : "Recherche de la première sous-chaîne non répétée",
            difficulty : "Facile",
            domain : "NLP",
            url : "#/ressources/problems/premier-caractere-non-repete"
        },
        {
            title : "Compression de chaine de caractères",
            difficulty : "Facile",
            domain : "Transmission de données",
            url : "#/ressources/problems/compression-de-chaine-de-caractere"
        },
        {
            title : "Inversion de chaque mot dans une phrase",
            difficulty : "Facile",
            domain : "NLP",
            url : "#/ressources/problems/inversion-de-mot"
        },
        {
            title : "Vérification de palindrome",
            difficulty : "Facile",
            domain : "NLP",
            url : "#/ressources/problems/palindrome"
        },
        {
            title : "Rotation de chaîne",
            difficulty : "Facile",
            domain : "NLP",
            url : "#/ressources/problems/rotation-de-chaine-de-caractere"
        },
        {
            title : "Suppression des doublons de caractères",
            difficulty : "Facile",
            domain : "NLP",
            url : "#/ressources/problems/suppression-de-doublons"
        },
        {
            title : "Problème de tri à bulles",
            difficulty : "Facile",
            domain : "Structure de données",
            url : "#/ressources/problems/trie-par-bulle"
        },
        {
            title : "Problème de tri par insertion",
            difficulty : "Intermédiaire",
            domain : "Structure de données",
            url : "#/ressources/problems/trie-par-insertion"
        },
        {
            title : "Problème de tri par sélection",
            difficulty : "Intermédiaire",
            domain : "Structure de données",
            url : "#/ressources/problems/trie-par-selection"
        },
    ];
    return(
       <div>
            {
                problems.map((problem, key) => (
                <Problem
                key={key}
                title={problem.title}
                difficulty={problem.difficulty}
                domain={problem.domain}
                url={problem.url}
                />
                ))
            }
       </div>
    )

}