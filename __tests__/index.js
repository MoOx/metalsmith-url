import tape from "tape"

import Metalsmith from "metalsmith"
import url from "../src"

tape("metalsmith-url", t => {
  new Metalsmith(__dirname)
    .use(
      url([
        [/\.md$/, ".html"],
        [/index\.html?$/, ""],
      ])
    )
    .use(files => {
      const names = Object.keys(files)
      t.equal(files[names[0]].url, "", "should replace create .url property")
      t.end()
    })
    .build(err => {if (err) {throw err}})
})
