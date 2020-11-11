//const appendedPath = '/ssr';
const appendedPath = '/fir-ch2-5cbdb/us-central1/ssr';

export default function wrapPath(path) {
  return `${appendedPath}${path}`; // Use this when you want to deploy functions live
  // Use on localhost
  /*if (__isFirebaseSSR__) {
    return `/fir-ch2-5cbdb/us-central1/ssr${path}`; 
  } else {
    return path;
  }*/
}
