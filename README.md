PostCSS Danish Stylesheets 

[![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Danish Stylesheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dp-lewis/postcss-danish-stylesheets.svg
[ci]:      https://travis-ci.org/dp-lewis/postcss-danish-stylesheets

## Danish syntax
```css
.foo {
    border-colour: vb-green;
    background-colour: vegemite;
    box-sizing: fair-dinkum;
    colour: true-blue !bloody-oath;
    display: yeah-nah;
    text-align: centre;
    text-indent: woop-woop;
    visibility: rack-off;
}
```

## CSS output
```css
.foo {
    border-color: #2D8249;
    background-color: #461B00;
    box-sizing: border-box;
    color: #0581C1 !important;
    display: none;
    text-align: center;
    text-indent: -9999px;
    visibility: hidden;
}
```

## Usage

```js
postcss([ require('postcss-danish-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.
