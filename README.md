# TP3 Creation - Argumentaire


## 1 - fichiers CSS
Pour commencer, nous avons réorganiser complètement le CSS afin de le rendre conforme à la methode ITCSS et la nomenclature conforme à la methode BEM.
</br>

Il a fallu passer au travers des fichiers. Ceux-ci n'avaient pas de structure claire et n'étaient pas nommés de manière représentative. Nous avons du repartir de zéro, avec la bonne structure ITCSS et replacer les éléments dans les fichiers appropriés.
</br>

Nous avons constaté beaucoup de redondance que nous avons refactorisé afin de simplifier le code et le rendre plus lisible.

<br>

___

<br>

## 2 - Composantes 
Après avoir structuré nos fichiers CSS, nous nous sommes concentrées à changer certaines classes utilisées dans le HTML, car certaines étaient très spécifiques et ne permettaient donc pas la réutilisation de la composante sur une autre similaire.
</br>

Nous avons également utilisés les espacements tel qu'appris en cours. Dans le project de base, les espacements n'avaient pas l'aire de suivre une logique consistante. Par exemple la section de promotion contenait une classe nommée promotion qui ne servait que de wrapper et la section suivante contient une classe nommée border-top qui sert exactement à la même chose dont la seule différence est qu'elle contient un padding-top supplémentaire. 
</br>

Ceci est seulement un exemple parmi tant d'autres qui démontre non seulement la rigueur est questionnable, mais que tout au long de la page, il n'y a pas un très bon contrôle sur l'uniformité. Cela a été travaillé piéce par piéce et c'est un aspect que nous avons amélioré en utilisant des classes plus génériques pour avoir un meilleur contrôle et moins de problèmes en responsive.
</br>

La seule chose que nous avons retiré du projet est le menu primaire présent dans le footer. Ceci faisait de la redondance parce que l'information se trouve déjà dans le menu du header. Donc pour alléger le contenu et rendre l'information plus claire nous avons retiré le doublon d'information. Aussi dans le sous-menu de la navigation principale, nous avons retiré "philosophie" de le liste des restaurants...

<br>

___

<br>

## 3 - Responsive
Nous avons retravaillé plusieurs détails du responsif. Le plus gros changement a été fait sur le menu. Nous avons ajouté un breakpoint dans lequel le menu se transforme en menu burger pour le format tablette et mobile. Ainsi nous avons créé le menu responsif qui ne l'était pas avant.

<br>

___

<br>

## 4 - 2e Page - SuccJalbert

Dans la deuxième page du projet, nous avons pu réutiliser la plupart des composantes et classes crées pour la page d'accueil.
<br>

Les composantes et les classes que nous avons du ajouter sont les suivantes :
<br>

Classes "flex__3col", "flex__3col_item" pour la "Section info succursale" car nous n'avions pas de diposition similaire. 

Classe "text--small" et "text-wrapper", car nous avions du texte de plus petite taille. 

composante "Promo" à été créée, car nous ne l'avions pas dans la page d'accueil. 

Et pour finir le "Hero-sub" à été ajouté parce que la composition et le contenu de celui-ci sont différente du Hero de l'accueil.


<br>

___

<br>

## Défis

Nous avons choisi de faire le travail en équipe. Ceci a rajouter un défi d'organisation et de trouver la bonne méthode qui fonctionne. 

<br>

Étant donné que c'est la première fois depuis le début du programme que nous avions l'option de faire un travail qui requiert du code en équipe, cela n'a pas été facile de trouver ce qui fonctionne et comment cela fonctionne. Étant donné que le travail sur GitHub sur un même fichier en même temps causait beaucoup de conflit lorsqu'on est pas habitué à travailler avec, nous avons découvert l'extension Live Share qui permet de travailler en même temps en temps réel et pouvoir suivre les actions de l'un et l'autre. 

<br>

Au final nous avons trouvé que l'idéal est une combinaison des deux. L'utilisation de GitHub et commit lorsque nous savons que nous ne sommes pas en train de travailler en même temps sur le projet. Et lorsque nous somme disponibles en même temps, nous utilisons Live Share afin de pouvoir travailler en synchronisation pendant que nous sommes en train de discuter des étapes à suivre et des modifications à faire.

<br>

Cette expérience à été constructive et nous a permis de nous familiariser avec les différents outils de travail d'équipes que nous aurons besoins d'utiliser dans le reste de notre parcous et de notre carrière.
