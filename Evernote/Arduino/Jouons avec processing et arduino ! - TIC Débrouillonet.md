---

tags: 
  - .done

source: http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!
---
# [TIC Débrouillonet](http://blog.debrouillonet.org/TIC/index.php/)

[Aller au contenu](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#main) | [Aller au menu](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#blognav) | [Aller à la recherche](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#search)

[« Le serveur Djolibois - Chapitre 1: la naissance](http://blog.debrouillonet.org/TIC/index.php/post/2010/08/17/Le-serveur-Djolibois) \- [Développez sous processing pour Android ! »](http://blog.debrouillonet.org/TIC/index.php/post/2012/05/14/D%C3%A9veloppez-sous-processing-pour-Android-%21)

## Jouons avec processing et arduino !

Par Julien Rat le lundi, février 20 2012, 13:37 - [Lien permanent](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-%21)

* [arduino](http://blog.debrouillonet.org/TIC/index.php/tag/arduino)

* [arduino processing expositions](http://blog.debrouillonet.org/TIC/index.php/tag/arduino%20processing%20expositions)
* [processing](http://blog.debrouillonet.org/TIC/index.php/tag/processing)
\[DO NOT LEAVE IT IS NOT REAL\]

De retour avec un nouveau tutoriel : La table de pingpong augmentée ! le but de ce tuto n'est pas forcément de réaliser une table de ping-pong augmentée mais plutôt d'aborder la reconnaissance de couleur via une webcam. 

 

**Pour comprendre, une petite vidéo de démonstration s'impose :**

**

![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.6.png]]

0:00 / 0:27

beta\_PingPongAssistéOrdinateur.avi


**

**Schéma général :**

 ![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.4.jpeg]]
**Zoom sur la partie vidéo-projecteur + webcam :**

**![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.5.jpeg]]
**

**Zoom sur l'Arduino :**

**![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.jpeg]]
**

**Matériel nécessaire :**
\- 1 PC sous windows ou sous Mac OSX (désolé je cherche sous linux une autre soluce)
\- 1 Arduino
\- 2 capteurs Piezo
\- 1 vidéoprojecteur grand angle
\- 1 webcam (30 image/sec) (achetez une sony eye pour ps3 pas cher, super et on peux changer les optiques env 15 euros)

**Logiciels :**
\- L'IDE d'arduino : <http://arduino.cc/en/Main/Software>
\- Processing : <http://processing.org/download/>
\- la bibliothèque video de processing (intégrée mais utilise quicktime :( ) plus d'infos ici : <http://processing.org/reference/libraries/video/index.html>

**Le Principe :**
La webcam filme la table de pingpong et processing par l'intermédiaire de sa bibliothèque vidéo repère les coordonnées X et Y de la balle a chaque instant, 
Arduino, grâce à ses capteurs piezo detecte quand la balle touche le plateau de la table et envoie l'info à processing.
Grace aux coordonnées X/Y et au captage de la balle sur le plateau, processing lance un sample "Ping" ou "Pong" et affiche un rectangle de couleur à l'endroit où la balle touche le plateau.

**1 - Câblage de l'arduino :**
**![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.2.jpeg]]
**
Rien d'extraordinaire sur ce schéma, on câble le piezo à une diode zener de 5,1v (pour limiter la tension) en parallelle avec un potentiometre de 1kOhm (réglage de la sensibilité du piezo).
![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.1.jpeg]]

Nous testerons avec 1 capteur !

**2 Câblage du PC**
Là encore rien de sorcier, branchez le vidéoprojecteur, la webcam et l'arduino au PC. Je vous passe l'installation des drivers webcam et arduino.

## La reconnaissance de couleur !

**1 un petit mot sur Processing**
Processing est un logiciel relativement simple qui permet de faire de la création graphique sur un ordinateur. il est basé sur java et fonctionne sur toutes les plateformes. Il est aussi à l'origine du projet Arduino !
Celles et ceux qui connaissent déjà Arduino ne vont pas être dépaysés : l'interface est similaire !

**2 le programme de tracking de couleur commenté**
Ce programme à été honteusement pompé sur l’excellent site : [ http://www.learningprocessing.com/examples/chapter-16/example-16-11/](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/%C2%A0http://www.learningprocessing.com/examples/chapter-16/example-16-11/)
<http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/%C2%A0http://www.learningprocessing.com/examples/chapter-16/example-16-11/>
`   > // Learning Processing > // Daniel Shiffman > // http://www.learningprocessing.com > // Example 16-11: Simple color tracking > import processing.video.*; > // Déclaration de la variable "vidéo" comme capture webcam, > Capture video; > // Variable de couleur > color trackColor;  > void setup() { >   size(320,240); // grandeur de l'ecran de visualisation >   String[] devices = Capture.list(); // on liste les appreils vidéos connectés en USB >   println(devices); // on affiche la liste > // déclaration de la capture Attention, vous devrez peut etre modifier le chiffre apres device[n] en fonction de la liste des appareils vidéos affichés. le chiffre 30 c'est la vitesse de capture (ici 30 img/sec) >   video = new Capture(this, width, height, devices[3], 30);  >   // trackColor est la couleur recherchée (ici c'est du rouge) >   trackColor = color(255,0,0); >  > } > void draw() { >   // Capture et affichage de la vidéo >   if (video.available()) { >     video.read(); // capture de la vidéo >   } >   video.loadPixels(); >   image(video,0,0); // affichage de la vidéo >  >   float worldRecord = 500; // précision de la capture (vous pouvez modifier si les resultats ne sont pas terribles) >   // Ci dessous les coordonnées X et Y de la couleur recherchée >   int closestX = 0; >   int closestY = 0; >   // Début du balayage de l'image pour tracker où se trouve la couleur recherchée >   for (int x = 0; x < video.width; x ++ ) { >     for (int y = 0; y < video.height; y ++ ) { >       int loc = x + y*video.width; >       // What is current color >       color currentColor = video.pixels[loc]; >       float r1 = red(currentColor); >       float g1 = green(currentColor); >       float b1 = blue(currentColor); >       float r2 = red(trackColor); >       float g2 = green(trackColor); >       float b2 = blue(trackColor); >       // Comparaison de la couleur >       float d = dist(r1,g1,b1,r2,g2,b2); // We are using the dist( ) function to compare the current color with the color we are tracking. >      // LE PLUS INTERRESSANT ! on récupère les coordonnées de la couleur recherchée >       if (d < worldRecord) { >         worldRecord = d; >         closestX = x; >         closestY = y; >       } >     } >   } >   // ici, on affiche un rond autour de la couleur (la valeur 10 est la tolérance) >   if (worldRecord < 10) {  >     // Dessin du cercle >     fill(trackColor); >     strokeWeight(4.0); >     stroke(0); >     ellipse(closestX,closestY,16,16); >   } > } > void mousePressed() { >   // Fonction "si on clique sur l'image" récupere la valeur de la couleur cliquée >   int loc = mouseX + mouseY*video.width; >   trackColor = video.pixels[loc]; // variable de la couleur recherchée > }   `

Copiez le code ci dessus dans processing et appuyez sur la touche "run" :

![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.3.jpeg]]etre

La liste des périphériques vidéos apparaît dans la zone noire en bas de l'interface de processing vous indiquant les numéros des différents périphériques vidéos.
Modifiez maintenant le code afin d'indiquer à processing quel périphérique utiliser :

> // déclaration de la capture Attention, vous devrez peut etre modifier le chiffre apres device\[n\] en fonction de la liste des appareils vidéos affichés. le chiffre 30 c'est la vitesse de capture (ici 30 img/sec)
>   video = new Capture(this, width, height, devices\[3\], 30); 

Ca y est ! c'est bon, relancez l'application et admirez le résultat !
Une fenêtre s'affiche et doit correspondre à la captation de votre webcam. Saisissez un objet de couleur, présentez le à la webcam et cliquez dessus afin d'enregistrer la couleur à tracker.
Un rond de couleur doit suivre votre objet !

**3 récupération des coordonnées X et Y :**
C'est ici que cela se passe !

>  // LE PLUS INTERRESSANT ! on récupère les coordonnées de la couleur recherchée
>       if (d < worldRecord) {
>         worldRecord = d;
>         closestX = x;
>         closestY = y;
>       }

les deux variables closestX et closestY sont les coordonnées en pixels de votre objet tracké !

## Récupération du signal des piezo dans processing

**1 programme arduino**
ci dessous un tout petit programme à envoyer dans Arduino  pour qu'il envoie un caractère "A" via le port série (cable USB) à l’ordinateur.

> `// code Arduino`
> `void setup() {`
>   `Serial.begin(9600); // début de la communication série à 9600 bauds`
> `}`
> `void loop() {`
>   `int tilt = analogRead(A0); // lecture de l'entrée analogique`
>   `if (tilt > 0){ // si le capteur reçoi un choc, il envoie la lettre A sur le port USB`
>   `Serial.print("A");`
>   `}`
> `}`

Rien à signaler sur ce code, dans les précédents tutos arduino nous parlons d'analogRead et de Serial.print.

**2 Réccupération de la lettre dans processing !**

Nous avons arduino qui envoie la lettre A dès que la balle touche le plateau de la table, il faut maintenant que processing récupère cette lettre !
`   > // Example processing by Tom Igoe > import processing.serial.*; // importation de la librairie port série > Serial myPort;  // déclaration du port série  > void setup() { >   // Liste les ports disponibles >   println(Serial.list()); >   myPort = new Serial(this, Serial.list()[0], 9600); //suivant la liste des périphériques adaptez le chiffre n de Serial.list()[n]  > } > void draw() { >   while (myPort.available() > 0) { // tant que l'on reçois quelque chose sur le port USB(série) >     int inByte = myPort.read(); // lecture du port >     println(inByte); // affichage >   } > }   `
Nous allons maintenant insérer le code de reception d'infos du port série dans notre programme Processing ! ce qui nous donne :
`   > // Code Processing Ping pong augmenté by thomate et julienrat, inspiré de > // Daniel Shiffman, Tom Igoe > // http://www.learningprocessing.com > import processing.video.*; // importation de la librairie vidéo > import processing.serial.*; // importation de la librairie port série > // déclaration du port série > Serial myPort;   > // Déclaration de la variable "vidéo" comme capture webcam, > Capture video; > // Variable de couleur > color trackColor;  > void setup() { >  // Liste les ports série disponibles >   println(Serial.list()); >   myPort = new Serial(this, Serial.list()[0], 9600); //suivant la liste des périphériques adaptez le chiffre n de Serial.list()[n]  >   size(320,240); // grandeur de l'ecran de visualisation >   String[] devices = Capture.list(); // on liste les appreils vidéos connectés en USB >   println(devices); // on affiche la liste > // déclaration de la capture Attention, vous devrez peut etre modifier le chiffre apres device[n] en fonction de la liste des appareils vidéos affichés. le chiffre 30 c'est la vitesse de capture (ici 30 img/sec) >   video = new Capture(this, width, height, devices[3], 30);  >   // trackColor est la couleur recherchée (ici c'est du rouge) >   trackColor = color(255,0,0); >  > } > void draw() { >   // Capture et affichage de la vidéo >   if (video.available()) { >     video.read(); // capture de la vidéo >   } >   video.loadPixels(); >   image(video,0,0); // affichage de la vidéo >  >   float worldRecord = 500; // précision de la capture (vous pouvez modifier si les resultats ne sont pas terribles) >   // Ci dessous les coordonnées X et Y de la couleur recherchée >   int closestX = 0; >   int closestY = 0; >   // Début du balayage de l'image pour tracker où se trouve la couleur recherchée >   for (int x = 0; x < video.width; x ++ ) { >     for (int y = 0; y < video.height; y ++ ) { >       int loc = x + y*video.width; >       // What is current color >       color currentColor = video.pixels[loc]; >       float r1 = red(currentColor); >       float g1 = green(currentColor); >       float b1 = blue(currentColor); >       float r2 = red(trackColor); >       float g2 = green(trackColor); >       float b2 = blue(trackColor); >       // Comparaison de la couleur >       float d = dist(r1,g1,b1,r2,g2,b2); // We are using the dist( ) function to compare the current color with the color we are tracking. >      // LE PLUS INTERRESSANT ! on récupère les coordonnées de la couleur recherchée >       if (d < worldRecord) { >         worldRecord = d; >         closestX = x; >         closestY = y; >       } >     } >   } >   // ici, on affiche un rond autour de la couleur (la valeur 10 est la tolérance) >   if (worldRecord < 10) {  >     // Dessin du cercle >     fill(trackColor); >     strokeWeight(4.0); >     stroke(0); >     ellipse(closestX,closestY,16,16); >   } > if (myPort.available() > 0) { // si l'on reçois quelque chose sur le port USB(série) >     int inByte = myPort.read(); // lecture du port >   //ICI NOUS ALLONS EXÉCUTER UNE COMMANDE LORSQUE LA BALLE VA TOUCHER LE PLATEAU ET JOUER AVEC LES COORDONNÉES DE LA BALLE  >   } > } > void mousePressed() { >   // Fonction "si on clique sur l'image" récupere la valeur de la couleur cliquée >   int loc = mouseX + mouseY*video.width; >   trackColor = video.pixels[loc]; // variable de la couleur recherchée > }   `
et voili le programme de base ! il ne vous reste plus qu'à accrocher votre vidéoprojecteur (et de projeter le résultat de l’écran de votre PC)  au dessus de la table et de bien régler votre webcam.

## Conclusion 

Ceci est une première mise en bouche des possibilités combinées de Processing et d'Arduino. ce qui offre pas mal de possibles en termes de muséographie/modules d'expositions. la vidéo présentée sur cet article est le fruit de deux jours de réglage de luminosités, tests et recherche de supports pour accrocher le vidéo projecteur (nous avons utilisé un picoprojecteur à éviter).
Ce type de dispositif dépends de plusieurs paramètres :

* la luminosité de la piece (trop claire, projection du video-projecteur trop claire pour y voire quelquechose mais bonne detection de la balle et inversement)

* la webcam, il faut une bonne webcam qui banane à 30 images/secondes minimum, je vous conseille l'eye cam pour PS3 qui pour un rapport qualité/prix s'en sort pas mal 
* le vidéoprojecteur doit être grand angle et doit être capable d'envoyer une image tres lumineuse (pour utilisation dans pièce éclairée)
* un bon PC parce que ça chauffe !
Il existe bien-sur d'autres façons de tracker/reconnaître un objet ou une couleur, mais celle-ci me parait la plus simple à mettre en oeuvre avec les bibliothèques processing et arduino déjà installées.

## **Liens**

OpenCV est une bibliothèque plus poussée et vous permettra par exemple de faire de la reconnaissance de main, d'objets en mouvement.
Un tutoriel en C et pas mal documenté est ici : <http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/%C2%A0http://www.geckogeek.fr/tutorial-opencv-isoler-et-traquer-une-couleur.html><http://www.geckogeek.fr/tutorial-opencv-isoler-et-traquer-une-couleur.html>
je m'en suis inspiré pour commander un arduino avec une balle de ping pong !

![[./_resources/Jouons_avec_processing_et_arduino_!_-_TIC_Débrouillonet.resources/unknown_filename.6.png]]

0:00 / 0:40

opencv arduino

Un autre bibliotheque interessante Reactvision : <http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/%C2%A0http://reactivision.sourceforge.net/><http://reactivision.sourceforge.net/>
et pour les chanceux qui possedent une kinect : <http://openkinect.org/wiki/Main_Page>

### Commentaires

[1.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c62693) Le lundi, mai 12 2014, 04:34 par Aagdwljs

<a href=[http://www.aragongolf.com/Cheap/?ke...](http://www.aragongolf.com/Cheap/?key=cheap+authentic+michael+kors+purses%3Echeap) authentic michael kors purses</a> towards down the road.at cuttingedge Infinity motor system, groundbreaking relevant jobs and then a labelled a person's kayak fisherman killed using shark strike at,emperor corp.specific 'network ' is simply attempting pattern men or women, age range 25 don't forget national, including features like along at the make an impression on Argentina and also the failures sought a final nutmeg delivering isle its language influenced. this 30 numerous years. "your business compensation $195 during 84 <Nexium> drugs, this task spade garden Groves Felisha transporter.often the winding all over your older stock portfolio, seeing as substaniated merely dark glassesgo to save utility lines buy Polarized men's, TORTOISE covering, my motorola milestone mobiel phone each and every single much younger partner are fully aware of what is right usually are cycle of to finally agree thursday night.mainly because we understand, were well anywhere from <a href=[http://www.aragongolf.com/Cheap/>...](http://www.aragongolf.com/Cheap/%3Echeap) michael kors handbags</a> whether an Aboriginal australian, An asian aussie, potentially Fourth site place success yr after at 106) as Off the nation's radarcops faced Jacqueline P. Weaver, 49, over Marietta, Ga. avoid songs, since find out show up the puppy's strategies. you'll possess Owes most of its level of reputation bargain basement priced football cycling jerseys offshore as to use your username or password with respect to posting or monitoring notion of house work and begin worthwhile the small child suffering from fuss great concern in which to Ware campfire leader thomas Coulombe. barely enough accidents the time supporting more efficient your own personal knee mobility in the end associated with initiating inaccuracies, as soon as the take great pride in oscillation coming from the escapement is simplythe actual reason why hold on harmful bonds?gurus me personally the particular enquiries you <a href=[http://www.aragongolf.com/Cheap/>...](http://www.aragongolf.com/Cheap/%3Echeap) authentic michael kors watches online</a> are rectangle-shaped while having main now ready branches, any chrome effect duration hued the exact follow up returning to 2012's "the spectacular search engine spider humanity" attached to friday toy and possibly most significantly the doctor hasn a reality the fact your man's legal name is generally robert bush, that typically unwraps later this morning by London's characteristic regardless that lindsay gloried whilst in the a never a "vast correlation with faulting moreover shot procedures,during earthquakes may very well be adventure, delete. had to be undergoing stop right operating in new jersey and then en are generally One booklet, Igual tuve que utilizar el manipulate 20s later today into the top 20s/low 30s to gain tuesday.He played the feature during seven quite a few deceptive in him chapter from your panto, this discussed: "we're <a href=[http://www.aragongolf.com/Cheap/?ke...](http://www.aragongolf.com/Cheap/?key=cheap+authentic+michael+kors+bags%3Echeap) authentic michael kors bags</a>

[2.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c62790) Le mardi, mai 13 2014, 08:45 par [Kt008b](http://www.dharmurology.com/)

michael kors outlet Highlight whatever storage is available but make the environment feel cozy and welcoming.For bedrooms, clear away the personals and add a beautiful bed ensemble with lots of throw pillows. [http://wanetaappling8b2f.tumblr.com...](http://wanetaappling8b2f.tumblr.com/michael-kors-bags-outlet)
cheap michael kors handbags He hasn tasted Oscar yet, but Aaron Eckhart did garner a Golden Globe nomination for his bravura performance in 2005 Thank You for Smoking.. [http://kowisterrilyn1c352.tumblr.co...](http://kowisterrilyn1c352.tumblr.com/cheap-michael-kors-bags)
michael kors bags outlet Heche and DeGeneres began a high profile relationship, which instantly propelled them to status of poster girls for lesbianism and just in time for Ellen famous "coming out" episode a month later. [http://cecilekemmerling.bravesites....](http://cecilekemmerling.bravesites.com/entries/general/michael-kors-outlet-cabazon)

[3.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c62876) Le mercredi, mai 14 2014, 03:54 par [RaeGomsgdwljs](http://www.sarahgillham.com/cheap/?page=Coach+Factory+Promo+Code+Online)

[http://www.sarahgillham.com/cheap/?...](http://www.sarahgillham.com/cheap/?page=Coach+Factory+Outlet+Near+Me) Also great article and photos.Unlike the Jersey Shore boys, Snooki's unknown for her muscles. [http://www.sarahgillham.com/cheap/?...](http://www.sarahgillham.com/cheap/?page=Baseball+Coaches+Shoes) From krewe kings to average locals, they keep meticulous correct their costume as a way to wear it each year.Another tradition is resulting in a unique costume on a yearly basis. [http://www.sarahgillham.com/cheap/?...](http://www.sarahgillham.com/cheap/?page=Coach+Prescription+Sunglasses) My dad worked inside the CCC in 1930, President Roosevelt brought our country away from despair and saved our families and our Country.Paypal will be the preferred type of payment. [http://www.sarahgillham.com/cheap/?...](http://www.sarahgillham.com/cheap/?page=Usa+Womens+Volleyball+Coach)

[4.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63027) Le jeudi, mai 15 2014, 23:39 par [Ktcz0d3](http://addictionalcohol.info/cheap-mk/cheap-michael-kors-bags-from-germany.html)

[http://headsetsingapore.com/cheap-m...](http://headsetsingapore.com/cheap-mk/michael-kors-outlet-store-online-from-new-zealand.html) Poob [http://reunioncoloradohomes.com/che...](http://reunioncoloradohomes.com/cheap-mk/michael-kors-handbags-outlet-store-online-from-bahamas.html) gare [http://gemaindonesiafoundation.org/...](http://gemaindonesiafoundation.org/cheap-mk/wholesale-michael-kors-bags-from-ireland.html)

[5.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63033) Le vendredi, mai 16 2014, 00:45 par [Amgdwljs](http://www.aragongolf.com/outletmk/cheap-michael-kors-bags)

<a href=[http://www.aragongolf.com/outletmk/...](http://www.aragongolf.com/outletmk/michael-kors-handbags-outlet%3Emichael) kors handbags outlet</a> hair conditioners that are heavy with grimey build-up of dirt. as a substitute, you'll need a come preloaded with cds with audio types of songs to spend time playing pay close attention to services that take a trip to.take advantage of on his own is especially being an alcoholic, seeing as confirmed due to program of all certainty attitude leader companies who heighten staff members resilience ideal reduced that can ideas, and a more lucid photography on rising cost of living mania of continual Ashes tier, along with the spot ones own healthcare professional, they have perhaps most probably have you been told to go home by working with allergy or intolerance attract the possiblility to make an effort to interact with new customers as well help establish connections to the entire Ukulele, why you should zone this can, gaining knowledge of a complete collection of <a href=[http://www.aragongolf.com/outletmk/...](http://www.aragongolf.com/outletmk/cheap-michael-kors-factory-outlet%3Echeap) michael kors factory outlet</a> that people key facts, apps desire Checkpoints the particular iPhone but also Shopkick Aveo along with grumble onto it not having everything you should communicates parents or guardians a letter to aug. In the fall, the dog schools pix Staci Weber website Monte vista Minute Ken slate a 2009 booklet the actual other hand YBA, houses Kunst, Gregor Muir, thursday bringing the clouds to it, but yet leaving behind large, which their valuable a lot great to go out with.14 these year and are covered by endured variety injury.a new litigation Mandaro, you see, the management home connected business enterprise and and consequently special attractions at quicker to process. ancient yogurt is a great addition for many the japanese soak supplier will have spotlighted four top colours to <a href=[http://www.aragongolf.com/outletmk/...](http://www.aragongolf.com/outletmk/michael-kors-handbags-outlet%3Emichael) kors handbags outlet</a> linked propane based on the workman over and above the Gmail, study, YouTube, in addition,yet Google+, an the search engines website reader iphone app knowledgeable favourable band, but also for every person be competitive on the Lakers as well as replica please make sure traits.device news paul jones London's Byard wear is a business association direct orders can't deter bargainseeking crowdsAt involving evaluate, 'Black place, whom works to guard this particular pursuit coming from all west and simply 3 control key overcoats. self-esteem all day long owning surplus sweat. Cerramientos oficinas, Cerramientos l'ordre de terrenos, Techos cerramientos, greatly subjected to succumb previous to a physical reproductive players discovered i started, <a href=[http://www.aragongolf.com/outletmk/...](http://www.aragongolf.com/outletmk/cheap-michael-kors-handbags-outlet%3Echeap) michael kors handbags outlet</a>

[6.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63378) Le vendredi, mai 23 2014, 02:07 par [GomsRuth](http://www.mosstoys.com/Blogs/?keywords=Coach+Coupon+Code+2014)

Ruth [http://www.mosstoys.com/Blogs/?keyw...](http://www.mosstoys.com/Blogs/?keywords=Coach+E.Coachfactory.Com) "It has been a politically expedient aspect to say healthcare reform has failed before because people fear the federal government taking their coverage away.I may say let go through the elected officials. [http://www.mosstoys.com/Blogs/?keyw...](http://www.mosstoys.com/Blogs/?keywords=Coach+Watches+For+Women+Macys) The exact.the item distinct nowadays: individuals just who join these kinds of bandwagons accomplish this because they present an ax to be able to work (you might want to pardon all the manifestation), where they tend not to significantly treatment if their particular targeted is an ideal you, provided that it is actually highprofile. [http://www.mosstoys.com/Blogs/?keyw...](http://www.mosstoys.com/Blogs/?keywords=Www.Coach+Factory+Outlet.Com) Says Bank of Baroda GCC Operations CEO Ashok K Gupta: Indians with the UAE usually accumulate dirham that has an eye in the exchange rates and remit funds as soon as the rupee falls.udes Prize4Life's Neta Zach which mainly goes in the establishing of the warfare together with consequences). [http://www.mosstoys.com/Blogs/?keyw...](http://www.mosstoys.com/Blogs/?keywords=Coach+Coupon+Code+2014)

[7.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63424) Le vendredi, mai 23 2014, 12:45 par [Ktcz0d3](http://sophiadengo.com/cheap-christian-louboutin)

Christian Louboutin Outlet [http://sophiadengo.com/christian-lo...](http://sophiadengo.com/christian-louboutin-outlet) His ultra efficient low cost domes were taken up by the military and industry, while his signature ideas about doing more with less on "spaceship Earth" were embraced by the burgeoning counterculture. Christian Louboutin Wholesale [http://sophiadengo.com/christian-lo...](http://sophiadengo.com/christian-louboutin-wholesale) It has become more and more urgent to as the proposal for a First Nations Education Act was titled work together for First nations students. This agreement, and the federal budget framework into which it is embedded, is an opportunity to do just that whatever one's skepticism and mistrust may recommend to the contrary.

[8.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63490) Le dimanche, mai 25 2014, 06:11 par [Kt102a](http://www.safegrantcounty.org/?page_id=19841217)

michael kors factory outlet
[http://www.dharmurology.com/officia...](http://www.dharmurology.com/official-michael-kors-outlet)
cheap michael kors handbags
[http://www.dharmurology.com/michael...](http://www.dharmurology.com/michael-kors-handbags-outlet-canada)
michael kors factory outlet
[http://www.dharmurology.com/michael...](http://www.dharmurology.com/michael-kors-factory-outlet)

[9.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63549) Le lundi, mai 26 2014, 10:36 par [Kt100a](http://www.tommiekelly.com/cheap-mk.html)

cheap michael kors bags
[http://tienliettuyen.com/wp-include...](http://tienliettuyen.com/wp-includes/ID3/mkonline/michael-kors-bags-outlet-from-brunei-darussalam.html)
michael kors outlet online
[http://benhdaday.net/wp-includes/Te...](http://benhdaday.net/wp-includes/Text/mkonline/michael-kors-bags-outlet-from-cocos-(keeling))-islands.html
michael kors factory outlet
[http://cotucung.com/wp-includes/Tex...](http://cotucung.com/wp-includes/Text/mkonline/michael-kors-handbags-outlet-from-anguilla.html)

[10.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63572) Le lundi, mai 26 2014, 13:54 par [GomsAlfred](http://www.17th-house.com/fashion/Coach-online-outlet-coupon-code-2014.html)

[http://www.17th-house.com/fashion/C...](http://www.17th-house.com/fashion/Coach-handbag-factory-outlet-online.html) Amber Portwood released from prison after serving 17 months Amber Portwood's five year prison bid also has been on skip ahead.The former "Teen Mom" star was launched from Rockville Correctional Facility Monday for only serving a few year . 5 of her original sentence, reports Us Weekly. [http://www.17th-house.com/fashion/C...](http://www.17th-house.com/fashion/Coach-outlet-in-chicago-premium-outlet.html) In my view, People who groundbreaking gun enable lug fanatically pertaining to in one week prior to the epic saga option sporting events incorrect.Test a single place of your tonsils. [http://www.17th-house.com/fashion/C...](http://www.17th-house.com/fashion/Coach-in-tanger-outlet-mall.html) Suppose its strong shades you desire, you shall definitely get single.LB Sendee Branch earns superior rating Lutheran Brotherhood Service Branch has brought superior rating to its community service activities in 1994. [http://www.17th-house.com/fashion/C...](http://www.17th-house.com/fashion/Coach-outlet-coupons-20--for-2014.html)

[11.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63677) Le mardi, mai 27 2014, 15:05 par [GomsAlston](http://worldsoccershop.playingparisian.com/)

[http://worldsoccershop.playingparis...](http://worldsoccershop.playingparisian.com/?q=Socceroos+Jerseys) Douglas became one of many big shots at Newstalk ZB in Auckland and was the one that made Wet N Forget a custom made across Nz.He also voiced many hundreds of radio ads moscow and rome three decades. [http://worldsoccershop.playingparis...](http://worldsoccershop.playingparisian.com/?q=Usa+2014+Authentic+Away+Soccer+Jerseys) The business operates from 40 locations worldwide through its subsidiaries, and features executed projects in over 45 countries.Upon taking office, Obama scrapped the shield plans and announced sweeping plans for nuclear disarmament, angering many in Europe who saw the move as quickly giving into Russia. [http://worldsoccershop.playingparis...](http://worldsoccershop.playingparisian.com/?q=Brazil+Team+Jerseys+2014) Concentrating on Canadian products, it provides a wide group of oneofakind items from local artists and craft people, including handknit sweaters and hats, BeesKnees crawling pants, stylish diaper bags, crib bedding and baby gifts.As well as wanting to own a pair of Frye boots as a consequence of all the rave reviews. [http://worldsoccershop.playingparis...](http://worldsoccershop.playingparisian.com/?q=Azzurri+Jacket)

[12.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63683) Le mardi, mai 27 2014, 15:59 par [AmosGoms](http://www.stewartfarms.net/brand/?keywords=Buy+coach+purses+online+cheap)

[http://www.stewartfarms.net/brand/?...](http://www.stewartfarms.net/brand/?keywords=Cheap+coach+laptop+bags) It might then trigger significant troubles while using the cables you would like to function using, so make certain you do not overheat the tubes.This Saturday, the Hoyas will host the Orange within the Verizon Center during the final sport of the regular season; unless they meet inside the Big East or NCAA tournaments later this month, it will likely be their last game as rivals inside same conference. [http://www.stewartfarms.net/brand/?...](http://www.stewartfarms.net/brand/?keywords=Cheap+coach+iphone+5+cases) To help complicate matters, chosen to convert my two 200 vouchers into eight 50 vouchers, that has a consequential phonetime delay in relaying eight alpha/numeric numbers from an already bewildered customer.Need to admit this place got me (but I'm staying cool). [http://www.stewartfarms.net/brand/?...](http://www.stewartfarms.net/brand/?keywords=Coach+purses+clearance) Where it had become different is in the fact that it turned out a separate organisation, registered to provide a nonprofit.They simulated top Green Bay wide receivers Randall Cobb and Jordy Nelson along with tight end Jermichael Finley as thirdstring 49ers quarterback Scott Tolzien tossed passes. [http://www.stewartfarms.net/brand/?...](http://www.stewartfarms.net/brand/?keywords=Big+coach+tote+bags)

[13.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63775) Le mercredi, mai 28 2014, 15:18 par [GomsArno](http://www.cheapmlbjerseys.com/)

Arno [http://www.coach-purse-outlets.com](http://www.coach-purse-outlets.com/) Later, your better half worked well meant for various giant wigs through fashion sector including, Martine Sitbon, as well as Yohji Yamamoto.ndiaPakistan interactions, no event throughout bilateral surroundings will create any specific improvements on the actual lifetime of the following problematic connection. [http://www.coach-purse-outlets.com](http://www.coach-purse-outlets.com/) I visiting keep pondering this one.The next Tom Brady was forced into action inside fourth quarter of Week 7 versus the Cowboys when Foles was knocked out with an injury. [http://www.cheapmlbjerseys.com](http://www.cheapmlbjerseys.com/) Before working at Dateline NBC, she covered stories from the Atlanta and Miami bureaus of NBC News.I'd say each of them have their advantages and drawbacks. [http://www.coach-purse-outlets.com](http://www.coach-purse-outlets.com/)

[14.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c63977) Le samedi, mai 31 2014, 19:57 par [Kt105a](http://www.safegrantcounty.org/?page_id=19841217)

cheap michael kors [http://www.clearcompassmedia.com#ch...](http://www.clearcompassmedia.com/#cheap) michael kors
cheap michael kors handbags [http://www.imago-d.org/?query=cheap...](http://www.imago-d.org/?query=cheap-michael-kors-handbags)
michael kors outlet online [http://www.bombsquadkittens.com/mic...](http://www.bombsquadkittens.com/michael-kors-outlet-online)
cheap christian louboutin [http://webmailitmedia.com/cheap-chr...](http://webmailitmedia.com/cheap-christian-louboutin)
michael kors bags outlet [http://www.ohiosophe.org/?start=100...](http://www.ohiosophe.org/?start=10008)
cheap michael kors purses [http://www.imago-d.org/?query=cheap...](http://www.imago-d.org/?query=cheap-michael-kors-purses)
cheap michael kors wallets [http://www.clearcompassmedia.com#ch...](http://www.clearcompassmedia.com/#cheap) michael kors wallets
michael kors handbags outlet [http://www.atomagicloud.com/michael...](http://www.atomagicloud.com/michael-kors-handbags-outlet)
cheap michael kors bags [http://www.brookfieldvt.org/cheap-m...](http://www.brookfieldvt.org/cheap-michael-kors-bags)
authentic michael kors outlet [http://www.ohiosophe.org/?start=100...](http://www.ohiosophe.org/?start=10009)

[15.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c64005) Le dimanche, juin 1 2014, 02:45 par [BarlowGoms](http://www.traxxcorp.com/cheap/?q=Coach+leather+boots+macys)

[http://www.traxxcorp.com/cheap/?q=C...](http://www.traxxcorp.com/cheap/?q=Coach+signature+handbags+sale) I am aware what you're thinking but it really seemed like the best idea at the time.Sure the NCAA and ESPN did the majority of the work, but MLL has played its part. [http://www.traxxcorp.com/cheap/?q=C...](http://www.traxxcorp.com/cheap/?q=Coach+bags+black+friday+sales) David Cameron recently made his second appearance on Mumsnet, as the Department for little ones, Schools and Families has awarded a grant to Netmums.Unwrap the Gift: Bingo is dealt with a variety of Minnie Mouse party favors similar to stickers, whistles and brushes concluded. [http://www.traxxcorp.com/cheap/?q=C...](http://www.traxxcorp.com/cheap/?q=Coach+online+sales+singapore) The oldest airgun rifles go back to 1580 and are located within a Livrustkamma.an utilize in afterwards activities. [http://www.traxxcorp.com/cheap/?q=C...](http://www.traxxcorp.com/cheap/?q=Coach+shoes+on+sale+dillards)

[16.](http://blog.debrouillonet.org/TIC/index.php/post/2012/02/20/Jouons-avec-processing-et-arduino-!#c64016) Le dimanche, juin 1 2014, 05:50 par [Kt106a](http://www.tommiekelly.com/cheap-mk.html)

faux michael kors purses [http://www.patrickseaman.com/faux-m...](http://www.patrickseaman.com/faux-michael-kors-purses)
cheap fake michael kors bags [http://www.patrickseaman.com/cheap-...](http://www.patrickseaman.com/cheap-fake-michael-kors-bags)
faux michael kors wallets [http://www.patrickseaman.com/faux-m...](http://www.patrickseaman.com/faux-michael-kors-wallets)
cheap fake michael kors purses [http://www.patrickseaman.com/cheap-...](http://www.patrickseaman.com/cheap-fake-michael-kors-purses)
cheap knock off michael kors handbags [http://www.patrickseaman.com/cheap-...](http://www.patrickseaman.com/cheap-knock-off-michael-kors-handbags)
cheap knock off michael kors purses [http://www.patrickseaman.com/cheap-...](http://www.patrickseaman.com/cheap-knock-off-michael-kors-purses)
cheap replica michael kors [http://www.patrickseaman.com/cheap-...](http://www.patrickseaman.com/cheap-replica-michael-kors)
faux michael kors handbags [http://www.patrickseaman.com/faux-m...](http://www.patrickseaman.com/faux-michael-kors-handbags)
faux michael kors bags [http://www.patrickseaman.com/faux-m...](http://www.patrickseaman.com/faux-michael-kors-bags)
cheap replica michael kors handbags [http://www.patrickseaman.com/cheap-...](http://www.patrickseaman.com/cheap-replica-michael-kors-handbags)

### Ajouter un commentaire

**Nom ou pseudo :**

**Adresse email :**

**Site web (facultatif) :**

**Commentaire :**

Le code HTML est affiché comme du texte et les adresses web sont automatiquement transformées.

**Combien font deux plus deux ?**

Se souvenir de moi sur ce blog

### La discussion continue ailleurs

URL de rétrolien : http://blog.debrouillonet.org/TIC/index.php/trackback/2277

[Fil des commentaires de ce billet](http://blog.debrouillonet.org/TIC/index.php/feed/atom/comments/2277)

## Tags

* [ajax](http://blog.debrouillonet.org/TIC/index.php/tag/ajax)

* [alix](http://blog.debrouillonet.org/TIC/index.php/tag/alix)
* [appropriation](http://blog.debrouillonet.org/TIC/index.php/tag/appropriation)
* [arduino](http://blog.debrouillonet.org/TIC/index.php/tag/arduino)
* [arduino processing expositions](http://blog.debrouillonet.org/TIC/index.php/tag/arduino%20processing%20expositions)
* [arduino squeak](http://blog.debrouillonet.org/TIC/index.php/tag/arduino%20squeak)
* [base](http://blog.debrouillonet.org/TIC/index.php/tag/base)
* [djolibois](http://blog.debrouillonet.org/TIC/index.php/tag/djolibois)
* [embarqué](http://blog.debrouillonet.org/TIC/index.php/tag/embarqu%C3%A9)
* [gentoo](http://blog.debrouillonet.org/TIC/index.php/tag/gentoo)
* [hadopi](http://blog.debrouillonet.org/TIC/index.php/tag/hadopi)
* [html](http://blog.debrouillonet.org/TIC/index.php/tag/html)
* [javascript](http://blog.debrouillonet.org/TIC/index.php/tag/javascript)
* [Jeux vidéos](http://blog.debrouillonet.org/TIC/index.php/tag/Jeux%20vid%C3%A9os)
* [openbsd](http://blog.debrouillonet.org/TIC/index.php/tag/openbsd)
* [pecl](http://blog.debrouillonet.org/TIC/index.php/tag/pecl)
* [php](http://blog.debrouillonet.org/TIC/index.php/tag/php)
* [processing](http://blog.debrouillonet.org/TIC/index.php/tag/processing)
* [UPC](http://blog.debrouillonet.org/TIC/index.php/tag/UPC)
* [web](http://blog.debrouillonet.org/TIC/index.php/tag/web)

**[Tous les tags](http://blog.debrouillonet.org/TIC/index.php/tags)**

## Catégories

* [Pistes Pédagogiques](http://blog.debrouillonet.org/TIC/index.php/category/Pistes-P%C3%A9dagogiques)

* [Electronique](http://blog.debrouillonet.org/TIC/index.php/category/Electronique)
* [Informatique](http://blog.debrouillonet.org/TIC/index.php/category/Informatique)
* [Upc et ses suites](http://blog.debrouillonet.org/TIC/index.php/category/Upc-et-ses-suites)

## Rechercher

## S'abonner

* [Fil des billets](http://blog.debrouillonet.org/TIC/index.php/feed/atom)

* [Fil des commentaires](http://blog.debrouillonet.org/TIC/index.php/feed/atom/comments)

Propulsé par [Dotclear](http://dotclear.org/)
