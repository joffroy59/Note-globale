---
title: "Installer Flux AI en local en moins de 15 minutes"
source: "https://www.stablediffusion.blog/installer-flux-local"
author:
  - "[[Stable Tom]]"
published: 2024-11-05
created: 2025-01-27
description: "Le guide complet pour installer et utiliser Flux AI pour générer des images sur votre ordinateur"
tags:
  - "clippings"
---
Vous avez probablement entendu des histoires de dingue sur l’installation de *Flux* en local et sa prétendue difficulté.

Dans les forums, on en parle comme d’une véritable galère.

Des gens y ont passé une journée entière jours, luttant pour générer leur première image au bout de longue heures d’installation.

Pas de panique.

J’ai préparé pour vous une méthode simple et rapide qui va vous épargner toutes ces peines.

En suivant ce guide, vous aurez *Flux* prêt à l’emploi en à peine 15 minutes.

## Pré-requis

Nous allons voir comment installer Flux en local à l’aide d’un programme super-pratique : Stability Matrix. Ce programme va vous permettre de faire fonctionner Flux sans prise de tête ni configuration compliquée.

Pour que cela fonctionne correctement, assurez-vous cependant d’avoir un ordinateur capable de faire fonctionner Flux. C’est à dire une machine sous Linux ou Windows disposant d’un GPU NVIDIA d’au moins 8GB de VRAM (Linux ou Windows).

Il reste possible de faire fonctionner Flux avec moins de VRAM ou des machines moins performantes, mais c’est moins évident et je ne peux pas vous promettre que vous y parviendrez en moins de 10 minutes…

Il est également possible de faire fonctionner Flux localement sur Mac mais ce guide repose sur une version rapide qui ne marche qu’avec un GPU. Les utilisateur Apple sont donc inviter à consulter notre article complet [Comment installer Flux sur Mac ?](https://www.stablediffusion.blog/flux-ia-mac) qui détaille les différentes solutions possibles.

## Pourquoi Installer Flux en local ?

Installer Flux en local présente plusieurs avantages majeurs pour les créateurs et les professionnels.

Tout d'abord, vous bénéficiez d'une utilisation totalement **gratuite et illimitée** de l'IA, sans avoir à acheter des crédits ou à payer un abonnement mensuel.

De plus, vous gardez un contrôle total sur vos créations, **sans censure ni restrictions**, ce qui est particulièrement important pour les projets créatifs ou professionnels.

💡

Assurez-vous de suivre chaque étape à la lettre. Manquer un détail, et c’est le retour à la case départ. Mais ne vous inquiétez pas, je vais rendre ça simple.

### 1\. Télécharger Stability Matrix

[![https://lykos-ai.itch.io/stability-matrix](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-8011-90d1-dc8c4c8dd557/28dd794d-90bf-42dd-b026-a9ce6abb3c84/7c808dbd-6da5-4c65-932d-5d55f9286ab8/stability-matrix-cover.webp)

](https://lykos-ai.itch.io/stability-matrix)

C’est la première astuce qui va vraiment vous simplifier la vie !

Cette application va vous éviter les tracas de la ligne de commande et du code en Python.

Vous n’avez qu'à cliquer sur un bouton pour commencer.

Téléchargez la dernière version via les bouton ci-dessous ou via le [site web](https://lykos-ai.itch.io/stability-matrix) ou le [github](https://github.com/LykosAI/StabilityMatrix) de Stability Matrix.

Le fichier téléchargé est une fichier compressé qui contient le programme.

Décompressez simplement le fichier, et c’est bon, vous avez Stability Matrix.

Placez-le dans votre dossier Applications ou Programmes pour le retrouver facilement la prochaine fois.

### 2\. Démarrer Stability Matrix

Double-cliquez sur le programme pour le lancer.

Stability Matrix va alors vérifier que votre ordinateur est compatible.

Cochez la case pour accepter les conditions d’utilisation et faites simplement *Continue* pour passer à l’étape suivante.

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-80c8-820b-f8e169a23b90/28dd794d-90bf-42dd-b026-a9ce6abb3c84/b9280c6f-e84b-4a80-b336-d6fd7e5f1811/image.png)

L’étape suivante est très importante - lisez bien ce qui suit et ne le passez pas.

Vous pouvez choisir l’emplacement où vous souhaitez stocker les fichiers utilisés par Stability Matrix : modèle, LoRAs, images,…

Tout cela représente un GROS volumes de données - choisissez donc un disque dur avec suffisamment d’espace disponible (au moins 15 Giga).

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-8025-99b5-fc4dbe7af55b/28dd794d-90bf-42dd-b026-a9ce6abb3c84/3dca4aab-68b4-4feb-99a1-12eb3a256b0d/image.png)

Si vous n’avez qu’un seul disque, le mode *Portable* est pratique car il enregistre les données au même endroit que l’application.

Mais si vous avez plusieurs disque, je conseille quand même dz créer et choisir un repertoire dédié sur votre disque de stockage pour ne pas surcharger le disque système.

Dans tous las cas, Retenez bien où vous avez choisis d’enregistrer les fichiers de Stability Matrix - nous en aurons besoin par la suite..

### 3\. Installer Forge WebUI

Après avoir choisis l’emplacement et fait *Continue*, cliquez sur **Stable Diffusion WebUI Forge** (a priori, la première case) dans la fenêtre suivante.

Cela va installer l’interface de Forge qui est compatible avec Stable Diffusion mais aussi, et c’est ce qui nous intéresse, avec Flux !

Ce processus va prendre quelques minutes - selon les performances de votre ordinateur et de sa connexion internet.

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-803a-ae73-e4b72fc5a74d/28dd794d-90bf-42dd-b026-a9ce6abb3c84/3473b9ee-d118-4247-912c-98724c4baf94/image.png)

Parfois, l’installation échoue et un paquet de texte en touge s’affiche. Ne paniquez pas, 99% du temps, il suffit de relancer l’installation pour régler le problème 😅

Pendant l’installation, Stability Matrix va vous proposer de télécharger des modèles Stable Diffusion - Mais nous voulons installer Flux et vous pouvez donc ignorer ces suggestions en cliquant sur *Close.*

❓

#### Pourquoi choisir Forge ?

Forge n’est pas la seule interface disponible dans Stability Matrix pour utiliser Flux. Vous pourriez en choisir une autre, comme ComfyUI qui est plus complète et permet d’autres utilisation de l’IA.

Mais pour une première installation et débuter avec Flux rapidement et facilement, Forge est à mon sens la meilleure solution.

Une fois que vous aurez pris en main Flux et la génération d’image, il sera toujours temps de passer à une autre interface selon vos besoins et envies.

### 4\. Télécharger Flux et ses fichiers

Flux se décline en plusieurs versions et variantes - avec des exigences matérielles différentes.

Pour faire simple, nous allons utilisez la version de [Flux Dev NF4](https://www.stablediffusion.blog/flux-nf4) qui propose un bon équilibre entre qualité, performances et exigences techniques.

- Rendez-vous sur[l](https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4-v2.safetensors)a page du modèle sur Hugging Face: [https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4-v2.safetensors](https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4-v2.safetensors)

- Cliquez sur *download* pour télécharger le fichier. Attention que le fichier fait 12GB 😮 ca peut prendre plusieurs minutes à télécharger !

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-8069-aaab-cbacb307d3e5/28dd794d-90bf-42dd-b026-a9ce6abb3c84/fd41b761-4299-41bb-b947-504896b87fee/image.png)

- Ouvrez l’emplacement choisis plus tot pour enregistrer les fichiers de Stability Matrix. Si vous avez choisis le mode *portable*, il s’agit du repertoire data situé au même endroit que le programme.

- Placez le fichier `flux1-dev-bnb-nf4-v2.safetensors` que vous venez de télécharger pour le mettre dans le repertoire `/Models/StableDiffusion` situé à l’emplacement des fichiers Stability Matric.

📎

Si vous souhaitez utiliser une autre version de Flux, vous la trouverez sur notre page de [liens pour télécharger Flux](https://www.stablediffusion.blog/download-flux-ia) et pourrez utiliser le fichier choisis en suivant le reste de ce tutoriel.

### 5\. Lancer Forge WebUI

Voilà, l’installation de Flux en elle-même est techniquement terminée.

Nous allons maintenant pouvoir lancer l’interface de Forge, ce qui va nous permettre de vérifier que tout fonctionne et surtout, de générer nos première images !

Retournez dans stability Matrix pour lancer *Stable Diffusion WebUI Forge* en cliquant sur le bouton bleu *Launch.*

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-80f3-899a-f5ca95c5ecc8/28dd794d-90bf-42dd-b026-a9ce6abb3c84/fb35ba38-f3bd-494b-bd04-7ae240122185/image.png)

Le premier lancement est un peu long : L’interface va se lancer, en téléchargeant une série de composant dont elle à besoin. Une série d’informations s’affiche, c’est impressionant mais ne vous inquiétez pas, c’est normal.

Quand tout est pret, Forge WebUI devrait s’ouvrir tout seul dans votre navigateur. si ce n’est pas le cas, cliquez sur le bouton *Open Web UI* qui est apparu en haut de la fenêtre :

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-803f-9f9a-d36dd5c43a34/28dd794d-90bf-42dd-b026-a9ce6abb3c84/c181ae5a-9dee-4f50-8e88-ac942daf9b57/image.png)

Configurer l’interface de Forge comme dans la capture d’écran ci-dessous (la votre sera peut-être sur fond blanc, mais le reste est pareil). C’est à dire que dans la partie supérieure, il faut cocher *flux* dans la section *UI* et sélectionner `flux1-dev-bnb-nf4-v2.safetensors` comme *checkpoint.*

![notion image](https://usenotioncms.com/proxy-prod/block/1353cf2f-141e-80ee-b513-cc1298124d27/28dd794d-90bf-42dd-b026-a9ce6abb3c84/18142c21-bcea-4fa4-81cd-096f6b0bdf21/image.png)

Il ne reste plus qu’à écrire votre prompt, c’est à dire la description de votre image, dans le champ correspondant sous l’onglet *text-to-image* puis à cliquer sur le gros bouton *Generate* à droite pour créer votre première image (qui mettra plus ou moins longtemps à apapraitre, selon la puissance de votre GPU).

**🎉 Ca y’est, vous avez réussis à installer Flux localement et pouvez maintenant générer gratuitement des images sur votre ordinateur !**

Vous avez maintenant tout ce qu’il faut pour créer des images avec *Flux* localement, sans restrictions ni frais. Lancez-vous, testez différents prompts, et explorez les possibilités infinies de cet outil puissant directement sur votre propre ordinateur.