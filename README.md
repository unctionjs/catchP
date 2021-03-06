# @unction/catchP

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<C, B> => Promise<A> => Promise<A | B>

A port of the `Promise.prototype.catch()` function.

``` javascript
catchP(
  (exception) => console.error(exception)
)(Promise.all([fetchUser, fetchProject]))
```

Credit: @keithamus

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/catchP.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/catchP.svg?maxAge=2592000&style=flat-square
