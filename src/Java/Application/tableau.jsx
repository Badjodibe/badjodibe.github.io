import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";

const sans_condition = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (;;) {
            count++;
            if (count == 100) {
                break;
            }
        }
        System.out.println(count);
    }
}
\`\`\`
`

const filtre = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                System.out.print(i + " ");
            }
        }
    }
}
\`\`\`
`
const somme = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        System.out.println(sum);
    }
}
\`\`\`
`

const while_continue = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            i++;
            if (i % 2 == 0) {
                continue;
            }
            System.out.print(i + " ");
        }
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
                <h2>Que fait le code suivant en utilisant <span>`continue`</span>  dans une boucle <span>`while`</span> ?</h2>
                <div>

                </div>
                <div>
                    <div>
                        <h3> 
                            Considérez le code suivant en Java :
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(while_continue) }}></div>
                        <div>
                            <ol>
                                <h4>Que fait ce code ?</h4> 
                                <li> Affiche <span>`1 2 3 4 5`</span> </li>
                                <li>Affiche les nombres pairs entre 1 et 5 </li>
                                <li> Affiche les nombres impairs entre 1 et 5  </li>
                                <li>Affiche <span> `1 3 5` </span> </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                        Quel sera le résultat du code suivant utilisant une boucle infinie ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(sans_condition) }}></div>
                        <div>
                            <ol>
                                <li>  Le programme boucle infiniment </li>
                                <li> Affiche <span>`0 1 2 3 4`</span> </li>
                                <li> Affiche <span>`1 2 3 4 5`</span></li>
                                <li>Affiche <span>`5 4 3 2 1`</span> </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                            Quelle est la sortie du code suivant qui utilise des boucles pour afficher les multiples de 3 et 5 ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(filtre) }}></div>
                        <div>
                            <ol>
                                <li> <span>`3 5 6 9 10 12 15 18 20`</span></li>
                                <li><span>`3 5 9 10 15 18`</span></li>
                                <li> <span>`1 2 3 4 5 6 7 8 9 10`  </span></li>
                                <li><span>`5 10 15 20`</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                        Que fait le code suivant en utilisant une boucle <span>`for-each`</span> pour parcourir un tableau ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(somme) }}></div>
                        <div>
                            <ol>
                                
                                <li> Calcule la somme de tous les éléments du tableau  </li>
                                <li>Multiplie tous les éléments du tableau  </li>
                                <li>Retourne la somme des indices du tableau</li>
                                <li>Affiche la longueur du tableau</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}