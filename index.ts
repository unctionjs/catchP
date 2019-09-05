import {MapperFunctionType} from "./types";

export default function catchP<A, B, C> (rejection: MapperFunctionType<C, B>) {
  return function catchPrejection (promise: Promise<A>): Promise<A | B> {
    return promise.catch(rejection);
  };
}
