import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";

const compte_voyelle = `
\`\`\`Java
public class CountVowels {
       
       public static int countVowels(String s) {
           int count = 0;
           String vowels = "aeiouAEIOU";
           for (int i = 0; i < s.length(); i++) {
               if (vowels.contains(String.valueOf(s.charAt(i)))) {
                   count++;
               }
           }
           return count;
       }
       
       public static void main(String[] args) {
           String input = "Bonjour le monde";
           int result = countVowels(input);
           System.out.println("Le nombre de voyelles dans la chaîne est : " + result);
       }
   }
\`\`\`
`

const reverse = `
\`\`\`Java
public class ReverseString {
       
       public static String reverseString(String s) {
           return new StringBuilder(s).reverse().toString();
       }
       
       public static void main(String[] args) {
           String input = "Hello world";
           String result = reverseString(input);
           System.out.println("La chaîne inversée est : " + result);
       }
   }
\`\`\`
`
const split = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        String sentence = "Java is fun";
        String[] words = sentence.split(" ");
        for (String word : words) {
            System.out.print(word + "-");
        }
    }
}
\`\`\`
`

const chat_at = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        String input = "abracadabra";
        String result = "";
        for (int i = 0; i < input.length(); i++) {
            if (i % 2 == 0) {
                result += input.charAt(i);
            }
        }
        System.out.println(result);
    }
}
\`\`\`
`
export default function PracticeChaine(){
    useEffect(() => {
        hljs.highlightAll();
      }, []);

    return(
        <>
            <div>
                <h2>Chaine de caractères</h2>
                <div>

                </div>
                <div>
                    <div>
                        <h3> 
                            Considérez le code suivant en Java :
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(compte_voyelle) }}></div>
                        <div>
                            <ol>
                                <h4>Que fait ce code ?</h4> 
                                <li> Compte le nombre de caractères dans la chaîne</li>
                                <li>Compte le nombre de voyelles dans la chaîne</li>
                                <li> Supprime toutes les voyelles de la chaîne</li>
                                <li>Convertit toutes les voyelles en majuscules dans la chaîne</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                            Considérez le code suivant en Java :
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(reverse) }}></div>
                        <div>
                            <ol>
                                <h4>Que fait ce code ?</h4> 
                                <li> Trie la chaîne de caractères par ordre alphabétique</li>
                                <li>Supprime tous les espaces de la chaîne de caractères</li>
                                <li> Inverse la chaîne de caractères</li>
                                <li>Convertit tous les caractères en majuscules dans la chaîne</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                            Quelle est la sortie du code utilisant une boucle <span>for-each</span> et la méthode <span>split()</span>  ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(split) }}></div>
                        <div>
                            <ol>
                                <h4>Que fait ce code ?</h4> 
                                <li> Java-is-fun-</li>
                                <li>Java is fun</li>
                                <li> Java-is-fun</li>
                                <li>Javaisfun</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                        Quel sera le résultat de l'exécution de ce code manipulant les <span>StringBuilder</span>?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(chat_at) }}></div>
                        <div>
                            <ol>
                                <h4>Que fait ce code ?</h4> 
                                <li> Affiche tous les caractères aux positions impaires</li>
                                <li>Affiche tous les caractères aux positions paires </li>
                                <li>Affiche tous les caractères en majuscules</li>
                                <li>Supprime tous les caractères répétés</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}