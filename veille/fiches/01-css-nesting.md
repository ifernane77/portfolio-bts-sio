# Veille CSS — CSS Nesting

Date de consultation : 09/10/2026
Source : https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Selectors/Nesting_selector

## Fonctionnement
CSS Nesting permet d'imbriquer des sélecteurs CSS au sein d'autres règles. Cette fonctionnalité est native au navigateur et ne nécessite pas de Sass.

## Exemple
```css
.carte {
  padding: 20px;

  &:hover {
    background-color: #eaf2ff;
  }
}
```

## Intérêt pour mes projets
Cette syntaxe pourrait simplifier les styles de mes cartes de formation dans Light of Knowledge ou de mon portfolio.

## Bilan
J'ai identifié une technique pour mieux structurer certains styles CSS. Test pratique à réaliser.
