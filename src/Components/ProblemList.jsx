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
            title : "Rotation de Matrice",
            difficulty : "Intermédiaire",
            domain : "Mathematique",
            url : "#/ressources/problems/rotation-de-matrice"
        },
        {
            title : "Plus grand sous tableaux",
            difficulty : "Intermédiaire",
            domain : "Structure de données",
            url : "#/ressources/problems/plus-grand-sous-tableau"
        },
        {
            title : "Transposition de matrix",
            difficulty : "Intermédiaire",
            domain : "Mathematique",
            url : "#/ressources/problems/transposition-matrice"
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
            title : "Somme de deux matrices",
            difficulty : "Intermédiaire",
            domain : "Mathematique, Structure de données",
            url : "#/ressources/problems/matrice-somme"
        },
        {
            title : "Hadmard",
            difficulty : "Intermédiaire",
            domain : "Structure de données",
            url : "#/ressources/problems/hadmard"
        },
        {
            title : "Problème de tri par sélection",
            difficulty : "Intermédiaire",
            domain : "Structure de données",
            url : "#/ressources/problems/trie-par-selection"
        },
        {
            title : "Chiffrement de César",
            difficulty : "Intermédiaire",
            domain : "cryptographie",
            url : "#/ressources/problems/chiffrement-de-cesar"
        },
        {
            title : "Algorithme de k-plus proche voisin",
            difficulty : "Intermédiaire",
            domain : "Machine Learning, IA",
            url : "#/ressources/problems/kpp-algorithme"
        },
        {
            title : "Permutation de chaine",
            difficulty : "Intermédiaire",
            domain : "Traitement de text",
            url : "#/ressources/problems/permutation-de-chaine"
        },
        {
            title : "Parenthese valid",
            difficulty : "Intermédiaire",
            domain : "Traitement de text",
            url : "#/ressources/problems/parenthese-valid"
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