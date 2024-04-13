import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function HadoopCluster(){
// Hadoop configuration
    const core =`
    <configuration>
    <property>
    <name>fs.defaultFS</name>
    <value>hdfs://master-ip-address:9000</value>
    </property>
</configuration>`;
    
    const hdfs =` 
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
</configuration>`;

const yarn = `    <configuration>
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
</configuration>`

// connexion between machines
const ssh_check =`ssh localhost`
const install_ssh = `sudo apt install openssh-client
sudo apt install openssh-server`
const key_generation =`ssh-keygen -t rsa -b 4096
cat ~/.ssh/id_rsa.pub >> authorized_keys`
const share_key = `ssh-copy-id user@hostname # remplacer user, et hostname par le nom du noeud`
const execution= `$HADOOP_HOME/bin/hdfs namenode -format # Formatage du système de fichier
$HADOOP_HOME/bin/hdfs --daemon start namenode # démaré le namenode
$HADOOP_HOME/bin/hdfs --daemon start datanode # datanode
$HADOOP_HOME/sbin/start-dfs.sh
$HADOOP_HOME/bin/yarn --daemon start resourcemanager
$HADOOP_HOME/bin/yarn --daemon start nodemanager
$HADOOP_HOME/sbin/start-yarn.sh`
const jps=`jps`
const envs_var =`export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH=/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
export HADOOP_HOME=~/hadoop
export PATH=/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
export PATH=/bin:`
const install_java = `sudo apt update
sudo apt install default-jdk`

    return(
        <>
        <div className="display-article">
        <div className="article-container">
        <h2 className="title">Mettre en place un cluster de hadoop</h2>
            <section>
                <h3 id="definition" className="section-title">C'est quoi hadoop?</h3>
                <hr />
                <p>
                    <span> Tout tourne autour des Données </span>. Les données jouent un rôle très crucial dans
                    le monde d'aujourd'hui, les entreprises, les gouvernements, les organisations font la course au
                    données en dépensant massivement. La raison est les données permettent la productivité et l'éfficacité
                    de toutes opération. Avec les données, les décisions sont prise d'une manière éclarer, les risques sont gérer
                    les potentielle marché sont identifier. Auparavant, il y avait des système de gestion de base de données
                    qui permettait de collecter et stocker les données, mais au fil du temps ces système trouvent des limites car
                    les données deviennent plus volumineux, plus varié, et viennent très rapidement. Pensez au données
                    des commentaires des utilisateurs sur une plateforme de réseau sociaux ou les données données produits par
                    les services financier qui viennent en temps réel. Il devient alors très capital de créer des système afin
                    de remedier au limite de ces système.

                    Une solutions les plus populaire est le système de Hadoop, il est largement utilisé dans les grandes
                    entreprise pour stocker analyse leur données. C'est un système de traitement distribué permettant de
                    traiter de grandes volumes de données en distribuant les données sur plusieurs machines. Il adopte une
                    architecture qui permet de traiter des données d'une manière rapide et efficace. Un cluster de hadoop est
                    un ensembles de machines connecter entre elles pour traiter les données. On de trouver de deux jusqu'à des
                    centaine de machines dans un cluster. Dans ce article je vais vous montré comment mettre en place un cluster
                    en utilisant les machines virtuelles de Amazon (AMI). A la fin de cette article, vous pourrez
                    mettre en place votre propre cluster et commprendre comment le système de hadoop fonctionne.
                </p>
            </section>
            <section>
                <h3 id="application" className="section-title">Prérequis</h3>
                <hr />
                <p>
                Hadoop dépend des logiciel pour son bon fonctionnement, ce logiciels sont indispensables. Avant
                d'entré dans les étapes de téléchargement et de configuration d'un cluster de hadoop, assurez vous de disposé
                ces logiciels.
                    <ul>
                        <li>
                            <h4 className="lii"> Secure Shell (SHH)</h4>
                            <p>
                                Le SSH est protocole de communication entre deux machines. Il définie un ensemble
                                de règle pour permettre á deux machine de communiquer d'une manière sécuriser. Hadoop
                                utilise le SSH pour effectuer la communication entre les differentes machine du cluster.
                                Sur la plupart des systèmes d'exploitation, le secure Shell est disponible, pour le vérifier
                                taper 
                                <SyntaxHighlighter language="bash" style={prism}>
                                    {ssh_check.trim()}
                                </SyntaxHighlighter>
                                Dans le cas la connexion est refusé, utilisé cette commande pour l'installer. Le client sera 
                                á la fois client et serveur. (je précise que je suis sur le système ubuntu)
                                <SyntaxHighlighter language="bash" style={prism}>
                                    {install_ssh.trim()}
                                </SyntaxHighlighter>
                            </p>
                        </li>
                        <li>
                            <h4 className="lii"> JDK</h4>
                            <p>
                                Hadoop est basé sur Java, il utilise les programmes Java pour fonctionner, vous devez
                                disposer java sur toutes les machines.
                                <SyntaxHighlighter language="bash" style={prism}>
                                    {install_java.trim()}
                                </SyntaxHighlighter>
                            </p>
                        </li>
                        <li>
                            <h4 className="lii"> Établir la communication entre les differentes machines</h4>
                            <p>
                            Les machines vont communiquer d'une manière sécuriser, chaque machine doit disposé 
                            ses clées. Ici nous allons utilisés l'algorithme de RSA pour générer les clés des 
                            machines. Pour le faire taper cette commande dans votre terminal
                            <SyntaxHighlighter language="bash" style={prism}>
                                    {key_generation.trim()}
                                </SyntaxHighlighter>
                                Cette étapes dois s'éffectué sur toutes les machines. Après que les clés sont générées 
                                partager la clé d'une machine sur toutes les autres machines pour que la machine 
                                authorise la connexion.
                                <SyntaxHighlighter language="bash" style={prism}>
                                    {share_key.trim()}
                                </SyntaxHighlighter>
                                Si cette commande ne marche (c'était mon cas), effectuer le manuellement en copiant 
                                la clé de la machine dans le fichier `~/ssh/id_rsa.pub` et le coller sur dans le fichier 
                                `authorized_keys`  de l'autre machine.
                            </p>
                        </li>
                        <li>
                            <h4 className="lii"> Configurer les variables d'environnement</h4>
                            <p>
                            Dans le fichier `.bashrc` situé dans votre dossier home, définir les variables
                            d'environnement suivantes. Ca va permettre á hadoop de localiser les programmes
                            et les exécuter.
                            <SyntaxHighlighter language="bash" style={prism}>
                                    {envs_var.trim()}
                                </SyntaxHighlighter>
                            </p>
                        </li>
                    </ul>
                </p>
            </section>
            <section>
                <h4>Architecture de hadoop</h4>
                <p>
                    Hadoop est un système distribué permettant de traiter un grand volume de données.
                    Le traitement de ces données est répartie sur plusieurs machines, qui ensemble combien 
                    leur résultat. L'ensemble de ces machine est ce qu'on appèl un cluser. Un cluster peux aller de 
                    deux á des centaines de machine. Hadoop est basé sur l'architecture <span> maître et travailleurs</span>.
                    Dans le cluster une machine maître se charge de coordonner les tâches. Le maître est chargé de déléguer 
                    les tâches au différent machine travailleurs qui après avoir effectué le traitement retourne le résultat 
                    au noeud maître qui les combines en renvoyant le résultat final.

                </p>
            </section>
            <section>
                <h3 id="lien" className="section-title">Configuration</h3>
                <hr/>
                <p >
                    Une fois hadoop télécharger et décompresser, nous allons maitenant effectuer la configuration
                    de ce dernier. La configuration consiste á personnaliser hadoop selon tes besoins et les ressources
                    machine qui sont á ta disposition. La configuration est très simple il suffit, elle fait intervenier
                    quatre fichier principal <span>hdfs-site.xml, core-site.xml, yarn.xml et map-reduce.xml</span>
                    <ul>
                        <li>
                            <h4 className="lii">Configuration du fichier core-site.xml</h4>
                            <p>
                            Dans ce fichier vous préciser l'adresse IP de la machine qui sera chargé de coordonner
                            les traitement, c'est á dire la machine maitre
                            <SyntaxHighlighter language="xml" style={prism}>
                                {core.trim()}
                            </SyntaxHighlighter>
                            </p>
                        </li>
                        <li>
                        <h4 className="lii">Configuration du fichier hdfs-site.xml</h4>
                            <p>
                            hdfs est un système de fichier qu'utilise hadoop pour qui facilite le traitement distribué
                            Vous préciser le nombre de copy de votre données qu'il faudra, dans mon ca j'ai
                            choisi 3, ensuite vous préciser le chemin des dossier de stockage de données.
                            <SyntaxHighlighter language="xml" style={prism}>
                                {hdfs.trim()}
                            </SyntaxHighlighter>
                            </p>
                        </li>

                        <li>
                        <h4 className="lii">Configuration du fichier yarn-site.xml</h4>
                            <p>
                            Plusieurs machine travail en harmonie pour traiter un grand volume de données, comment sont 
                            gérer les ressources de chacune des machine dans le cluster, yarn est un logiciel qui permet 
                            la gestion des ressources d'une machine. Hadoop utilise yarn pour gérer les ressource de chaque 
                            machine, ici nous allons configurer la gestion des ressources de la machine.

                            <SyntaxHighlighter language="xml" style={prism}>
                                {yarn.trim()}
                            </SyntaxHighlighter>
                            </p>
                        </li>
                    </ul>
                </p>
            </section>
            <section>
                <h3 id="lien" className="section-title">Donner l'address IP des machines</h3>
                <hr />
                <p>
                    Sur la machine maître, créer dans le dossier de configuration un fichier nommées `workers`, dans 
                    cette fichier donner les address IP des machines esclave dans le cluster ligne par ligne. Ce qui va
                    permettre á la machine maître de savoir la localisation des machines esclave.
                </p>
            </section>
            <section>
                <h3 id="lien" className="section-title">Démarage du cluster</h3>
                <hr />
                <p>
                    Une fois tous configurer, exécuter les commandes suivantes pour lancer hadoop, ces commandes
                    sont excécuter sur la machine maitre.
                    <SyntaxHighlighter language="bash" style={prism}>
                                {execution.trim()}
                    </SyntaxHighlighter>
                    Pour voir si tout est en marche entrer dans votre terminal la commande
                    <SyntaxHighlighter language="bash" style={prism}>
                                {jps.trim()}
                    </SyntaxHighlighter>
                </p>
                <div>
                    <p>Sur le noeud maitre vous verrez</p>
                    <div><img src= "../public/images/hadoop/maitre.png" alt="alt" /></div>
                </div>
                <div>
                    <p>Sur le noeud travailleur 1</p>
                    <div><img src= "../public/images/hadoop/worker 1.png" alt="alt" /></div>
                </div>
                <div>
                    <p>Et sur le 2</p>
                    <div><img src= "../public/images/hadoop/worker 2.png" alt="alt" /></div>
                </div>
            </section>
            <section>
                <h4>Conclusion</h4>
                <p>
                    Hadoop est un système de traitement de données distribué le plus populaire, il est utilisé
                    par de nombre entreprise dans differents secteurs. Il es basé sur un architecture de maitre 
                    et d'esclave. Les maitres qui coordonne les tâches et les esclaves les exécutes. L'installation
                    de hadoop est très simple. Il faut s'assurer de disposer les logiciels nécéssaire pour le faire 
                    notamment Java et le SSH. Dans ce article nous avons montré comment mettre en place un cluster de
                    hadoop.
                </p>
            </section>
            <div>
                <div className="lire-articles">Quelques articles qui pourrons vous intéresser</div>
                <div className="recommandation">
                    <a href="#/blog/deepLearning" className="lien">Qu'est ce que le deep Learning?</a> 
                    <a href="#/blog/data-for-business" className="lien">L'analyse de données</a> 
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default HadoopCluster;