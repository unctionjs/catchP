
import catchP from "./index.ts";

test(() => {
  const rejection = (value) => expect(value).toEqual(new Error("a"));
  const promise = Promise.reject(new Error("a"));

  return catchP(rejection)(promise);
});
