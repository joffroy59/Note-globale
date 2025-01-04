---
tags:
  - Exemple
  - template
---

# ⚠️ Test correction avec IA des fautes faites

```embed
title: "Le jeu du texte à corriger : testez votre orthographe • Champ d'écriture"
image: "https://champdecriture.net/wp-content/uploads/2022/04/jeu-des-erreurs.jpg"
description: "Un texte à corriger pour tester votre niveau en orthographe de façon ludique, avec la correction et toutes les explications."
url: "https://champdecriture.net/le-jeu-du-texte-a-corriger-testez-votre-orthographe/"
```

## Test Correcteur de faute avec LLM local 

### Texte original avec Fautes 
```ad-example
title: Avec Faute
collapse: open

## La vie quotidienne de l’écrivain public :

Le réveille sonne à 6 h 15, et elle commence la journée par deux voir trois tasses de café noir bien chaud en écrivant dans son journal : elle aime débutez en douceur, sans écran, avec du papier, des feutres et un bon vieux stylo plume.

Une fois que le reste de la famille est parti, vers 7 heures, elle allume son ordinateur et sont téléphone, et commence par les taches administratives diverses : courriels, gestion de son site et de ces pages sur les réseaux sociaux, démarches diverses.

Elle s’attelle ensuite a tout ce qui demandent de la concentration : l’écriture proprement dite, qu’il s’agisse d’un projet pour un client, d’un article pour le site ou de ses écrits personnels si elle n’a rien en commande.

Elle considère essentiel d’étudier sans cesse et d’élargir ses compétences : par example elle apprend à utiliser WordPress et le référencement en ligne pour amélioré son site.

Par ailleurs un écrivain public ce doit de se former continuellement à l’orthographe, car si on veut rester performant, une langue sa s’entretient. C’est pourquoi elle ce prépare à passer un certificat d’orthographe le mois prochain.

En parallèle, elle est rester formatrice et assure quelques cours d’anglais pour adultes.

Elle passe une partie de son temps libre avec ça jument et sont poulain qui, a six mois, fait beaucoup de bêtises : « Vient ici ! Arrêtes de manger ma manche ! » son des phrases récurrentes…
```

### Test avec Gpt

#### Test 1 

> [!info]
> Plugin :  Local GPT
> Task :   📖 Fix spelling and grammar ✂️


##### resultat

```ad-hint
title: Resultat

Here is the corrected version of your text:

## Daily Life of a Freelance Writer:

The alarm rings at 6:15 AM, and she starts her day with two or three cups of hot black coffee while writing in her journal. She prefers to begin gently, without a screen, using paper, pens, and an old fountain pen.

Once the rest of the family has left, around 7 AM, she turns on her computer and phone, and begins with various administrative tasks: emails, managing her site and social media pages, miscellaneous tasks.

She then tackles everything that requires concentration: writing properly, whether it's a project for a client, an article for the site or her personal writings if she has nothing commissioned.

She considers it essential to study constantly and expand her skills: for example, she learns to use WordPress and online SEO to improve her site.

In addition, a freelance writer must continually educate themselves regarding orthography, as language requires maintenance. That's why she is preparing to take an orthography certificate next month.

Meanwhile, she continues to teach English to adults.

She spends part of her free time with her horse and foal who, at six months old, are quite mischievous: "Come here!" "Stop eating my sleeve!" are frequent phrases...
```

```ad-fail

en Anglais #problem 
```


#### Test 2

> [!info]
> Plugin :  Local GPT
> Task : 📖 Corrigez l'orthographe et la grammaire ✂️
> Type: personal 

##### resultat

```ad-hint
title: Resultat

## La vie quotidienne de l’écrivain public :

Le réveil sonne à 6 h 15, et elle commence la journée par deux ou trois tasses de café noir bien chaud en écrivant dans son journal : elle aime débuter en douceur, sans écran, avec du papier, des feutres et un bon vieux stylo plume.

Une fois que le reste de la famille est parti, vers 7 heures, elle allume son ordinateur et son téléphone, et commence par les tâches administratives diverses : courriels, gestion de son site et de ces pages sur les réseaux sociaux, démarches diverses.

Elle s’attelle ensuite à tout ce qui demande de la concentration : l’écriture proprement dite, qu'il s'agisse d'un projet pour un client, d'un article pour le site ou de ses écrits personnels si elle n'a rien en commande.

Elle considère essentiel d'étudier sans cesse et d'élargir ses compétences : par exemple, elle apprend à utiliser WordPress et le référencement en ligne pour améliorer son site.

Par ailleurs, un écrivain public doit de se former continuellement à l'orthographe, car si on veut rester performant, une langue s’entretient. C’est pourquoi elle prépare à passer un certificat d'orthographe le mois prochain.

En parallèle, elle est restée formatrice et assure quelques cours d'anglais pour adultes.

Elle passe une partie de son temps libre avec sa jument et son poulain qui, à six mois, fait beaucoup de bêtises : « Vient ici ! Arrête de manger ma manche ! » Sont phrases récurrentes...
```

```ad-caution

des fautes non corrigées et des mots remplacés (mais a priori pas le sens)  
```


> [!info] 
> pas de correction d'un seul mot , remplace apr un paragraphe ...  



### Bon résultat - CIBLE

```ad-abstract
title: Bon texte Corrigé
collapse: closed 

## Texte corrigé :

Le réveil (1) sonne à 6 h 15, et elle commence la journée par deux voire (2) trois tasses de café noir bien chaud en écrivant dans son journal : elle aime débuter (3) en douceur, sans écran, avec du papier, des feutres et un bon vieux stylo plume.

Une fois que le reste de la famille est parti, vers 7 heures, elle allume son ordinateur et son (4) téléphone, et commence par les tâches (5) administratives diverses : courriels, gestion de son site et de ses (6) pages sur les réseaux sociaux, démarches diverses.

Elle s’attelle ensuite à (7) tout ce qui demande (8) de la concentration : l’écriture proprement dite, qu’il s’agisse d’un projet pour un client, d’un article pour le site ou de ses écrits personnels si elle n’a rien en commande.

Elle considère essentiel d’étudier sans cesse et d’élargir ses compétences : par exemple (9) elle apprend à utiliser WordPress et le référencement en ligne pour améliorer (10) son site.

Par ailleurs un écrivain public se (11) doit de se former continuellement à l’orthographe, car si on veut rester performant, une langue ça (12) s’entretient. C’est pourquoi elle se (13) prépare à passer un certificat d’orthographe le mois prochain.

En parallèle, elle est restée (14) formatrice et assure quelques cours d’anglais pour adultes.

Elle passe une partie de son temps libre avec sa (15) jument et son (16) poulain qui, à (17) six mois, fait beaucoup de bêtises : « Viens (18) ici ! Arrête (19) de manger ma manche ! » sont (20) des phrases récurrentes…
```


```ad-abstract
title: Explications
collapse: closed 

## Explications :

1. un réveil : nom masculin / réveille : forme conjuguée du verbe « réveiller »

2. voir : verbe lié au sens de la vue / voire : adverbe signifiant « et même »

3. débutez : impératif ou présent de l’indicatif 2e personne du pluriel (vous débutez) / débuter : infinitif.

Pour différencier les deux à l’oreille, remplacez le verbe par « prendre » : si dans la phrase vous pouvez dire « prenez », il s’agit de « débutez » ; si vous dites « prendre », ce sera « débuter » ; et si vous dites « pris/prise » il s’agira du participe passé « débuté / débutée »

4. son : adjectif possessif / sont : verbe être à la 3e du pluriel du présent de l’indicatif.

Si vous pouvez remplacer par « mon », il s’agit du possessif « son » ; si vous pouvez remplacer par « étaient », il s’agit du verbe « sont ».

5. tache : marque, trace, salissure / tâche : besogne, travail

6. ces : adjectif démonstratif / ses : adjectif possessif.

On peut remplacer « ces (mots) » par « ces mots-là » ; on peut remplacer « ses (mots) » par « les siens, ses mots à lui/elle » ou encore par « mes, tes (mots) ».

7. à : préposition introduisant un complément / a : verbe avoir conjugué à la 3e personne du singulier.

« à » suivi d’un nom masculin ou pluriel devient « au / aux » ; si vous mettez la phrase au futur, le verbe « a » sera remplacé par « aura ».

8. demande / demandent : 3e personne du singulier / du pluriel. « Tout » utilisé en pronom singulier est suivi d’un verbe conjugué au singulier.

9. exemple : la graphie française est avec un -e- / example : le même mot… en anglais !

10. amélioré : participe passé / améliorer : infinitif. Voir erreur n° 3.

11. se : pronom personnel 3e personne du singulier / ce : adjectif démonstratif.

« ce (mot) » donnera « cette (phrase) » au féminin, tandis que « se » peut être repris par « elle- / lui-même »

12. ça : remplace à l’oral et dans la langue familière « cela » / sa : adjectif possessif suivi d’un nom féminin, « la sienne ».

13. se / ce : voir n° 11.

14. restée / rester : voir n° 3.

15. sa / ça : voir n° 12.

16. son / sont : voir n° 4.

17. à / a : voir n° 7.

18. viens : de venir, verbe du 3e groupe en -ir.

La conjugaison des verbes du 3e groupe en -ir au présent de l’indicatif et à l’impératif est la suivante : « je viens, tu viens, il vient, viens ! », « je sens, tu sers, il court, fuis ! » – sauf pour les verbes cueillir, accueillir, et couvrir « je cueille, tu couvres, il couvre, accueille-les ».

19. arrête : d’arrêter, verbe du 1er groupe en -er.

L’impératif des verbes du 1er groupe ne prend PAS de -s, pas plus que la 1re personne du singulier au présent de l’indicatif — alors que la 2e personne du singulier en prend un : « j’arrête, tu arrêtes, arrête ! ».

20. son / sont : voir n° 4.
```





# ✅ Test avec un seul mot et au autre prompt [[📖 Corrige ✂️]]


```ad-example
title: Avec Faute
collapse: open

resultat
```


> [!fail] 
> Correction: resultat (French) = result (English). The correct spelling is "result" in English and "résultat" in French.

🛠️ modification du "prompt"

> [!fail] 
> Résultat (en français, résultat est masculin singulier)


🛠️ modification du "prompt"

```ad-success

Résultat
```





