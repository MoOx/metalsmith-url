# metalsmith-url [![Travis Build Status](https://travis-ci.org/MoOx/metalsmith-url.svg)](https://travis-ci.org/MoOx/metalsmith-url)

> Metalsmith plugin to add url to entries from transformation on filenames

## Installation

```console
$ npm install metalsmith-url
```

## Usage

```js
import Metalsmith from "metalsmith"
import url from "metalsmith-url"

new Metalsmith("./")
  .use(
    url([
      [/\.md$/, ".html"],
      [/index\.html?$/, ""],
    ])
  )
  .build(err => {if (err) {throw err}})
```

### Options

This plugin takes an array.
Each item must be an array of [pattern, replacement]

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
