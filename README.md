# Project Name

Chores

## Description

Making chore charts for the kids, the hard way

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Install dart sass: https://sass-lang.com/install/
(I installed it globally so I could use it from command line w/o manually updating PATH.)
```shell
npm i sass -g
```

## Usage

Just open `chart.html` in a browser and print.

### Transpile SCSS
Use dart sass cli: https://sass-lang.com/documentation/cli/dart-sass/
```shell
sass <input.scss> [output.css] -w
```

`-w` is short for `--watch`: https://sass-lang.com/documentation/cli/dart-sass/#watch
>Sass stays open and continues compiling stylesheets whenever they or their dependencies change.
