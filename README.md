# metalsmith-url [![Travis Build Status](https://travis-ci.org/MoOx/metalsmith-url.svg)](https://travis-ci.org/MoOx/metalsmith-url)

> Metalsmith plugin to add url to entries from transformation on filenames

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-url'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-url.svg' />
</a>

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
