---
tags:
  - IA
  - template
---
# ![[Pasted image 20241230225441.png]] Stability Matrix



```embed
title: "StabilityMatrix/README.md at main · LykosAI/StabilityMatrix"
image: "https://repository-images.githubusercontent.com/652941996/411b1f33-c5ab-49af-b3b3-db93a89d9d8d"
description: "Multi-Platform Package Manager for Stable Diffusion - LykosAI/StabilityMatrix"
url: "https://github.com/LykosAI/StabilityMatrix/blob/main/README.md"
```

## Description
Stability Matrix est un gestionnaire de paquets multi-plateformes et une interface d'inférence pour Stable Diffusion. Il permet l'installation et la mise à jour en un clic pour divers paquets de Stable Diffusion Web UI.

## Fonctionnalités Principales
- **Interfaces Utilisateurs Supportées**: Automatic 1111, SD Web UI-UX, ComfyUI, et bien d'autres.
- **Gestion des Plugins/Extensions**: Permet de gérer les plugins et extensions pour les paquets pris en charge.
- **Dépendances Python**: Installation ou mise à jour facile des dépendances Python pour chaque paquet.
- **Portabilité**: Complètement portable, permettant de déplacer le répertoire de données vers un autre disque ou ordinateur.
- **Interface d'Inférence**: Une interface repensée pour Stable Diffusion, intégrée à Stability Matrix.
- **Gestionnaire de Points de Contrôle**: Configuré pour être partagé par toutes les installations de paquets.
- **Navigateur de Modèles**: Importation de modèles depuis CivitAI et HuggingFace avec métadonnées et images de prévisualisation.
- **Personnalisation des Lancements**: Interface de lancement personnalisable avec émulateur de terminal, rendant l'utilisation de Stable Diffusion plus flexible et adaptée à vos préférences.
- **Compatibilité Étendue**: Disponible sur Windows, Mac et Linux, Stability Matrix est conçu pour être accessible à un large éventail d'utilisateurs.
- **Auto-complétion et Surlignage Syntaxique**: Utilisation d'une grammaire formelle pour l'auto-complétion et le surlignage syntaxique.
- **Gestion des Projets**: Les espaces de travail s'ouvrent dans des onglets qui sauvegardent et chargent à partir de fichiers .smproj.
- **Galerie et Métadonnées**: Les images générées contiennent des métadonnées compatibles avec Inference Project, ComfyUI Nodes, et A1111.
- **Téléchargements**: Pause et reprise des téléchargements, même après la fermeture de l'application.

## Détails Supplémentaires
- **Embarqué Git et Dépendances Python**: Pas besoin d'installer Git ou Python globalement.
- **Drag and Drop**: Glisser-déposer des images ou des fichiers pour charger des états.
- **Variables d'Environnement Configurables**: Éditeur d'arguments de lancement avec options prédéfinies ou personnalisées pour chaque installation de paquet.
- **Gestionnaire de Points de Contrôle**: Configuré pour être partagé par toutes les installations de paquets.
- **Navigateur de Modèles**: Importation de modèles depuis CivitAI et HuggingFace avec métadonnées et images de prévisualisation.
- **Téléchargements**: Pause et reprise des téléchargements, même après la fermeture de l'application.


```embed
title: "Fetching"
image: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1pY3Jvc29mdCIgd2lkdGg9IjgwcHgiICBoZWlnaHQ9IjgwcHgiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjxjaXJjbGUgY3g9IjgxLjczNDEzMzYxMTY0OTQxIiBjeT0iNzQuMzUwNDU3MTYwMzQ4ODIiIGZpbGw9IiNlMTViNjQiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM0MC4wMDEgNDkuOTk5OSA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49IjBzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijc0LjM1MDQ1NzE2MDM0ODgyIiBjeT0iODEuNzM0MTMzNjExNjQ5NDEiIGZpbGw9IiNmNDdlNjAiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM0OC4zNTIgNTAuMDAwMSA1MC4wMDAxKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMDYyNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjUuMzA3MzM3Mjk0NjAzNiIgY3k9Ijg2Ljk1NTE4MTMwMDQ1MTQ3IiBmaWxsPSIjZjhiMjZhIiByPSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzNTQuMjM2IDUwIDUwKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMTI1cyI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1NS4yMjEwNDc2ODg4MDIwNyIgY3k9Ijg5LjY1Nzc5NDQ1NDk1MjQxIiBmaWxsPSIjYWJiZDgxIiByPSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzNTcuOTU4IDUwLjAwMDIgNTAuMDAwMikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49Ii0wLjE4NzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ0Ljc3ODk1MjMxMTE5NzkzIiBjeT0iODkuNjU3Nzk0NDU0OTUyNDEiIGZpbGw9IiM4NDliODciIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM1OS43NiA1MC4wMDY0IDUwLjAwNjQpIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiIGJlZ2luPSItMC4yNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzQuNjkyNjYyNzA1Mzk2NDE1IiBjeT0iODYuOTU1MTgxMzAwNDUxNDciIGZpbGw9IiNlMTViNjQiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDAuMTgzNTUyIDUwIDUwKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMzEyNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMjUuNjQ5NTQyODM5NjUxMTc2IiBjeT0iODEuNzM0MTMzNjExNjQ5NDEiIGZpbGw9IiNmNDdlNjAiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDEuODY0NTcgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiIGJlZ2luPSItMC4zNzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE4LjI2NTg2NjM4ODM1MDYiIGN5PSI3NC4zNTA0NTcxNjAzNDg4NCIgZmlsbD0iI2Y4YjI2YSIgcj0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoNS40NTEyNiA1MCA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49Ii0wLjQzNzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+"
description: "Fetching # Stability Matrix

## Description
Stability Matrix est un gestionnaire de paquets multi-plateformes et une interface d'inférence pour Stable Diffusion. Il permet l'installation et la mise à jour en un clic pour divers paquets de Stable Diffusion Web UI.

## Fonctionnalités Principales
- **Interfaces Utilisateurs Supportées**: Automatic 1111, SD Web UI-UX, ComfyUI, et bien d'autres.
- **Gestion des Plugins/Extensions**: Permet de gérer les plugins et extensions pour les paquets pris en charge.
- **Dépendances Python**: Installation ou mise à jour facile des dépendances Python pour chaque paquet.
- **Portabilité**: Complètement portable, permettant de déplacer le répertoire de données vers un autre disque ou ordinateur.
- **Interface d'Inférence**: Une interface repensée pour Stable Diffusion, intégrée à Stability Matrix.
- **Gestionnaire de Points de Contrôle**: Configuré pour être partagé par toutes les installations de paquets.
- **Navigateur de Modèles**: Importation de modèles depuis CivitAI et HuggingFace avec métadonnées et images de prévisualisation.
- **Personnalisation des Lancements**: Interface de lancement personnalisable avec émulateur de terminal, rendant l'utilisation de Stable Diffusion plus flexible et adaptée à vos préférences.
- **Compatibilité Étendue**: Disponible sur Windows, Mac et Linux, Stability Matrix est conçu pour être accessible à un large éventail d'utilisateurs.
- **Auto-complétion et Surlignage Syntaxique**: Utilisation d'une grammaire formelle pour l'auto-complétion et le surlignage syntaxique.
- **Gestion des Projets**: Les espaces de travail s'ouvrent dans des onglets qui sauvegardent et chargent à partir de fichiers .smproj.
- **Galerie et Métadonnées**: Les images générées contiennent des métadonnées compatibles avec Inference Project, ComfyUI Nodes, et A1111.
- **Téléchargements**: Pause et reprise des téléchargements, même après la fermeture de l'application.

## Détails Supplémentaires
- **Embarqué Git et Dépendances Python**: Pas besoin d'installer Git ou Python globalement.
- **Drag and Drop**: Glisser-déposer des images ou des fichiers pour charger des états.
- **Variables d'Environnement Configurables**: Éditeur d'arguments de lancement avec options prédéfinies ou personnalisées pour chaque installation de paquet.
- **Gestionnaire de Points de Contrôle**: Configuré pour être partagé par toutes les installations de paquets.
- **Navigateur de Modèles**: Importation de modèles depuis CivitAI et HuggingFace avec métadonnées et images de prévisualisation.
- **Téléchargements**: Pause et reprise des téléchargements, même après la fermeture de l'application.

![Stability Matrix Interface](https://github.com/LykosAI/StabilityMatrix/blob/main/README.md)
"
url: "# Stability Matrix

## Description
Stability Matrix est un gestionnaire de paquets multi-plateformes et une interface d'inférence pour Stable Diffusion. Il permet l'installation et la mise à jour en un clic pour divers paquets de Stable Diffusion Web UI.

## Fonctionnalités Principales
- **Interfaces Utilisateurs Supportées**: Automatic 1111, SD Web UI-UX, ComfyUI, et bien d'autres.
- **Gestion des Plugins/Extensions**: Permet de gérer les plugins et extensions pour les paquets pris en charge.
- **Dépendances Python**: Installation ou mise à jour facile des dépendances Python pour chaque paquet.
- **Portabilité**: Complètement portable, permettant de déplacer le répertoire de données vers un autre disque ou ordinateur.
- **Interface d'Inférence**: Une interface repensée pour Stable Diffusion, intégrée à Stability Matrix.
- **Gestionnaire de Points de Contrôle**: Configuré pour être partagé par toutes les installations de paquets.
- **Navigateur de Modèles**: Importation de modèles depuis CivitAI et HuggingFace avec métadonnées et images de prévisualisation.
- **Personnalisation des Lancements**: Interface de lancement personnalisable avec émulateur de terminal, rendant l'utilisation de Stable Diffusion plus flexible et adaptée à vos préférences.
- **Compatibilité Étendue**: Disponible sur Windows, Mac et Linux, Stability Matrix est conçu pour être accessible à un large éventail d'utilisateurs.
- **Auto-complétion et Surlignage Syntaxique**: Utilisation d'une grammaire formelle pour l'auto-complétion et le surlignage syntaxique.
- **Gestion des Projets**: Les espaces de travail s'ouvrent dans des onglets qui sauvegardent et chargent à partir de fichiers .smproj.
- **Galerie et Métadonnées**: Les images générées contiennent des métadonnées compatibles avec Inference Project, ComfyUI Nodes, et A1111.
- **Téléchargements**: Pause et reprise des téléchargements, même après la fermeture de l'application.

## Détails Supplémentaires
- **Embarqué Git et Dépendances Python**: Pas besoin d'installer Git ou Python globalement.
- **Drag and Drop**: Glisser-déposer des images ou des fichiers pour charger des états.
- **Variables d'Environnement Configurables**: Éditeur d'arguments de lancement avec options prédéfinies ou personnalisées pour chaque installation de paquet.
- **Gestionnaire de Points de Contrôle**: Configuré pour être partagé par toutes les installations de paquets.
- **Navigateur de Modèles**: Importation de modèles depuis CivitAI et HuggingFace avec métadonnées et images de prévisualisation.
- **Téléchargements**: Pause et reprise des téléchargements, même après la fermeture de l'application.

![Stability Matrix Interface](https://github.com/LykosAI/StabilityMatrix/blob/main/README.md)
"
```
