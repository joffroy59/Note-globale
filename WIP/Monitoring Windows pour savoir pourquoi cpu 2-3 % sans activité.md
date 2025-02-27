---
tags:
  - status/wip
---

#todo  info sur application lancé et un ou 2 rapports  exemple 



les évènement Missed semble être du au analyse longue qui demande trop de mémoire pour stocker les infos


```ad-tip
collapse: Closed

win11
Recherchez pourquoi 37 % d’événements (23,097) ont été perdus lors de la collecte des données. Les paramètres des zones tampon maximales et la taille de tampon pour Suivi d’événements pour Windows (ETW) ne sont peut-être pas optimaux par rapport aux jeux de données collectés.

Pour comprendre pourquoi 37 % des événements (23,097) ont été perdus lors de la collecte des données avec le Suivi d’événements pour Windows (ETW), il est important de vérifier plusieurs paramètres et configurations. Voici quelques étapes et conseils pour diagnostiquer et résoudre ce problème :

Vérifiez les paramètres de la zone tampon maximale :

La taille de la zone tampon maximale détermine la quantité de mémoire allouée pour stocker les événements avant qu'ils ne soient traités ou enregistrés. Si cette zone tampon est trop petite, elle peut se remplir rapidement et entraîner la perte d'événements.
Vous pouvez augmenter la taille de la zone tampon maximale pour voir si cela réduit la perte d'événements.
Ajustez la taille du tampon :

La taille du tampon détermine la quantité de données qui peuvent être stockées temporairement avant d'être traitées. Si le tampon est trop petit, il peut se remplir rapidement et entraîner la perte d'événements.
Augmentez la taille du tampon pour voir si cela réduit la perte d'événements.
Analysez le débit des événements :

Si le débit des événements est très élevé, même une grande zone tampon peut se remplir rapidement. Vous pouvez utiliser des outils comme PerfView ou Windows Performance Analyzer (WPA) pour analyser le débit des événements et identifier les périodes de pointe.
Si possible, réduisez le débit des événements en ajustant les filtres ou en réduisant le nombre de fournisseurs d'événements.
Optimisez les fournisseurs d'événements :

Assurez-vous que seuls les fournisseurs d'événements nécessaires sont activés. Désactivez les fournisseurs d'événements non essentiels pour réduire la charge sur le système.
Utilisez des filtres pour capturer uniquement les événements pertinents.
Vérifiez les ressources système :

Assurez-vous que le système dispose de suffisamment de ressources (CPU, mémoire, disque) pour gérer la collecte des événements. Un manque de ressources peut entraîner la perte d'événements.
Surveillez l'utilisation des ressources pendant la collecte des événements pour identifier les goulots d'étranglement.
Utilisez des outils de diagnostic :

Utilisez des outils comme PerfView, WPA, ou Logman pour diagnostiquer les problèmes de perte d'événements. Ces outils peuvent fournir des informations détaillées sur les événements perdus et les raisons de leur perte.
Consultez la documentation et les forums :

Consultez la documentation officielle de Microsoft sur ETW pour obtenir des conseils et des meilleures pratiques.
Recherchez des discussions sur des forums techniques ou des communautés en ligne pour voir si d'autres utilisateurs ont rencontré des problèmes similaires et comment ils les ont résolus.
En ajustant ces paramètres et en utilisant les outils de diagnostic appropriés, vous devriez être en mesure de réduire la perte d'événements et d'optimiser la collecte des données avec ETW.

view lost event

Pour visualiser les événements perdus lors de la collecte de données avec le Suivi d’événements pour Windows (ETW), vous pouvez utiliser des outils comme PerfView ou Windows Performance Analyzer (WPA). Ces outils permettent d'analyser les traces ETW et de visualiser les événements perdus. Voici comment procéder avec chacun de ces outils :

Utilisation de PerfView
Téléchargez et installez PerfView :

Vous pouvez télécharger PerfView depuis le site officiel de GitHub.
Collectez une trace ETW :

Ouvrez PerfView et cliquez sur Collect pour démarrer une nouvelle session de collecte.
Sélectionnez les fournisseurs d'événements que vous souhaitez surveiller et configurez les paramètres de la zone tampon et du tampon selon vos besoins.
Cliquez sur Start Collection pour commencer la collecte des données.
Analysez la trace :

Une fois la collecte terminée, ouvrez la trace dans PerfView.
Allez dans le menu Events et sélectionnez Lost Events.
PerfView affichera une liste des événements perdus et des informations sur les raisons de leur perte.
Utilisation de Windows Performance Analyzer (WPA)
Téléchargez et installez WPA :

WPA fait partie du Windows Assessment and Deployment Kit (ADK). Vous pouvez le télécharger depuis le site officiel de Microsoft.
Collectez une trace ETW :

Utilisez Windows Performance Recorder (WPR) pour collecter une trace ETW. WPR est inclus avec WPA.
Ouvrez WPR et sélectionnez les profils de collecte que vous souhaitez utiliser.
Cliquez sur Start pour commencer la collecte des données.
Analysez la trace :

Une fois la collecte terminée, ouvrez la trace dans WPA.
Dans WPA, allez dans le menu Analysis et sélectionnez Lost Events.
WPA affichera une liste des événements perdus et des informations sur les raisons de leur perte.
Conseils supplémentaires
Filtrage des événements : Utilisez des filtres pour vous concentrer sur les événements perdus spécifiques à votre scénario.
Analyse des ressources : Surveillez l'utilisation des ressources système (CPU, mémoire, disque) pendant la collecte des événements pour identifier les goulots d'étranglement.
Documentation et forums : Consultez la documentation officielle de Microsoft et les forums techniques pour obtenir des conseils supplémentaires et des meilleures pratiques.
En suivant ces étapes, vous devriez être en mesure de visualiser les événements perdus et de diagnostiquer les raisons de leur perte, ce qui vous aidera à optimiser la collecte des données avec ETW.

show missed event in .ETL

Pour visualiser les événements manqués dans un fichier .ETL (Event Trace Log) collecté avec le Suivi d’événements pour Windows (ETW), vous pouvez utiliser des outils comme Windows Performance Analyzer (WPA) ou PerfView. Voici comment procéder avec chacun de ces outils :

Utilisation de Windows Performance Analyzer (WPA)
Téléchargez et installez WPA :

WPA fait partie du Windows Assessment and Deployment Kit (ADK). Vous pouvez le télécharger depuis le site officiel de Microsoft.
Ouvrez le fichier .ETL dans WPA :

Lancez WPA.
Allez dans File > Open et sélectionnez votre fichier .ETL.
Analysez les événements manqués :

Une fois le fichier .ETL ouvert, allez dans le menu Analysis et sélectionnez Lost Events.
WPA affichera une liste des événements manqués et des informations sur les raisons de leur perte.
Utilisation de PerfView
Téléchargez et installez PerfView :

Vous pouvez télécharger PerfView depuis le site officiel de GitHub.
Ouvrez le fichier .ETL dans PerfView :

Lancez PerfView.
Allez dans File > Open et sélectionnez votre fichier .ETL.
Analysez les événements manqués :

Une fois le fichier .ETL ouvert, allez dans le menu Events et sélectionnez Lost Events.
PerfView affichera une liste des événements manqués et des informations sur les raisons de leur perte.
Étapes détaillées pour WPA
Ouvrir WPA :

Lancez Windows Performance Analyzer (WPA).
Charger le fichier .ETL :

Cliquez sur File > Open et sélectionnez votre fichier .ETL.
Naviguer vers les événements manqués :

Une fois le fichier chargé, allez dans le menu Analysis et sélectionnez Lost Events.
Vous pouvez également utiliser la barre de recherche pour taper Lost Events et trouver les informations pertinentes.
Analyser les résultats :

WPA affichera une liste des événements manqués, ainsi que des détails sur les raisons de leur perte. Vous pouvez utiliser ces informations pour ajuster les paramètres de votre session ETW et réduire la perte d'événements.
Étapes détaillées pour PerfView
Ouvrir PerfView :

Lancez PerfView.
Charger le fichier .ETL :

Cliquez sur File > Open et sélectionnez votre fichier .ETL.
Naviguer vers les événements manqués :

Une fois le fichier chargé, allez dans le menu Events et sélectionnez Lost Events.
Vous pouvez également utiliser la barre de recherche pour taper Lost Events et trouver les informations pertinentes.
Analyser les résultats :

PerfView affichera une liste des événements manqués, ainsi que des détails sur les raisons de leur perte. Utilisez ces informations pour ajuster les paramètres de votre session ETW et réduire la perte d'événements.
En suivant ces étapes avec WPA ou PerfView, vous devriez être en mesure de visualiser les événements manqués dans votre fichier .ETL et de diagnostiquer les raisons de leur perte.

pas de menu Analysis dans WPA

Je m'excuse pour la confusion. Vous avez raison, il n'y a pas de menu Analysis dans Windows Performance Analyzer (WPA). Pour visualiser les événements manqués dans un fichier .ETL avec WPA, vous devez suivre une approche différente. Voici les étapes détaillées pour y parvenir :

Utilisation de Windows Performance Analyzer (WPA)
Téléchargez et installez WPA :

WPA fait partie du Windows Assessment and Deployment Kit (ADK). Vous pouvez le télécharger depuis le site officiel de Microsoft.
Ouvrez le fichier .ETL dans WPA :

Lancez WPA.
Allez dans File > Open et sélectionnez votre fichier .ETL.
Analysez les événements manqués :

Une fois le fichier .ETL ouvert, vous verrez une liste de graphiques et de tableaux dans le panneau de gauche.
Recherchez les graphiques ou tableaux qui montrent les événements perdus. Cela peut inclure des graphiques comme CPU Usage (Sampled), Disk I/O, ou Generic Events.
Filtrer les événements perdus :

Vous pouvez utiliser les filtres pour affiner les événements et identifier ceux qui ont été perdus.
Cliquez sur l'icône de filtre (entonnoir) dans la barre d'outils ou utilisez le panneau de filtres pour ajouter des conditions spécifiques.
Examiner les détails des événements :

Cliquez sur les événements dans les graphiques ou tableaux pour voir plus de détails.
Recherchez des indications de perte d'événements, comme des messages d'erreur ou des interruptions dans les données.
Utilisation de PerfView
Téléchargez et installez PerfView :

Vous pouvez télécharger PerfView depuis le site officiel de GitHub.
Ouvrez le fichier .ETL dans PerfView :

Lancez PerfView.
Allez dans File > Open et sélectionnez votre fichier .ETL.
Analysez les événements manqués :

Une fois le fichier .ETL ouvert, allez dans le menu Events et sélectionnez Lost Events.
PerfView affichera une liste des événements manqués et des informations sur les raisons de leur perte.
Conseils supplémentaires
Documentation et forums : Consultez la documentation officielle de Microsoft et les forums techniques pour obtenir des conseils supplémentaires et des meilleures pratiques.
Ajustements des paramètres : Si vous identifiez des événements manqués, ajustez les paramètres de la zone tampon et du tampon dans votre session ETW pour réduire la perte d'événements.
En suivant ces étapes avec WPA ou PerfView, vous devriez être en mesble de visualiser les événements manqués dans votre fichier .ETL et de diagnostiquer les raisons de leur perte.
```


- Windows Performance Analyzer (WPA)
- Windows Performance Recorder (WPR)

ℹ️déjà installés 


