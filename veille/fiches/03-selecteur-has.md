# Veille CSS — Sélecteur :has()

Date de consultation : 09/10/2026
Source : https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes

## Fonctionnement
La pseudo-classe :has() permet de sélectionner un élément selon la présence ou l'état d'éléments associés.

## Exemple
```css
.formulaire:has(input:invalid) {
  border: 2px solid red;
}
```

## Intérêt pour mes projets
Cette fonctionnalité pourrait améliorer les retours visuels des formulaires de DoctoRDV ou Light of Knowledge.

## Bilan
J'ai identifié une fonctionnalité de sélection conditionnelle utilisable dans les formulaires. Test pratique à réaliser.
