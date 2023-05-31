![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Les plus grands films de tous les temps

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)

<details>
  <summary>
   <h2>Objectifs d'apprentissage</h2>
  </summary>

  Cet exercice vous permet de pratiquer et d'appliquer les concepts et les techniques enseignés en classe.

  À la fin de cet exercice, vous serez capable de :

  - Déclarer des fonctions en utilisant la syntaxe des expressions de fonction et des fonctions fléchées.
  - Passer des fonctions en tant qu'arguments à d'autres fonctions (rappels).
  - Passer des tableaux et des objets en tant qu'arguments à des fonctions.
  - Parcourir les tableaux à l'aide de la méthode `forEach()`.
  - Manipuler les tableaux à l'aide de la méthode `map()`.
  - Filtrer les éléments d'un tableau à l'aide de la méthode `filter()`.
  - Réduire les valeurs d'un tableau à l'aide de la méthode `reduce()`.
  - Trier les tableaux à l'aide de la méthode `sort()`.
  - Explorer et appliquer différentes façons de copier un tableau (méthode `slice()` et opérateur de propagation `...`).

  <br>
  <hr> 

</details>

## Introduction

Nous venons d'apprendre quelques méthodes utiles qui nous aideront à manipuler des **objets et des tableaux**. Dans cet exercice, nous allons pratiquer l'utilisation de ces méthodes, et il vous est demandé d'utiliser au moins l'une d'entre elles à chaque itération.

<br>

## Exigences

- Forker ce repo
- Le cloner sur votre machine

## Soumission

- Une fois terminé, exécutez les commandes suivantes :

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Créez une Pull Request afin que vos assistants pédagogiques puissent vérifier votre travail.

<br>

## Testez votre code

Ce LAB est équipé de tests unitaires pour fournir des commentaires automatisés sur votre progression en laboratoire. Si vous souhaitez vérifier les tests, ils se trouvent dans le fichier `tests/movies.spec.js`.

Pour exécuter les tests et votre code JavaScript, ouvrez le fichier SpecRunner.html en utilisant l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VSCode.

Pour voir les sorties des `console.log` dans votre code JavaScript, ouvrez la [Console dans les outils de développement](https://developer.chrome.com/docs/devtools/open/#console).

<br>

## Instructions

Vous travaillerez sur le fichier `src/movies.js`, qui est déjà chargé dans le fichier `SpecRunner`.html.

Le fichier `src/data.js` contenant le tableau de films est également chargé dans le fichier `SpecRunner.html`.

<br>

## Itération 0: Tableau de films

La meilleure façon de s'entraîner est de travailler avec de vraies données. Dans le fichier `src/data.js`, vous trouverez un tableau d'informations sur **les 250 meilleurs films de tous les temps** selon le classement [IMDB](http://www.imdb.com/chart/top?ref_=nv_mv_250_6), que vous utiliserez pour afficher ce que chaque itération demande !

Voici un exemple de la façon dont les données sont affichées :

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score": 9.3
}
```

Vous allez approfondir certains "faits" que cet ensemble de données contient. Par exemple, nous pouvons utiliser cet ensemble de données pour trouver le film le plus populaire, la durée moyenne du film, la liste des films d'un réalisateur, etc.

Dans cette itération, aucune action n'est requise, mais voici votre défi : lors des prochaines itérations, vous utiliserez vos connaissances en JavaScript pour manipuler ces données.

N'oubliez pas de lire attentivement la description de chaque itération avant de travailler sur la solution.

<br>

### Itération 1 : Tous les réalisateurs

Nous devons obtenir le tableau de tous les réalisateurs. Comme il s'agit d'un échauffement, nous allons vous donner un indice : vous devez *mapper* à travers le tableau de films et obtenir tous les réalisateurs dans un seul tableau en tant que résultat final. Allez-y et créez une fonction appelée `getAllDirectors()` qui reçoit un tableau de films en argument et renvoie un nouveau tableau (*mappé*).

<br>

#### Bonus - Itération 1.1 : *Nettoyer* le tableau des réalisateurs

Certains des réalisateurs ont réalisé plusieurs films, donc ils apparaîtront plusieurs fois dans le tableau des réalisateurs. Comment pourriez-vous "nettoyer" ce tableau et le rendre unifié (c'est-à-dire sans doublons) ? *Ne privilégiez pas la partie bonus maintenant. Vous pouvez y revenir lorsque vous aurez terminé les itérations obligatoires.* :wink:

<br>

### Itération 2 : Steven Spielberg. Le meilleur ?

L'un des réalisateurs les plus célèbres du cinéma est **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, et il a réalisé quelques films dramatiques vraiment impressionnants qui figurent sur notre liste, mais nous voulons savoir combien il y en a.

Créez une fonction `howManyMovies()` qui reçoit un tableau en tant que paramètre et filtre :eyes: le tableau afin que nous ayons uniquement les films **dramatiques** où **Steven Spielberg** est le réalisateur.

<br>

### Itération 3 : Moyenne de tous les scores

Ce sont les meilleurs films en fonction de leurs scores, donc ils ont tous des scores remarquables. Dans cette itération, nous voulons connaître la moyenne des scores de tous les films et l'afficher dans la console. Créez une fonction `scoresAverage()` qui reçoit un tableau en tant que paramètre et résout le défi.

Le score doit être arrondi à 2 décimales !

**:bulb: Peut-être souhaitez-vous *"reduce"* (réduire) les données à une seule valeur. :wink:**

<br>

### Itération 4 : Films dramatiques

Le drame est le genre qui se répète le plus dans notre `array`. Apparemment, les gens adorent le drame ! :eyes:

Créez une fonction `dramaMoviesScore()` qui reçoit un tableau en tant que paramètre pour obtenir la note moyenne de tous les films dramatiques ! Voyons si elle est meilleure que la moyenne générale.

Encore une fois, arrondi à 2 décimales !

<br>

### Itération 5 : Trier par année

Nous devons trier les films par ordre croissant selon leur année de sortie. Cela devrait être facile en utilisant l'une des **méthodes** que nous venons d'apprendre. :wink:
Créez une fonction `orderByYear()` qui reçoit un tableau en tant que paramètre et renvoie un *nouveau tableau trié*.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

Si deux films ont la même année, ordonnez-les par ordre alphabétique selon leur titre ! :heavy_check_mark:

:warning: **Important** : Votre fonction doit renvoyer un nouveau tableau, contenant les films triés par année. Votre fonction ne doit pas modifier l'array original (muter). Vous devrez peut-être rechercher comment créer une "copie" ou un "clone" d'un tableau.

<br>

### Itération 6 : Ordre alphabétique

Une autre façon populaire de trier les films est de les classer par ordre alphabétique en utilisant la clé "title". Cependant, dans ce cas, nous devons uniquement afficher le titre des 20 premiers. Facile pour un expert comme vous. :wink:

Créez une fonction `orderAlphabetically()` qui reçoit un tableau et renvoie un tableau des 20 premiers titres, triés par ordre alphabétique. Retournez uniquement le titre de chaque film, et si le tableau que vous recevez contient moins de 20 films, retournez-les tous.

:warning: **Important** : Votre fonction doit renvoyer un nouveau tableau contenant des objets de films triés par ordre alphabétique. Votre fonction ne doit pas modifier (muter) le tableau d'origine. Vous devrez peut-être rechercher comment "copier" ou "cloner" un tableau.

<br>

### BONUS - Itération 7 : Format horaire

We got the info from the **IMDB** web page, but the duration info was saved in a format that is difficult for us to compare movies.

Nous avons obtenu les informations depuis la page web de **IMDB**, mais les informations sur la durée ont été enregistrées dans un format qui est difficile pour nous de comparer les films.

Trouver le film le plus long est presque impossible en utilisant ce format, alors changeons-le !

- Créez une fonction `turnHoursToMinutes()` qui reçoit un tableau en paramètre et, avec un peu de magie mise en œuvre par vous, remplace les informations de durée de chacun des films par leur équivalent en minutes. Par exemple :

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score" :9.3
}
```

Devrait être:

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": 142,
  "genre": ["Crime","Drama"],
  "score": 9.3
}
```

<br>

:warning: **Important**: Votre fonction doit retourner un nouveau tableau, contenant des objets de film avec la durée en minutes. Votre fonction ne doit pas modifier (muter) le tableau original.

<br>

### BONUS - Itération 8 : Meilleure moyenne de score annuel

On entend toujours parler des films classiques, mais nous voulons savoir quelle année a la meilleure moyenne de score afin de pouvoir déclarer officiellement la **MEILLEURE ANNÉE DU CINÉMA** !

Allez-y et trouvez quelle année a la meilleure moyenne de score pour les films sortis cette année-là !

Créez une fonction `bestYearAvg()` qui reçoit un tableau de films et nous donne la réponse à la meilleure année pour le cinéma et quel était son score moyen. La fonction `bestYearAvg()` devrait renvoyer une **chaîne de caractères** avec la structure suivante :
<br>

**The best year was \<YEAR\> with an average score of \<RATE\>**

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)

<br>

**Happy coding!** :blue_heart:

<br>

## FAQs

<br>

<details>
  <summary>Je suis bloqué dans l'exercice et je ne sais pas comment résoudre le problème ni par où commencer</summary>
  <br>

  Si vous êtes coincé dans votre code et que vous ne savez pas comment résoudre le problème ou par où commencer, vous devriez prendre du recul et essayer de formuler une question claire sur le problème spécifique auquel vous êtes confronté. Cela vous aidera à cibler le problème et à trouver des solutions potentielles.

  Par exemple, est-ce un concept que vous ne comprenez pas, ou recevez-vous un message d'erreur que vous ne savez pas comment corriger ? Il est généralement utile d'essayer d'exprimer le problème le plus clairement possible, en incluant les éventuels messages d'erreur que vous recevez. Cela peut vous aider à communiquer le problème à d'autres personnes et éventuellement obtenir de l'aide de camarades de classe ou de ressources en ligne.

  Une fois que vous avez une compréhension claire du problème, vous pourrez commencer à travailler vers la solution.

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Tous les tests Jasmine échouent et sont en rouge. Pourquoi cela s'est-il produit ?</summary>
  <br>

  Une raison possible pour laquelle tous les tests Jasmine échouent est qu'il y a une erreur de syntaxe dans le code testé. Si le code contient une erreur de syntaxe, il ne se chargera pas correctement et aucun des tests ne pourra s'exécuter. Cela entraînera l'échec de tous les tests.

  Pour résoudre ce problème, vous devrez examiner le code testé à la recherche d'erreurs de syntaxe. Recherchez des crochets manquants, des points-virgules ou d'autres problèmes de syntaxe qui pourraient être à l'origine du problème. Si vous trouvez une erreur de syntaxe, corrigez-la et essayez de lancer à nouveau les tests.

  Une autre possibilité est qu'il y ait un problème avec les tests eux-mêmes. Il est possible que vous ayez modifié le fichier de test et causé un problème. Si vous avez apporté des modifications au fichier de test, essayez de copier et coller le fichier de test original, puis exécutez à nouveau les tests pour voir si cela résout le problème.

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Comment puis-je parcourir une boucle sur un tableau en utilisant la méthode <code>forEach()</code>?</summary>
  <br>

  La méthode `forEach()` exécute une fonction fournie une fois pour chaque élément du tableau. Elle ne renvoie pas un nouveau tableau, mais exécute plutôt la fonction sur chaque élément du tableau.

  La syntaxe de la méthode `forEach()` est la suivante:

  ```js
  array.forEach( function(element) {
    // code to be executed for each element
  });
  ```

  <br>

  Voici un exemple qui utilise la méthode `forEach()` pour enregistrer chaque élément et son index dans un tableau dans la console :

  ```js
  const fruits = ['apple', 'banana', 'cherry'];

  fruits.forEach( function(element, index) {
    console.log(`${index}: ${element}`);
  });
  ```

<br>

  Vous pouvez également utiliser une fonction fléchée en tant que fonction de rappel pour `forEach()` :

  ```js
  fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
  ```

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Comment utiliser la méthode de tableau <code>filter()</code> ?</summary>
  <br>

  La méthode `filter()` est utilisée pour itérer à travers un tableau et sélectionner uniquement certains éléments à inclure dans un nouveau tableau.

  La méthode `filter()` renvoie un nouveau tableau contenant tous les éléments qui satisfont une certaine condition. La méthode `filter()` prend une fonction de rappel en argument.

  La fonction de rappel doit renvoyer une valeur booléenne (`true` / `false`) ou une valeur *vraie/fausse* :

  - Si la fonction de rappel renvoie `true` pour un élément particulier, cet élément sera inclus dans le nouveau tableau.
  - Si la fonction de rappel renvoie `false` pour un élément particulier, cet élément sera exclu du nouveau tableau.

  Voici un exemple de filtrage d'un tableau pour obtenir un nouveau tableau contenant uniquement les étudiants ayant une propriété de cours de `"Web Dev"` :

  ```js
  const students = [
    { name: "Anna", course: "Web Dev" },
    { name: "Bill", course: "UX/UI" },
    { name: "Cori", course: "Data" },
    { name: "Dave", course: "Web Dev" },
    { name: "Erin", course: "UX/UI" }
  ];

  const webDevStudents = students.filter( function(el) {
    return el.course === "Web Dev";
  });

  console.log(webDevStudents);
  // Output: 
  // [ 
  //   {name: "Anna", course: "Web Dev"},
  //   {name: "Dave", course: "Web Dev"}
  // ]
  ```

<br>

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Comment utiliser la méthode <code>map()</code> sur les tableaux ?</summary>
  <br>

  La méthode `map()` est utilisée pour créer un nouveau tableau en renvoyant une valeur pour chaque élément dans un tableau.

  La méthode `map()` prend une fonction de rappel en argument. La méthode `map()` renvoie un nouveau tableau contenant les valeurs renvoyées par la fonction de rappel.

  Voici un exemple d'utilisation de la méthode `map()` pour extraire la propriété `grade` de chaque objet étudiant dans le tableau `students` et créer un nouveau tableau avec les notes :

  ```js
  const students = [
    { name: "Anna", grade: 8 },
    { name: "Bill", grade: 9 },
    { name: "Cloe", grade: 7 }
  ];

  // Use map() to extract the 'grade' from each student object
  const studentGrades = students.map(function (student) {
    // Return the value to be included in the new array
    return student.grade;
  });


  console.log(studentGrades); // Output: [8, 9, 7]
  ```

  <br>

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Comment utiliser la méthode de tableau <code>sort()</code> ?</summary>

  <br>

  La méthode `sort()` est utilisée pour trier les éléments d'un tableau sur place. Cela signifie que le tableau d'origine est modifié et les éléments triés sont réarrangés dans le même tableau.

  L'ordre de tri par défaut est basé sur la conversion des éléments en chaînes de caractères, puis sur la comparaison de leurs séquences de valeurs Unicode UTF-16. Cela signifie que la méthode `sort()` peut être utilisée directement pour trier un tableau de chaînes de caractères par ordre alphabétique. Cependant, lorsqu'il s'agit de nombres, l'ordre de tri par défaut peut ne pas produire le résultat souhaité et il est nécessaire de fournir une fonction de tri en tant qu'argument à la méthode `sort()`.

  #### Tri des nombres - ordre croissant

  Voici un exemple d'utilisation de la méthode `sort()` pour trier un tableau de nombres dans l'ordre croissant :

  ```js
  const numbers = [5, 2, 3, 1, 4];

  numbers.sort((a, b) => a - b);

  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  ```

  <br>

  #### Tri des nombres - ordre décroissant

  Voici un exemple d'utilisation de la méthode `sort()` pour trier un tableau de nombres dans l'ordre décroissant :

  ```js
  const numbers = [5, 2, 3, 1, 4];

  numbers.sort((a, b) => b - a);

  console.log(numbers); // Output: [5, 4, 3, 2, 1]
  ```

  <br>

  #### Tri des chaînes de caractères - ordre croissant A-Z

  Voici un exemple d'utilisation de la méthode `sort()` pour trier un tableau de chaînes de caractères dans l'ordre croissant (A-Z) :

  ```js
  const words = ["cherry", "apple", "blueberry"];

  words.sort((a, b) => a.localeCompare(b));

  console.log(words); // Output: ["apple", "blueberry", "cherry"]
  ```

  The `localeCompare()` method is used to compare the strings in alphabetical order. In the above example `localeCompare()` method returns a negative value if `a` comes before `b` in the sort order, a positive value if `a` comes after `b`, and 0 if they are equal. This causes the strings to be sorted in ascending order (A-Z).

  La méthode `localeCompare()` est utilisée pour comparer les chaînes de caractères dans l'ordre alphabétique. Dans l'exemple ci-dessus, la méthode `localeCompare()` renvoie une valeur négative si `a` vient avant `b` dans l'ordre de tri, une valeur positive si `a` vient après `b` et 0 s'ils sont égaux. Cela permet de trier les chaînes de caractères dans l'ordre croissant (A-Z). 

  <br>

  #### Tri des chaînes de caractères - ordre décroissant Z-A

  Alternativement, vous pouvez utiliser l'ordre de tri par défaut en appelant simplement la méthode `sort()` sans fonction de comparaison :

  ```js
  const words = ["cherry", "apple", "blueberry"];

  words.sort();

  console.log(words); // Output: ["apple", "blueberry", "cherry"]
  ```

  <br>

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Comment utiliser la méthode <code>reduce()</code> sur un tableau ?</summary>
  <br>

  La méthode `reduce()` est utilisée pour réduire un tableau de valeurs à une seule valeur en ajoutant chaque élément à l'accumulateur.

  <br>

  #### Syntaxe

  La méthode `reduce()` prend deux arguments : une fonction de rappel et la *valeur initiale*.

  ```js
  array.reduce((accumulator, element, index, array) => {}, initialValue);
  ```

  The callback function takes four arguments:

  - `accumulator`: the accumulated value. The `accumulator` is initialized with the value passed as the second argument: `initialValue`.
  - `element`: the current element being processed in the array
  - `index`: *(optional)* the index of the current element being processed in the array
  - : *(optional)* the original array

La fonction de rappel prend quatre arguments :

- `accumulator` (accumulateur) : la valeur accumulée. L'accumulateur est initialisé avec la valeur passée en tant que deuxième argument : `initialValue`.
- `element` (élément) : l'élément en cours de traitement dans le tableau.
- `index` : *(facultatif)* l'indice de l'élément en cours de traitement dans le tableau.
- `array` (tableau) : *(facultatif)* le tableau d'origine.

  <br>

  #### Exemple

  Voici un exemple d'utilisation de la méthode `reduce()` pour calculer la somme de toutes les valeurs `grade` dans un tableau :

  ```js
  const students = [
    { name: "John", grade: 8 },
    { name: "Jane", grade: 9 },
    { name: "Bob", grade: 7 }
  ];

  const gradesTotal = students.reduce((accumulator, element) {
    // For each array element, add its 'grade' to the accumulator 
    const newAccumulator = accumulator + element.grade;
    // Return the new accumulator value for the next iteration
    return newAccumulator;                              
  }, 0);

  console.log(gradesTotal); // Output: 24
  ```

  Dans l'exemple ci-dessus, l'accumulateur a été initialisé avec la valeur initiale de `0`.

  La fonction de rappel ajoute la `grade` de l'élément en cours à l'accumulateur à chaque itération. La valeur retournée devient la nouvelle valeur de l'accumulateur pour l'itération suivante. La méthode `reduce()` renvoie la valeur finale de l'accumulateur, qui est la somme de tous les éléments du tableau.

  <br>

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Comment utiliser la méthode <code>slice()</code> sur un tableau ?</summary>

  <br>

  La méthode `slice()` est utilisée pour copier une portion d'un tableau et la renvoyer en tant que nouveau tableau. La méthode `slice()` ne modifie pas le tableau d'origine.

  <br>

  #### Syntaxe

  ```js
  const newArray = array.slice(start, end);
  ```

  - `start` est l'index à partir duquel la découpe commence.
  - `end` est l'index auquel la découpe se termine.

  <br>

  La méthode `slice()` extrait les éléments du tableau d'origine et les inclut dans le nouveau tableau jusqu'à l'index `end`, mais sans inclure cet index. Si l'index `end` n'est pas spécifié, la méthode `slice()` extraira les éléments à partir de l'index `start` jusqu'à la *fin du tableau d'origine*.

  Voici un exemple d'utilisation de la méthode `slice()` pour copier des éléments d'un tableau :

  ```js
  const strings = ["a", "b", "c", "d", "e"];

  // Extract elements from index 1 to index 3
  const slice = strings.slice(1, 3);

  console.log(slice); // Output: ["b", "c"]
  ```

  <br>

  [Retour en haut](#faqs)

</details>

<details>
  <summary>Je ne peux pas pousser les modifications vers le repo. Que dois-je faire ?</summary>
  <br>

Il existe quelques raisons possibles pour lesquelles vous pourriez ne pas être en mesure de *push* (pousser) des modifications vers un dépôt Git :

1. **Vous n'avez pas validé vos modifications** : Avant de pouvoir pousser vos modifications vers le dépôt, vous devez les valider en utilisant la commande `git commit`. Assurez-vous d'avoir validé vos modifications et essayez de pousser à nouveau. Pour ce faire, exécutez les commandes suivantes dans votre terminal à partir du dossier du projet :
  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```
1. **Vous n'avez pas la permission de pousser vers le dépôt** : Si vous avez cloné le dépôt directement à partir du dépôt principal d'Ironhack sans effectuer un *Fork* au préalable, vous n'avez pas les droits d'écriture sur le dépôt.
Pour vérifier quel dépôt distant vous avez cloné, exécutez la commande suivante dans votre terminal à partir du dossier du projet :
  ```bash
  git remote -v
  ```
Si le lien affiché est le même que celui du dépôt principal d'Ironhack, vous devrez d'abord faire un Fork du dépôt vers votre compte GitHub, puis cloner votre Fork sur votre machine locale pour pouvoir pousser les modifications.

**Note** : Vous devriez faire une copie de votre code local pour éviter de le perdre lors du processus.

  [Retour en haut](#faqs)

</details>
