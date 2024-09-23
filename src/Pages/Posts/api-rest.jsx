import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";

const book = `
\`\`\`java
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
    private String isbn;

    
}
\`\`\`
`
const book_repo =  `
\`\`\`java
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
\`\`\`
`

const rest_controller = `
\`\`\`java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book not found"));
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        book.setIsbn(updatedBook.getIsbn());
        return bookRepository.save(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        bookRepository.delete(book);
    }
}
\`\`\`
`
export default function APIREST(){
    useEffect(() => {
        hljs.highlightAll();
      }, []);
  
    return(
        <>
            <div className="postMeta">
                <div className="postDate">Publier le 2 Août 2024</div>
                <h1>Introduction aux API REST avec Spring Boot</h1>
                <div >
                    <img src="../../../public/default.jpg" alt="" className="postImage"/>
                </div>
            </div>
            
            <div className="postContent">
                <h3>Introduction</h3>
                <p>
                    Les API (Interfaces de Programmation d'Applications) jouent un rôle crucial dans 
                    le développement de logiciels modernes. Elles permettent à différentes applications de 
                    communiquer entre elles, facilitant l'échange de données et la création de systèmes 
                    intégrés. Dans cet article, nous allons explorer les concepts clés des API REST et vous 
                    montrer comment créer une application simple en utilisant Spring Boot, un framework Java
                    populaire.
                </p>
                <h4>Qu'est-ce qu'une API REST ?</h4>
                <p>
                    REST (Representational State Transfer) est une architecture qui définit un ensemble de 
                    contraintes permettant de créer des services web évolutifs. Une API RESTful est une API
                    qui adhère aux principes REST, facilitant la communication entre le client et le serveur
                    via des requêtes HTTP.
                </p>

                <h4>Principes clés des API REST</h4>
                <p>
                    <ul>
                        <li>
                            <h5>Stateless</h5>
                            <p>
                                Chaque requête du client au serveur doit contenir toutes les informations 
                                nécessaires à l'exécution de la demande. Le serveur ne stocke pas l'état de 
                                la session entre les requêtes.
                            </p>
                        </li>
                        <li>
                            <h5>Utilisation des méthodes HTTP</h5>
                            <p>
                                Les API REST utilisent les méthodes HTTP standards (GET, POST, PUT, DELETE) 
                                pour effectuer des opérations CRUD (Create, Read, Update, Delete).
                            </p>
                        </li>
                        <li>
                            <h5>URI (Uniform Resource Identifier)</h5>
                            <p>
                                Les ressources sont identifiées par des URI, permettant un accès simple et intuitif.
                            </p>
                        </li>
                        <li>
                            <h5>Format de réponse</h5>
                            <p>
                                Les données échangées sont généralement au format JSON ou XML, avec JSON étant le format le plus courant.
                            </p>
                        </li>
                    </ul>
                </p>
                <h4>Création d'une API REST avec Spring Boot</h4>
                <p>
                    <ol>
                        <li>
                            <h5>Configuration du projet</h5>
                            Pour commencer, créez un nouveau projet Spring Boot en utilisant Spring Initializr <a href="https://start.spring.io/"></a>. 
                            Choisissez les dépendances suivantes :
                            <ul>
                                <li>Spring Web (pour les fonctionnalités web)</li>
                                <li>Spring Data JPA (pour l'intégration avec la base de données)</li>
                                <li>MySQL Database (pour une base de données en mémoire)</li>
                            </ul>
                        </li>
                        <li>
                            <h5>Définir le modèle de données</h5>
                            <p>
                                Supposons que nous construisons une API pour gérer une collection de livres.
                                 Nous commençons par définir une entité  <strong>Book</strong>:
                            </p>
                            
                            <div id="code" dangerouslySetInnerHTML={{ __html: marked(book) }}></div>
                        </li>
                        <li>
                            <h5>Créer le Repository</h5>
                            <p>
                             Le repository gère les opérations CRUD sur l'entité <strong>Book</strong>. Spring Data JPA simplifie cela avec des interfaces
                            </p>
                            <div id="code" dangerouslySetInnerHTML={{ __html: marked(book_repo) }}></div>
                        </li>
                        <li>
                            <h5>Développer le contrôleur REST</h5>
                            <p>
                                Le contrôleur gère les requêtes HTTP entrantes et renvoie les réponses 
                                appropriées. Nous utilisons <strong>@RestController</strong> 
                                pour marquer la classe comme un contrôleur REST et 
                                <strong>@RequestMapping</strong> pour définir les routes.
                            </p>
                            <div id="code" dangerouslySetInnerHTML={{ __html: marked(rest_controller) }}></div>
                        </li>
                        <li>
                            <h5>Exécuter l'application</h5>
                            <p>
                                Avec la configuration et le code en place, vous pouvez lancer l'application
                                 Spring Boot. Spring Boot configure automatiquement un serveur Tomcat intégré
                                 , et l'application sera disponible sur <strong>http://localhost:8080</strong>.
                            </p>
                        </li>
                        <li>
                            <h5>Tester l'API</h5>
                            <p>
                                Vous pouvez utiliser des outils comme Postman ou cURL pour tester les 
                                endpoints de l'API. Essayez de créer, lire, mettre à jour et supprimer des 
                                livres via les différentes routes HTTP.
                            </p>
                        </li>
                    </ol>
                </p>
                <h4>Conclusion</h4>
                <p>
                    Spring Boot est un outil puissant pour développer des API REST robustes et évolutives.
                    Avec sa configuration simplifiée et ses fonctionnalités intégrées, vous pouvez rapidement
                    mettre en place des services web qui répondent aux besoins des applications modernes.
                    En suivant cet article, vous avez créé une API REST basique, mais fonctionnelle, 
                    pour gérer des livres. Vous pouvez maintenant étendre ce projet pour inclure des 
                    fonctionnalités supplémentaires, comme la gestion des utilisateurs, l'authentification,
                    et plus encore.
                </p>
            </div>
        </>
    );
}