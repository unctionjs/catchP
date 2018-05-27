export default function catchP(rejection) {
  return function catchPrejection(promise) {
    return promise.catch(rejection);
  };
}
