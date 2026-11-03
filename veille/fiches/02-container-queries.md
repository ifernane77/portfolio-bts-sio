# Veille CSS — Container Queries

Date de consultation : 09/10/2026
Source : https://developer.mozilla.org/fr/docs/Web/CSS/Reference/At-rules/%40container

## Fonctionnement
Les Container Queries permettent d'appliquer des styles selon la taille d'un conteneur parent plutôt que seulement selon la largeur globale de l'écran.

## Exemple
```css
.zone-cartes {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .carte {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## Intérêt pour mes projets
Cette fonctionnalité pourrait améliorer l'adaptation des cartes du portfolio et de DoctoRDV dans différentes zones de mise en page.

## Bilan
J'ai identifié la différence entre Media Queries et Container Queries. Test pratique à réaliser.
