import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";

const modulo = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        int c = a % b;
        System.out.println(c);
    }
}
\`\`\`
`

const incrementation = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int a = 5;
        a *= 2;
        System.out.println(a);
    }
}
\`\`\`
`
const condition_boolean = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        int c = (a > b) ? a : b;
        System.out.println(c);
    }
}
\`\`\`
`

const comparators = `
\`\`\`Java
public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        boolean c = (a > b) && (b > 0);
        System.out.println(c);
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
                <h2></h2>
                <div>

                </div>
                <div>
                    <div>
                        <h3> 
                            Quelle est la valeur de <span>`c` </span>après l'exécution du code suivant ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(modulo) }}></div>
                        <div>
                            <ol>
                                
                                <li> 2 </li>
                                <li>1</li>
                                <li> 0 </li>
                                <li>3 </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                            Quelle est la valeur de <span>`a`</span>  après l'exécution du code suivant ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(incrementation) }}></div>
                        <div>
                            <ol>
                                <li>10</li>
                                <li>5</li>
                                <li> 2</li>
                                <li>25</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                        Quelle est la valeur de <span>`c`</span>  après l'exécution du code suivant ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(condition_boolean)}}></div>
                        <div>
                            <ol>
                                <li> 5</li>
                                <li>3</li>
                                <li>true</li>
                                <li>false</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> 
                            Quelle sera la sortie du code suivant ?
                        </h3>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(comparators) }}></div>
                        <div>
                            <ol>
                                
                                <li> true</li>
                                <li>false</li>
                                <li>1</li>
                                <li>0</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}