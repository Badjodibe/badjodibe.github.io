import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";
const personne = `
\`\`\`java
package com.springdata.springdata;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Entity
public class Personne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String prenoms;
    private String type_permis;
    private int age;

    @OneToMany(mappedBy = "proprietaire", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Voiture> voitures;

    public Personne(Long id, String nom, String prenoms, String type_permis, int age, List<Voiture> voitures) {
        this.id = id;
        this.nom = nom;
        this.prenoms = prenoms;
        this.type_permis = type_permis;
        this.age = age;
        this.voitures = voitures;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenoms() {
        return prenoms;
    }

    public void setPrenoms(String prenoms) {
        this.prenoms = prenoms;
    }

    public String getType_permis() {
        return type_permis;
    }

    public void setType_permis(String type_permis) {
        this.type_permis = type_permis;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<Voiture> getVoitures() {
        return voitures;
    }

    public void setVoitures(List<Voiture> voitures) {
        this.voitures = voitures;
    }
}
\`\`\`
`
const voiture = `
\`\`\`java
package com.springdata.springdata;


import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

@Entity
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marque;
    private String model;
    private int year;

    @ManyToOne
    @JoinColumn(name = "personne_id")
    private Personne proprietaire;

    public Voiture(Long id, String marque, String model, int year, Personne proprietaire) {
        this.id = id;
        this.marque = marque;
        this.model = model;
        this.year = year;
        this.proprietaire = proprietaire;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Personne getProprietaire() {
        return proprietaire;
    }

    public void setProprietaire(Personne proprietaire) {
        this.proprietaire = proprietaire;
    }
}
\`\`\`
`
const voiturerepository = `
\`\`\`java

package com.springdata.springdata;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VoitureRepository extends CrudRepository<Voiture, Long> {
    @Query("SELECT v FROM Voiture v WHERE v.proprietaire.nom = :nom")
    List<Voiture> findVoituresByProprietaireNom(@Param("nom") String nom);

    @Query("SELECT v FROM Voiture v JOIN v.proprietaire p WHERE p.age > :age")
    List<Voiture> findVoituresByProprietaireAgeGreaterThan(@Param("age") int age);

    @Query("SELECT v FROM Voiture p WHERE v.year > :year")
    List<Personne> findByAgeGreaterThan(@Param("year") int year);

}
\`\`\`
`
const personnerepository = `
\`\`\`java

package com.springdata.springdata;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonneRepository extends CrudRepository<Personne, Long> {

    List<Personne> findByNomPrenonne(String nom, String prenoms);
    List<Personne> findByNomAndAge(String nom, int age);
    List<Personne> findByAgeGreaterThan(int age);
    List<Personne> findByNomOrderByAgeDesc(String nom);
    List<Personne> findByNom(String nom, SpringDataWebProperties.Sort sort);

}
\`\`\`
`
const personneservice = `
\`\`\`java
package com.springdata.springdata;

import org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class PersonneService {

    private final PersonneRepository personneRepository;
    @Autowired
    public PersonneService(PersonneRepository personneRepository) {
        this.personneRepository = personneRepository;
    }

    public List<Personne> findByNomOrPrenoms(String nom, String prenoms) {
        return personneRepository.findByNomOrPrenoms(nom, prenoms);
    }

    public List<Personne> findByNomAndAge(String nom, int age) {
        return personneRepository.findByNomAndAge(nom, age);
    }

    public List<Personne> findByAgeGreaterThan(int age) {
        return personneRepository.findByAgeGreaterThan(age);
    }

    public List<Personne> findByNomOrderByAgeDesc(String nom) {
        return personneRepository.findByNomOrderByAgeDesc(nom);
    }

    public List<Personne> findByNom(String nom, Sort sort) {
        return personneRepository.findByNom(nom, sort);
    }
    public Personne savePersonne(@RequestBody Personne personne) {

        return personneRepository.save(personne);
    }
}
\`\`\`
`
const voitureservice = `
\`\`\`java
package com.springdata.springdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoitureService {

    private final VoitureRepository voitureRepository;
    @Autowired
    public VoitureService(VoitureRepository voitureRepository) {
        this.voitureRepository = voitureRepository;
    }

    public List<Voiture> findVoituresByProprietaireNom(String nom) {
        return voitureRepository.findVoituresByProprietaireNom(nom);
    }

    public List<Voiture> findVoituresByProprietaireAgeGreaterThan(int age) {
        return voitureRepository.findVoituresByProprietaireAgeGreaterThan(age);
    }

    public List<Voiture> findByYearGreaterThan(int year) {
        return voitureRepository.findByAgeGreaterThan(year);
    }
    public Voiture saveVoiture(Voiture voiture) {
        return voitureRepository.save(voiture);
    }
}
\`\`\`
`

const voiturecontroller = `
\`\`\`java
package com.springdata.springdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/voitures")
public class VoitureController {

    private final VoitureService voitureService;

    @Autowired
    public VoitureController(VoitureService voitureService) {
        this.voitureService = voitureService;
    }

    @GetMapping("/proprietaireNom")
    public List<Voiture> getVoituresByProprietaireNom(@RequestParam String nom) {
        return voitureService.findVoituresByProprietaireNom(nom);
    }

    @GetMapping("/proprietaireAgeGreaterThan")
    public List<Voiture> getVoituresByProprietaireAgeGreaterThan(@RequestParam int age) {
        return voitureService.findVoituresByProprietaireAgeGreaterThan(age);
    }

    @GetMapping("/yearGreaterThan")
    public List<Voiture> getVoituresByYearGreaterThan(@RequestParam int year) {
        return voitureService.findByYearGreaterThan(year);
    }

    // Méthode pour ajouter une nouvelle voiture
    @PostMapping
    public Voiture saveVoiture(@RequestBody Voiture voiture) {
        return voitureService.saveVoiture(voiture);
    }
}
\`\`\`
`
const personnecontroller = `
\`\`\`java
package com.springdata.springdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/personnes")
public class PersonneController {

    private final PersonneService  personneService;

    @Autowired
    public PersonneController(PersonneService personneService) {
        this.personneService = personneService;
    }
    @PostMapping()
    public Personne save(@RequestBody Personne personne) {
        return personneService.savePersonne(personne);
    }

    @GetMapping("/nomPrenoms")
    public List<Personne> getPersonnesByNomPrenoms(@RequestParam String nom, @RequestParam String prenoms) {
        return personneService.findByNomOrPrenoms(nom, prenoms);
    }

    @GetMapping("/nomAndAge")
    public List<Personne> getPersonnesByNomAndAge(@RequestParam String nom, @RequestParam int age) {
        return personneService.findByNomAndAge(nom, age);
    }

    @GetMapping("/ageGreaterThan")
    public List<Personne> getPersonnesByAgeGreaterThan(@RequestParam int age) {
        return personneService.findByAgeGreaterThan(age);
    }

    @GetMapping("/nomOrderByAgeDesc")
    public List<Personne> getPersonnesByNomOrderByAgeDesc(@RequestParam String nom) {
        return personneService.findByNomOrderByAgeDesc(nom);
    }

    @GetMapping("/nomSorted")
    public List<Personne> getPersonnesByNomSorted(@RequestParam String nom, @RequestParam String sortField, @RequestParam String sortDirection) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortField);
        return personneService.findByNom(nom, sort);
    }
}
\`\`\`
`
export default function SpringDataJpa() {
    useEffect(() => {
        hljs.highlightAll();
      }, []);
  
    return(
        <>
        <div className="postMeta">
            <div className="postDate">Publier le 31 Juillet 2024</div>
            <h1>Fondements de Spring data jpa</h1>
            <div className="postImage">
                    <img src="/default.jpg" alt=""/>
                </div>
        </div>
       
        <div className="postContent">
                <div>
                <h5 className="postinfo">Qu'est ce que vous allez apprendre?</h5>
                <p>
                    Vous allez apprendre dans cette article comment gérer les données sous spring data jpa
                </p>
                <h5 className="postinfo">Qu'est ce que vous devez disposer?</h5>
                <ul>
                    <li>Une base en programmation java et en Spring boot</li>
                    <li>Un IDE : Eclipse, InteliJ, VsCode ou autre</li>
                    <li>Postman</li>
                </ul>
                <h5 className="postinfo">Pratiquez</h5>
                <p>
                    La meilleurs manière de tirer profit de ce projet est de pratiquer au fuir et 
                    á mesure que vous lisez, pour allez plus vite, j'ai mis á votre disposition
                    le code source de ce projet sur mon compte <a href="https://github.com/Badjodibe/springdata">en cliquant ici</a>.
                </p>
                <h3>Introduction</h3>
                <p>
                    Spring data est un écosystèmes facilitant l'accès, l'interaction avec les base 
                    de données sur le framework spring boot. Il permet d'accédé á de base de données 
                    de type différent que ça soit relationnelle ou non relationnelle.
                    Le projet spring data  regroupe plusieurs sous projet incluant spring data jpa, 
                    qui est une extension et amélioration de JPA (Java persistance API), 
                    il est conçu pour facilité l'interaction avec les bases de données relationnelle.
                    Dans cette article, nous allons parcourir les fondements de spring data jpa,
                    les conceptes, comment créer et interagir avec une base de données relationnelle.
                    Nous terminerons par faire projet en développant une application web.
                </p>
                <h5>Spring Data JPA</h5>
                <div>
                    <h5>Entity</h5>
                    <p>
                        Objet relationnal mapping (ORM) est une approche dans le développement de 
                        logiciel consistant á faire correspondre des objets á des tables d'une base 
                        de données afin de facilité la création et la manipulation des observations 
                        dans la base de données. Dans cette approche, les entités représentent une 
                        table de la base de données, comme les tables ces entitées peuvent avoir des 
                        relations avec d'autre entitées. Concrètement, une entité est un classe java 
                        annoté par une annotation Entity, ce qui permet á spring boot de le considéré
                        comme une table d'une base de données et de géré automatiquement sont cycle
                        de vie. Les champs dans cette classe font référence aux champs de la table 
                        correspondante dans la base de données.
                        L'interaction avec les observations ou leur création se fait á l'aide
                        repository (un entrepot)  
                    </p>
                    <h5>Repository</h5>
                    <p>
                        Les tables de la base de données étant géré par les entitées, comment 
                        interagir avec les tables de la base de données, le concept de Repository 
                        permet d'arrivé á cette fin. Ces derniers sont utilisé pour interagir avec 
                        la base de données en effectuant toutes les opérations classique sur les 
                        bases de données. Au lieu d'écrir les requêtes sql en utilisant la l'api jdbc
                        de java, les répositories représentes ces reequête sous forme de fonction 
                        simplifier, en adoptant un nommage qui génère automatiquement les réquêtes.
                        Quand un répository est créer, les fonctions crud de base sont sont générées 
                        automatiquement. Sans le récréer ils peuvent se faire appèle directement.
                        Les repositories sont des interfaces qui étendent la classe JPARepository ou
                        CrudRepository. Le dernier est une amélioration du premier. spring data 
                        jpa est très flexible il adoptique une manière simple et puissant pour écrire
                        requête personnalisé. Avant de voir les différentes manière d'écrire les 
                        requêtes personnalisé, voyons d'abord les methodes de bases qui sont mis á 
                        notre disposition.
                    </p>
                    <ul>
                        <li>
                            <h6>Requêtes de base</h6>
                            <p>
                                Lorsque vous créer un repository, un ensemble de methode sont 
                                prédéfinie, ils représantent  les opération  Crud 
                                (Créer, rechercher, supprimer, modifier) de base. Par exemple la 
                                fonctions save correspond á la requête demandant de stocker une 
                                observation dans la base de données. Spring boot est très puissant,
                                il donne la possibilité d'écrire les requêtes personnalisées soit en
                                utilisant les requêtes de methodes dérivées ou en écrivant les 
                                requêtes personnalisées á l'aide du langage JPQL 
                                (Java Persistance query langage)  
                            </p>
                        </li>
                        <li>
                            <h6>Requêtes dérivées de méthodes</h6>
                            <p>
                                Les methodes dérivées sont des méthode permettant d'exprimer les 
                                requêtes personnalisées. Ils simplifient considérablement l'écriture
                                des requêtes plus ou moins complète. Vous pouvez écrir des requêtes 
                                en faisant intervenir les conditions, les mots clé comme like, 
                                lessthan etc.
                            </p>
                            <h6>Principe</h6>
                            <ul>
                                <li>
                                    Commencer par le mots expriment l'action : L'action que vous 
                                    voudriez effectué est définie par un mot clé.
                                    Le nom de la fonction commence par le mot clé correspondant.
                                    Ceci peux être find, count, get etc
                                </li>
                                <li>
                                    Le nom du champs : Suivant ce mot clés le nom du champs sur 
                                    lequel porte la réquête. Par convention le nom du champs est 
                                    capitalisé.
                                </li>
                                <li>
                                    Connecteur logique : Il est possible d'utilisé les connecteurs 
                                    logiques. Il y a deux le Or et le And.
                                </li>
                                <li>
                                    Mots clés de condition : Vous avez la possibilité d'utilisé les 
                                    mots clés comme GreaterThan, LessThan ou bien Between.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6>Requêtes JPQL (Java Persistence Query Language)</h6>
                            <p>
                            JPQL est une autre manière puissant d'écrire les requête personnalisé.
                            C'est un langage de requête pour effectuer des requêtes sur des objets 
                            entités gérés par JPA (Java Persistence API). Il ressemble à PLSQL, 
                            mais opère sur les objets entités et leurs propriétés au lieu des tables
                            et des colonnes de la base de données.
                            Vous pouvez définir des requêtes JPQL dans votre interface repository en utilisant l'annotation @Query.
                            </p>
                        </li>
                    </ul>
                </div>
                <h5>Les differentes relation entre les tables</h5>
                <p>
                    Les entitées sont des classes qui représentes les tables de la base, donc 
                    logiquement, il est possible de lier deux entitées par une relation.
                    Plusieurs relation existent, les relations courament utilisé sont :
                    un á un (une observation d'une table ne peux qu'être liée au maximuim qu'a une
                    observation d'une autre table, exprimant l'injectivité), un á plusieurs 
                    (une observation d'une tables peux avoir plusieurs correspondant dans une autre 
                    tables exprimant la surjectivité) et plusieurs á plusieurs.
                </p>
                <h5>Comment créer les relations?</h5>
                <p>
                    <ul>
                        <li>
                            <h6>Relation un á un</h6>
                            <p>
                                L'annotation @OneToOne permet de créer une relation un á un
                            </p>
                            
                        </li>
                        <li>
                            <h6>Relation un á plusieurs</h6>
                            <p>
                                Cette relation est réalisé á l'aide de l'annotation @OnToMany,
                                supposons deux classe une personne et une voitures. La relation qui 
                                lie ces deux classes est la relation un á plusieurs. Une peresonne 
                                peux avoir plusieurs voiture, inversement plusieurs voiture peuvent 
                                appartenir á une personne. Pour relalisé cette relation, l'annotation
                                OneToMany est créer dans la classe personne et ManyToOne dans la 
                                classe voiture
                            </p>
                        </li>
                        <li>
                            <h6>Relation plusieurs á plusieurs</h6>
                            <p>
                                Une exemple pour cette relation est le suivant, dans les réseaux 
                                sociaux, plusieurs utilisateurs peuvent appartenir á un seul groupe 
                                et une une personne peux intégrée plusieurs groupe, ce type de 
                                realtion est une relation plusieurs á plusieurs.
                                Pour le réalisé, vous devez utilisé l'annotation ManyToMany dans les 
                                deux classe.
                            </p>
                        </li>
                    </ul>
                </p>
        
                <h5>Application</h5>
                <p>
                    Nous allons créer une application qui va gérer un ensemble de voiture et ses 
                    propriétaire, elle comprendra deux modèle, une pour les voitures et l'autre pour
                    les propriétaire. Dans notre modèles, une personnes peux disposer plusieurs
                    voitures, mais une voiture ne peux avoir qu'un seul propriétaire ce qui veux 
                    dire que la tables qui represente les voitres et les propriétaires on une 
                    relation un á plusieurs. Ensuite nous allons créer un ensemble de requêtes pour 
                    récupérer les données dans la base de données.
                </p>
                <p>
                    Si vous n'avez pas encore l'initializer de spring boot qui permet d'initialisé 
                    les applications spring boot, vous pouvez le téléchargé sur ce lien
                    [lien de spring boot initializer].

                </p>
                <h5>Ajout de dépendances</h5>
                <p>

                </p>
                <h5>Creation de l'entité personne</h5>
                <p>
                    Une personne est identifier par quelques champs, ou information.
                    En plus de ces champs, un autre champs représentant l'ensemble des voitures 
                    appartenant á cette personne, c'est la relation un á plusieurs.
                    Il y a aussi une champs qui est nommé id, ceci représente l'identifiant de 
                    cette table dans la base de données, ce champs est annoté par l'annotation Id 
                    et la stratégie utilisé pour générer les valeures de ce champs.
                </p>
                <div dangerouslySetInnerHTML={{ __html: marked(personne) }}></div>
                <h5>Entité voiture</h5>
                <p>
                    De la même manière qu'une personne, une voiture á ces information qui sont 
                    la marque, le model et l'année de fabrication. Cette classe dispose d'une 
                    relation de plusieurs á un avec la classe personne, c'est á dire une 
                    personne peux avoir plusieurs voiture
                </p>
                <div dangerouslySetInnerHTML={{ __html: marked(voiture) }}></div>
                <p>
                    Une entité représente une table dans la base de données. Spring boot gère 
                    la création automatique de la table correspondance á l'entité dans la base de 
                    données. L'interaction avec avec la base de données se fait avec les répository.
                    Nous allons créer des repositories correspondant á chaque entité.
                </p>
                <h5>VoitureRepository</h5>
                <p>
                    Cette interface implementant CrudRepository représente l'objet qui va interagir 
                    avec la base de données, éffectué les opérations afin de retiré les données 
                    de la bases de données. Dans cette classe il y a plusieurs fonctions et chaque 
                    fonction représente une requête.  Par exemple le premier correspond au voiture
                    d'une personne identifié par son nom
                </p>
                <div dangerouslySetInnerHTML={{ __html: marked(voiturerepository) }}></div>
                <h5>PersonneRepository</h5>
                <p>
                    De la même manière que VoitureRepository, nous allons créer PersonneRepository
                    pour va retirer les observations des personnes enrégistré dans la base de données.
                    Cette fois si nous allons utilisé la technique de methodes personnalisé pour 
                    écrire les requêtes. 
                </p>
                <div dangerouslySetInnerHTML={{ __html: marked(personnerepository) }}></div>
                <p>
                    L'application est une application web, nous allons développer les services 
                    et les contrôleur pour tester la connection et l'excécution des opérations 
                    sur la base de données. Commençons par créer les services.
                    Pour chacune de ces services.
                </p>
                <h5>Service des personnes</h5>
                <div dangerouslySetInnerHTML={{ __html: marked(personneservice) }}></div>
                <h5>Service des voitures</h5>
                <div dangerouslySetInnerHTML={{ __html: marked(voitureservice) }}></div>
                <p>Maintenant développons les controllers, le points d'accès á notre application</p>
                <h5>Controller des voitures</h5>
                <div dangerouslySetInnerHTML={{ __html: marked(voiturecontroller) }}></div>
                <h5>Controller des personnes</h5>
                <div dangerouslySetInnerHTML={{ __html: marked(personnecontroller) }}></div>
                <p>
                    Pour vérifier le bon fonctionnement de l'application, lancer cette dernière et 
                    aller sous le port de l'exécution de l'application sur postman et envoyé des 
                    requêtes.
                </p>
                <h3>Conclusion</h3>
                <p>
                    Dans ce projet nous avons vu les bases de l'écosystème de spring data jpa.
                    Deux concept sont très important, les entitées qui sont des classes qui 
                    représentent les tables de la base de données. Ces entitèes supportent tous
                    les types de relation équivalent au type de relation qui existe dans les base
                    de données relationnelle. Pour interagir avec la base de données,
                    les repositories sont utilisés, ces derniers sont des interfaces utilisées
                    pour interagir avec les base de données. Dans les repositories il y a des 
                    fonctions de bases, qui sont généré automatiquement correspondant aux fonction 
                    crud, mais aussi il y a des manières simple, flexible d'écrire notre fonction 
                    personnalisé. Spring data jpa est composé d'un ensemble d'annotation, d'ailleurs 
                    spring boot est basé sur les annotations qui force les classe á adopté certains
                    comportement. 
                </p>
            </div>
        </div>
    </>
        )
}