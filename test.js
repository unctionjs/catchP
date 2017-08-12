/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import cascadingKeyChain from "./source"

test(({same}) => {
  const rejection = (value) => same(value, new Error("a"))
  const promise = Promise.reject(new Error("a"))

  return catchP(rejection)(promise)
})
