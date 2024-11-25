import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked, use } from "marked";

const header = `
\`\`\`json
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`
`
const playload = `
\`\`\`Json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
\`\`\`
`

const sign = `
\`\`\`java
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
\`\`\`
`
const user = `
\`\`\`java
package com.security.security.classes;

import jakarta.persistence.*;
import lombok.Builder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


@Entity
@Table(name = "users")
@Builder
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Enumerated(value = EnumType.STRING)
    private Role role;

    public User() {

    }

    public User(Long id, String firstname, String lastname, String email, String password, Role role) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }


}
\`\`\`
`

const role = `
\`\`\`Java
package com.security.security.classes;
public enum Role {
    User,
    Admin
}
\`\`\`
`

const userrepo = `
\`\`\`Java
package com.security.security.classes;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository< User, Long> {
  Optional<User> findByEmail(String email);
}
\`\`\`
`

const jwtservice = `
\`\`\`Java
package com.security.security.configuration;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JWTService {
    private static  final String SECRET_KEY = "NyAjjmAqHifAkJwZxX3A9rbFs1OtYNe8Rm0P31wLInx6+WecnIF3DAfYtq6T7fFz\n";
    public String extractEmail(String token){
        return extractClaim(token, Claims::getAudience);
    }
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return  claimsResolver.apply(claims);
    }
    public  String generatedToken(UserDetails userDetails){
        return createToken(new HashMap<>(), userDetails);
    }

    /*
    * This function is for token generation it accepts as input userDetails object and a
    * Map object of extract claims. I return a string of token.
    * */
    public String createToken(
            Map<String, Object> extractClaims,
            UserDetails userDetails
    ){

       return Jwts
               .builder()
               .setClaims(extractClaims)
               .setSubject(userDetails.getUsername())
               .setIssuedAt(new Date((System.currentTimeMillis())))
               .setExpiration(new Date(System.currentTimeMillis() +  1000*60*24))
               .signWith(getSingInKey(), SignatureAlgorithm.HS256)
               .compact();
    }

    /*
    * The goal of this function is tho check that a token is validated
    * Inputs :
    *       String of the token
    *       userDetails
    * if token is valid if its expiration time is not reached
    * and the corresponding userDetails is valid
    * */
    public  boolean isTokenValidated(
            String token,
            UserDetails userDetails
    ){
        final  String username = extractEmail(token);
        return (username.equals(userDetails.getUsername())) && isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return  extractClaim(token, Claims::getExpiration);
    }
    /*
    *  This function is used to extract all claims
    * */
    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSingInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    /*
    * This is the used signature
    * */
    private Key getSingInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

\`\`\`

`

const jwtauthentificationFilter = `
\`\`\`Java
package com.security.security.configuration;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    private final  JWTService jwtService;
    private final UserDetailsService userDetailsService;

    /**
     *
     * @param jwtService
     * @param userDetailsService
     *
     */
    @Autowired
    public JWTAuthenticationFilter(JWTService jwtService, UserDetailsService userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }
    /*
    *  For this filter, we get the header and check if it is null or the header do not start with
    *  Bearer
    *
    * */
    @Override
    protected void doFilterInternal(
           @NonNull HttpServletRequest request,
           @NonNull HttpServletResponse response,
           @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final  String email;
        /*
         * Return null if the authorization information in header is null or it is not begin with Bearer
         */
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }
        // Get the jwt and also the mail associate with this email
        jwt = authHeader.substring(7);
        email = jwtService.extractEmail(jwt);
        // The email is not null and there is an authentication for this email
        if(email!=null && SecurityContextHolder.getContext().getAuthentication() == null){
            // Get the user by it email
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);
            // Check if its token is valid
            if(jwtService.isTokenValidated(jwt, userDetails)){
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}

\`\`\`
`

const applicationConfiguration = `
\`\`\`Java
package com.security.security.configuration;

import com.security.security.classes.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class ApplicationConfiguration {

    private  final UserRepository userRepository;
    @Autowired
    public ApplicationConfiguration(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    /*
    * This function is used to fetch the according user
    * */
    @Bean
    public UserDetailsService userDetailsService(){
        return username -> userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("Not found"));

    }
    /*
    * This function provide the authentication manager
    * */
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration
    ) throws Exception
    {
        return  authenticationConfiguration.getAuthenticationManager();
    }
    /*
        What king of authentication do we provide? The goal of this function
        Is to provide a specific authentication
     */
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return  authProvider;
    }
    /*
    * With this function we encode the password
    * */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

\`\`\`
`

const securityconfiguration = `
\`\`\`Java
package com.security.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    private final JWTAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider autheticationProvider;
    private  final CustomAccessDeniedHandler accessDeniedHandler;
    public SecurityConfiguration(
            JWTAuthenticationFilter jwtAuthFilter, AuthenticationProvider autheticationProvider, CustomAccessDeniedHandler accessDeniedHandler) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.autheticationProvider = autheticationProvider;
        this.accessDeniedHandler = accessDeniedHandler;
    }
    /*
    * The security of the application is configured here
    * First the csrf is configured
    * What kind of http requests is authorized
    * The session management
    * authentication provider
    *
    * */
    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity httpSecurity
    ) throws Exception{
       return httpSecurity
               .csrf(
                       AbstractHttpConfigurer::disable
               )
               .cors(
                       AbstractHttpConfigurer::disable
               )
               .authorizeHttpRequests(
                       http -> http
                               .requestMatchers("/api/v1/auth/**")
                               .permitAll()
                               .anyRequest()
                               .authenticated()
               )
               .exceptionHandling(
                       e -> e.accessDeniedHandler(accessDeniedHandler)
                               .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.FORBIDDEN))
               )
               .authenticationProvider(
                       autheticationProvider
               )
               .addFilterBefore(
                       jwtAuthFilter,
                       UsernamePasswordAuthenticationFilter.class
               )
               .build();
    }

}

\`\`\`
`

const constumAccessDenied = `
\`\`\`Java
package com.security.security.configuration;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    /**
     * Handles an access denied failure.
     *
     * @param request               that resulted in an <code>AccessDeniedException</code>
     * @param response              so that the user agent can be advised of the failure
     * @param accessDeniedException that caused the invocation
     * @throws IOException      in the event of an IOException
     * @throws ServletException in the event of a ServletException
     */
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(403);
    }
}
\`\`\`
`

const authenticationRequest = `
\`\`\`Java
package com.security.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Builder
@AllArgsConstructor
public class  AuthenticationRequest {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
\`\`\`
`

const registerRequest = `
\`\`\`Java
package com.security.security.auth;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

\`\`\`
`

const response = `
\`\`\`Java

package com.security.security.auth;


import lombok.*;

@Data
@RequiredArgsConstructor
@Builder
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

\`\`\`
`

const authenticationService = `
\`\`\`Java
package com.security.security.auth;

import com.security.security.classes.Role;
import com.security.security.classes.User;
import com.security.security.classes.UserRepository;
import com.security.security.configuration.JWTService;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
@Builder
@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private  final JWTService jwtService;
    private final  PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    @Autowired
    public AuthenticationService(UserRepository userRepository, JWTService jwtService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(RegisterRequest registerRequest) {
        var user = User.builder()
                .firstname(registerRequest.getFirstname())
                .lastname(registerRequest.getLastname())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.User)
                .build();

        userRepository.save(user);
        var jwtToken = jwtService.generatedToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()
                )
        );

        var user = userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow();
        var jwtToken = jwtService.generatedToken(user);

        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }
}
\`\`\`

`

const authenticationController = `
\`\`\`Java
package com.security.security.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest registerRequest
    ){
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/authentication")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest authenticationRequest
    ){
    return  ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
}

\`\`\`
`
export default function SpringJWT(){
    useEffect(() => {
        hljs.highlightAll();
      }, []);
  
    return(
        <>
            <div className="postMeta">
                <div className="postDate">Publier le 29 Août 2024</div>
                <h1>Sécuriser une application spring boot avec JWT</h1>
                <div className="postImage">
                        <img src="/default.jpg" alt=""/>
                    </div>
            </div>
       
        <div className="postContent">
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
                    le code source de ce projet sur mon compte <a href="https://github.com/Badjodibe/springjwtsecurity/">en cliquant ici</a>.
                </p>
                <h3>Introduction</h3>
                <p>
                    La sécurité est un aspect crucial de toutes application, une application non sécurisée 
                    ou vulnérable est exposés à des attaques. Ces attaques peuvent ce présenté sous différentes 
                    formes comme la prise de control d'un compte utilisateur, le vol de données etc.
                    Spring  security  dispose d'un écosystème de sécurité très avancé. Il est très flexible et 
                    tient compte de différents types d'attaques. Une des manières la plus courante de sécuriser 
                    est  utilisation du  JWT (JSON Web Token). C'est un mecanisme de cryptage 
                    et signature d'information utilisé pour échangé des données en deux entitées sous forme de 
                    JSON. Dans cette article je vous montre comment authentifié un utilisateur en utilisant 
                    JWT. Non seulement le fondement est expliqué, nous allons aussi voir la partie pratique 
                    en développant une application web basé sur Spring boot.
                </p>
                <h4>C'est quoi le JWT</h4>
                <p>
                    JSON Web Token (JWT) permet l'échange sécurisé d'informations entre deux parties sous forme
                    de JSON(Javascript objet notation). Les informations contenues dans le 
                    JWT peuvent être vérifiées et approuvées car elles sont signées numériquement.
                    Les usages sont variés, dans le développement informatique les JWT sont souvent utilisés pour
                    l'authentification et l'autorisation des applications web.
                </p>
                <h4>Structure de JWT</h4>
                <p>
                    <p>Un JWT est composé de trois parties, séparées par des points <strong>.</strong></p>
                    <ol>
                        <li>
                            <h6>Header</h6>
                            <p>Contient des informations sur le type de token et l'algorithme de signature utilisé.</p>
                        </li>
                        <li>
                            <h6>Payload</h6>
                            <p>Contient les revendications (claims), c'est-à-dire les informations que l'on souhaite échanger.</p>
                        </li>
                        <li>
                            <h6>Signature</h6>
                            <p>Assure que le token n'a pas été modifié.</p>
                        </li>
                    </ol>
                    
                </p>
                <h4>Exemple d'un JWT</h4>
                <p>
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva
                    G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                </p>
               <div>
                    <ol>
                        <li>
                            <h5> Header</h5>
                            <p>
                                Le header typique de JWT inclut le type de token (JWT) et l'algorithme de signature (par exemple, HMAC SHA256).
                            </p>
                            <div id="code" dangerouslySetInnerHTML={{ __html: marked(header) }}></div>
                        </li>
                        <li>
                            <h5> Playload</h5>
                            <p>
                                Le payload contient les revendications (claims). Les revendications sont des
                                déclarations sur une entité (généralement, l'utilisateur) et des données 
                                supplémentaires. Il existe trois types de revendications : <strong>Revendications enregistrées (Registered Claims) </strong>  
                                <strong>Revendications publiques (Public Claims) </strong>, <strong>Revendications privées (Private Claims) </strong>
                            </p>
                            <div id="code" dangerouslySetInnerHTML={{ __html: marked(playload) }}></div>
                        </li>
                        <li>
                            <h5> Signature</h5>
                            <p>
                                Le signature de token
                            </p>
                            <div id="code" dangerouslySetInnerHTML={{ __html: marked(sign) }}></div>
                        </li>
                    </ol>
               </div>
               <h4>Utilisation de JWT dans les application Web</h4>
               <p>
                <ul>
                    <li>
                        <h5>Authentification</h5>
                        <p>
                            <ul>
                                <li>Lorsqu'un utilisateur se connecte avec succès en utilisant ses informations d'identification, un JWT est généré et retourné au client.</li>
                                <li>
                                    Le client stocke ce JWT (souvent dans le local storage ou un cookie) et 
                                    l'envoie avec chaque requête suivante au serveur, généralement dans 
                                    l'en-tête HTTP Authorization en utilisant le schéma <strong>Bearer</strong>.
                                </li>                           
                            </ul>
                        </p>
                    </li>
                    <li>
                        <h5>Autorisation</h5>
                        <p>
                            Chaque fois que le client envoie une requête, le serveur valide le JWT pour 
                            s'assurer que l'utilisateur est autorisé à accéder à la ressource demandée.
                        </p>
                    </li>
                </ul>
               </p>
               <h4>Pratique</h4>
               <p>
                    Le projet sur lequel nous allons travaillé vise á authentifier un utilisateur sur spring boot. Nous allons créer
                    un système qui consiste á enrégistrer un utilisateur dans notre bases de données avec ces 
                    informations, le mot de passe, biensûr crypté et puis l'authenfié. Premièrement nous allons créer l'utilisateur
               </p>
               <h5>User</h5>
               <p>
                    Créer une classe que vous allez nommer <strong>User</strong> avec les informations comme ce va suivre.
                    Cette classe représente les utilisateurs de notre système.Pour facilité la sécurité, 
                    spring security dispose d'une classe nommé UserDetails, celle classe est utilisé pour 
                    traité toutes les opérations liées à la sécurité des utilisations.  
                    Savoir si le compte de l'utilisateur est bloqué ou pas, ou bien obtenir les rôles de 
                    l'utilisateur.
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(user) }}></div>
               <p>
                    Vous avez remarqué que dans cette classe il y a un objet nommé rôle. Cet object represente 
                    le rôle de l'utilisateur qui est dans notre cas un admin ou un user.
                    Créer une énumeration nommée Role dans laquelle les roles seront listés.
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(role) }}></div>
               <p>
                    Nos future utilsateur seront stocker dans la une base de données, ce qui nous permettra
                    d'authentifier leur future requêtes par leur mot de passe et leur non d'utilisateur.
                    Creer un repository nommée UserRepository comme ceci
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(userrepo) }}></div>
               
               <p>
                    <p>
                        Maintenant que nous avons créer ce qui est liée aux utilisateurs (leur rôle, 
                        access a la base de données), maintenant nous allons passé á l'implematation les 
                        fonctions nécéssaire pour éffectué une sécurité jwt. Pour cela crée une classe nommé 
                        JWTService. On aura dans cette classe les fonctions pour générer le token,
                        vérifier l'expiration d'un token, extraire une reclammation et bien d'autre.
                        Expliquons les fonctions :
                    </p>
                    <ul>
                        <li>
                            <strong>extractClaim :</strong> Cette fonction permet d'extraire une revendation particulière
                        </li>
                        <li>
                            <strong>extractEmail :</strong> Extraction de email
                        </li>
                        <li>
                            <strong>createToken :</strong> Pour la création d'un token
                        </li>
                        <li>
                            <strong> generateToken : </strong>  pour générer un token
                        </li>
                        <li>
                            et les autres fonction comme leur nom l'indique
                        </li>
                    </ul>
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(jwtservice) }}></div>
               <p>
                Maintenant créons un filtre, a travers lequel va passer toutes les réquêtes, ce filtre va éffectué
                quelques opérations sur la réquête puis ensuite la faire passé. Dans cette classe les services que nous avons 
                créés dans la classe JWTService  seront utilisées. Voici ce que nous allons faire dans cette classe en gros. 
                Lorsque le client demandera une ressource, dans le header de la requête se trouve un attibue nommé 
                authorization, c'est là que le token est extrait. L'autorisation commence par <strong>Bearer</strong> 
                et ce qui suit est le token. Nous allons dans un premier temps extraire le token, puis le email qui 
                est associé au token via le service de la classe JWTService  que nous avons créer. Si dans un premier 
                temps l'attribue autorisation est null, ce qui veux dire qu'il y a pas de token dans la requête, cette dernière 
                est laissé passé. Dans le cas contraire, nous allons verifier si le email est diffèrent de null ou 
                l'objet authentification dans le context de sécurité est null, si c'est le cas nous passons au processus 
                de validation du token, un objet authentification est généré dans le context de sécurité pour être
                 authentifié après.
               </p>
               <div id="code"  dangerouslySetInnerHTML={{ __html: marked(jwtauthentificationFilter) }}></div>
               <p>
                    Dans les processus d'authentification de l'écosystème spring boot sécurity, nous allons 
                    éffectués la configurations de certains objets dans notre application, ces dernier 
                    seront gérés automatiquement par spring boot ce qui veux dire qu'ils seront annotés par 
                    les Bean.
               </p>
               <ul>
                    <li>
                      <strong>AuthenticationManager :</strong> C'est l'objet responsable de gérer l'authentifications des utilisateurs
                    </li>
                    <li>
                       <strong>AuthenticationProvider :</strong> Cet objet détermine quel type d'authentification
                        est procédée. Je rappèle qu'il y a plusieur type d'authentification, l'authentication á 
                        travers les données de la bases de données est utilisé dans notre cas. pour en savoir plus veillez visité ceci <a href=" https://docs.spring.io/spring-security/site/docs/4.0.x/apidocs/org/springframework/security/authentication/AuthenticationProvider.html"></a>
                    </li>
                    <li>
                       <strong>PasswordEncoder :</strong>  Spécifie l'encodage utilisé
                    </li>
                    <li>
                        <strong>UserDetailsService :</strong>  Qui est responsable de charger un utilisateur pour être sécurisé
                    </li>
               </ul>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(applicationConfiguration) }}></div>
               <p>
                    Ces configuration concernent les objects dont la gestion de leur cycle de vie sera pris en 
                    charge par spring boot. Maintenant effectuons les configurations des requêtes pour définir
                    quel type de requête doit être authenfier ou pas, comment nous allons ajoutés les filtres etc.
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(securityconfiguration) }}></div>
               <p>
                    <ul>
                        <li>
                            Allons un peux plus en détaills, le crsf et cors sont des types d'attaque des système,étant données que la porté de notre projet ne tient pas compte de ça, nous allons les désactivées
                        </li>
                        <li>
                            Tous ce qui a rapport avec notre authentification ou inscription se trouve dans le chemin "/api/v1/auth/**", étant données que nous n'allons pas authentifié les requêtes provenant de ce chemin, nous allons desactivé l'authentification.
                        </li>
                        <li>
                            Les autre comme leur nom l'indique, authentificationProvider design le type d'authentification que nous souhaité faire dans ce cas par nom d'utilisateur et mot de passe. Nous avons aussi ajouté un filtre que nous avons préalable créer.
                        </li>
                        <li>
                            Exception handler gère les erreur 403 qui peux arrivé, des fois il arrive que le serveur renvoi une erreur 403 c'est a dire que le serveur reconnais la requête mais empêche l'accès á des ressource. Pour remedier ça il faut la personnalisé. 
                        </li>
                    </ul>
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(constumAccessDenied) }}></div>
               <p>
                    Deux types requêtes qui seront envoyés par l'utilisateur : La requête d'authentification 
                    et celui d'inscription, ces réquêtes sont représenté par les classes suivantes. 
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(authenticationRequest) }}></div>
               <div  id="code" dangerouslySetInnerHTML={{ __html: marked(registerRequest) }}></div>

               <p>
                    Que ça soit l'authentification ou l'inscription, une reponse, le token pour être précis sera envoyé au client. Cette reponse est modélisée par la classe suivante
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(response) }}></div>
               <p>
                    Maintenant il nous reste á créer deux classes, la classe des services d'autentification et celle du controlleur
                    Commençons par la classe des services

                    La classe des services contient deux methodes, la methode d'inscription et celle d'authentification.
                    Pour l'inscription, l'utilisateur est créer et stocké dans la base de données et après un token est généré.
                    Dans celui de l'authentification l'utilisateur est authentifié et un token est renvoyé 
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(authenticationService) }}></div>
               <p>
               Un controleur ne fait qu'appeler les services, voici comment ça se represente
               </p>
               <div id="code" dangerouslySetInnerHTML={{ __html: marked(authenticationController) }}></div>
               <p>
               Maintenant lancé votre application, envoyer des requêtes à travers  postman pour voir le résultat. Assurez vous
               d'avoir effectuer les configuration de l'application et de la base de données adéquate.
               </p>
               <h3>
                    Conclusion
               </h3>
               <p>
                    Ce article parle de la mise en place du mécanisme d'authentification JWT avec Spring boot.
                    Premièrement les fondements de la sécurité JWT ont été detaillés  à savoir le header qui contient
                    les informations sur le token, le playlod regroupant les revendiactions, les informations
                    propre à l'utilisateur et la signature  pour
                    s'assurer que les informations n'ont pas été modifiées. Ensuites nous avons développés une application consistant
                    à authentifier un utilisateur avec JWT.
               </p>
        </div>
        </>
    );
}