import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";
// Hadoop configuration
const core =`
\`\`\`bash
<configuration>
<property>
<name>fs.defaultFS</name>
<value>hdfs://master-ip-address:9000</value>
</property>
</configuration>
\`\`\`
`;

const hdfs =` 
\`\`\`bash
<configuration>
    <property>
    <name>dfs.replication</name>
    <value>3</value>
</property>
<property>
    <name>dfs.namenode.name.dir</name>
    <value>chemin/vers/le dossier/data/de namenode</value>
</property>
<property>
    <name>dfs.datanode.data.dir</name>
    <value>chemin/vers/le dossier data/de/datanode</value>
</property>
</configuration>
\`\`\`
`;

const yarn = `
\`\`\`bash
<configuration>
<!-- assure toi de remplacer le hostmane par l'adress ip de la machine en question -->
<property>
<name>yarn.resourcemanager.hostname</name>
<value>hostname</value>
</property>
<property>
<name>yarn.nodemanager.hostname</name>
<value>hostname</value>
</property>
<property>
<name>yarn.nodemanager.resource.memory-mb</name>
<value>8192</value> <!-- Mémoire maximale allouée pour chaque NodeManager en Mo -->
</property>
<property>
<name>yarn.nodemanager.resource.cpu-vcores</name>
<value>4</value> <!-- Nombre maximal de cœurs de CPU alloués pour chaque NodeManager -->
</property>
</configuration>
\`\`\`
`

// connexion between machines
const ssh_check =`
\`\`\`bash
ssh localhost
\`\`\`
`
const install_ssh = `
\`\`\`bash
sudo apt install openssh-client
sudo apt install openssh-server
\`\`\`
`
const key_generation =`
\`\`\`bashssh-keygen -t rsa -b 4096
cat ~/.ssh/id_rsa.pub >> authorized_keys
\`\`\`
`
const share_key = `
\`\`\`bash
ssh-copy-id user@hostname # remplacer user, et hostname par le nom du noeud
\`\`\`
`
const execution= `
\`\`\`bash
$HADOOP_HOME/bin/hdfs namenode -format # Formatage du système de fichier
$HADOOP_HOME/bin/hdfs --daemon start namenode # démaré le namenode
$HADOOP_HOME/bin/hdfs --daemon start datanode # datanode
$HADOOP_HOME/sbin/start-dfs.sh
$HADOOP_HOME/bin/yarn --daemon start resourcemanager
$HADOOP_HOME/bin/yarn --daemon start nodemanager
$HADOOP_HOME/sbin/start-yarn.sh
\`\`\`
`
const jps=`
\`\`\`bash
jps
\`\`\`
`
const envs_var =`
\`\`\`bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH=/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
export HADOOP_HOME=~/hadoop
export PATH=/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
export PATH=/bin:
\`\`\`
`
const install_java = `
\`\`\`bash
sudo apt update
sudo apt install default-jdk
\`\`\`
`

const hadoo_download=`
\`\`\`bash
wget https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.4.0/hadoop-3.4.0.tar.gz
tar -xzf hadoop-3.4.0.tar.gz
\`\`\`
`

export default function Hadoop() {
    useEffect(() => {
      hljs.highlightAll();
    }, []);

    return(
        <>
            <div className="postMeta">
                <div className="postDate">Publier le 31 Juin 2024</div>
                <h1>Mettre en place un cluster de hadoop</h1>
                <div >
                    <img src="../../../public/default.jpg" alt="" className="postImage"/>
                </div>
            </div>
            
            <div className="postContent">

                    <h3>Introduction</h3>
                    <div>
                    <span> Tout tourne autour des Données </span>. Les données jouent un rôle  crucial dans
                        le monde d'aujourd'hui, les entreprises, les gouvernements, les organisations font la course au
                        données en dépensant massivement. La raison est que les données permettent la productivité et l'éfficacité
                        de toutes opérations. Avec les données, les décisions sont prise d'une manière éclairer, les risques sont gérés
                        les potentiels marché sont identifier. Auparavant, il y avait des système de gestion de base de données
                        qui permettait de collecter et stocker les données, mais au fil du temps ces système trouvent des limites car
                        les données deviennent plus volumineux, plus varié, et viennent très rapidement. Pensez au données
                        des commentaires des utilisateurs sur une plateforme de réseau sociaux ou les données données produits par
                        les services financier qui viennent en temps réel. Il devient alors très capital de créer des système afin
                        de remedier au limite de ces système.

                        Une solutions les plus populaire est le système de Hadoop, il est largement utilisé dans les 
                        entreprise pour stocker analyse leur données. C'est un système de traitement distribué permettant de
                        traiter de grandes volumes de données en distribuant les données sur plusieurs machines. Il adopte une
                        architecture qui permet de traiter des données d'une manière rapide et efficace. Un cluster de hadoop est
                        un ensembles de machines connectées entre elles pour traiter les données. On en trouve de deux jusqu'à des
                        centaine de machines dans un cluster. Dans ce article je vais vous montré comment mettre en place un cluster
                        en utilisant les machines virtuelles de Amazon (AMI). A la fin de cette article, vous pourrez
                        mettre en place votre propre cluster et commprendre comment le système de hadoop fonctionne.
                    </div>
                    <h4>Prérequis</h4>
                    <div>
                        <p>
                            Hadoop dépend des logiciel pour son bon fonctionnement, ces logiciels sont indispensables. Avant
                            d'entré dans les étapes de téléchargement et de configuration d'un cluster de hadoop, assurez vous de disposé
                            ces logiciels.
                        </p>
                        <ul>
                            <li>
                                <h5>Secure Shell (SHH)</h5>
                                <p>
                                    Le SSH est protocole de communication entre deux machines. Il définie un ensemble
                                    de règle pour permettre á deux machine de communiquer d'une manière sécuriser. Hadoop
                                    utilise le SSH pour effectuer la communication entre les differentes machine du cluster.
                                    Sur la plupart des systèmes d'exploitation, le secure Shell est disponible, pour le vérifier
                                    taper 
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(ssh_check) }}></div>
                                <p>
                                    Dans le cas la connexion est refusé, utilisé cette commande pour l'installer. Le client sera 
                                    á la fois client et serveur. (je précise que je suis sur le système ubuntu)
                                </p>
                                <div  id="code" dangerouslySetInnerHTML={{ __html: marked(install_ssh) }}></div>
                            </li>
                            <li>
                                <h5>JDK</h5>
                                <p>
                                    Hadoop est basé sur Java, il utilise les programmes Java pour fonctionner, vous devez
                                    disposer java sur toutes les machines.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(install_java) }}></div>
                            </li>
                            <li>
                                <h5>
                                    Établir la communication entre les differentes machines
                                </h5>
                                <p>
                                Les machines  communiquent d'une manière sécuriser, chaque machine doit disposé 
                                sa clées. Ici nous allons utilisés l'algorithme de RSA pour générer les clés des 
                                machines. Pour le faire taper cette commande dans votre terminal
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(key_generation) }}></div>
                                <p>
                                    Cette étapes dois s'éffectué sur toutes les machines. Après que les clés soient générées 
                                    partager la clé d'une machine sur toutes les autres machines pour que la machine 
                                    authorise la connexion.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(share_key) }}></div>
                                <p>
                                    Si cette commande ne marche (c'était mon cas), effectuer le manuellement en copiant 
                                    la clé de la machine dans le fichier `~/ssh/id_rsa.pub` et le coller sur dans le fichier 
                                    `authorized_keys`  de l'autre machine.
                                </p>
                            </li>
                            <li>
                                <h5>
                                    Configurer les variables d'environnements
                                </h5>
                                <p>
                                    Dans le fichier `.bashrc` situé dans votre dossier home(si vous êtes sur linux ou un système de type unix), définir les variables
                                    d'environnement suivantes. Ca va permettre á hadoop de localiser les programmes
                                    et les exécuter.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(envs_var) }}></div>
                            </li>
                        </ul>
                    </div>
                    <h4>Architecture de hadoop</h4>
                    <div>
                        Hadoop est un système distribué permettant de traiter un grand volume de données.
                        Le traitement de ces données est répartie sur plusieurs machines, qui ensemble combiennent 
                        leur résultat pour en produire un resultat globale. L'ensemble de ces machine est ce qu'on appèl un cluser. Un cluster peux aller de 
                        deux á des centaines de machine. Hadoop est basé sur l'architecture <span> maître et travailleurs</span>.
                        Dans le cluster une machine maître se charge de coordonner les tâches. Le maître est chargé de déléguer 
                        les tâches aux différentes machines travailleurs qui après avoir effectué le traitement retourne le résultat 
                        au noeud maître qui les combines en renvoyant le résultat final.
                    </div>
                    <h4>Télechargement</h4>
                    <div>
                        <p>
                            Pour télécharger hadoop, aller sur leur site principal de 
                            <a href="https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.4.0/hadoop-3.4.0.tar.gz">hadoop</a>
                            puis télécharger votre hadoop. Une fois télécharger décompresser le fichier. Vous pouvez le faire en ligne
                            de commande comme ceci.<br/>
                        </p>
                        <div id="code" dangerouslySetInnerHTML={{ __html: marked(hadoo_download) }}></div>
                    </div>
                    <h4>Configuration</h4>
                    <div>
                        <p>
                            Une fois hadoop télécharger et décompresser, nous allons maitenant effectuer la configuration
                            de ce dernier. La configuration consiste á personnaliser hadoop selon les besoins et les ressources
                            machine qui sont à votre disposition. La configuration est très simple, elle fait intervenier
                            quatre fichier principal <span>hdfs-site.xml, core-site.xml, yarn.xml et map-reduce.xml</span>
                        </p>
                        <ul>
                            <li>
                                <h5>Configuration du fichier core-site.xml</h5>
                                <p>
                                    Dans ce fichier vous préciser l'adresse IP de la machine qui sera chargé de coordonner
                                    les traitement, c'est á dire la machine maitre.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(core) }}></div>
                            </li>
                            <li>
                                <h5>Configuration du fichier hdfs-site.xml</h5>
                                <p>
                                hdfs est un système de fichier qu'utilise hadoop pour qui facilite le traitement distribué
                                Vous préciser le nombre de copy de votre données qu'il faudra, dans mon ca j'ai
                                choisi 3, ensuite vous préciser le chemin des dossier de stockage de données.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(hdfs) }}></div>
                            </li>
                            <li>
                                <h5>
                                    Configuration du fichier yarn-site.xml
                                </h5>
                                <p>
                                    Plusieurs machine travail en harmonie pour traiter un grand volume de données, comment sont 
                                    gérées les ressources de chacune des machines dans le cluster, yarn est un logiciel qui permet 
                                    la gestion des ressources d'une machine. Hadoop utilise yarn pour gérer les ressources de chaque 
                                    machine, ici nous allons configurer la gestion des ressources de la machine.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(yarn) }}></div>
                            </li>
                            <h4>Donner l'address IP des machines</h4>
                            <div>
                                Sur la machine maître, créer dans le dossier de configuration un fichier nommées `workers`, dans 
                                ce fichier donner les address IP des machines esclaves dans le cluster ligne par ligne. Ce qui va
                                permettre á la machine maître de savoir la localisation des machines travailleurs.
                            </div>
                            <h4>Démarage du cluster</h4>
                            <div>
                                <p>
                                    Une fois tous configurer, exécuter les commandes suivantes pour lancer hadoop, ces commandes
                                    sont excécuter sur la machine maitre.
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(execution) }}></div>
                                <p>
                                    Pour voir si tout est en marche entrer dans votre terminal la commande
                                </p>
                                <div id="code" dangerouslySetInnerHTML={{ __html: marked(jps) }}></div>
                            </div>
                        </ul>
                    </div>
                    <h3>Conclusion</h3>
                    <div>
                        Hadoop est un système de traitement de données distribué le plus populaire, il est utilisé
                        par de nombre entreprise dans differents secteurs. Il es basé sur un architecture de maitre 
                        et d'esclave. Les maitres qui coordonne les tâches et les esclaves les exécutes. L'installation
                        de hadoop est très simple. Il faut s'assurer de disposer les logiciels nécéssaire pour le faire 
                        notamment Java et le SSH. Dans ce article nous avons montré comment mettre en place un cluster de
                        hadoop.
                    </div>
                
            </div>
        </>
    )
  }
