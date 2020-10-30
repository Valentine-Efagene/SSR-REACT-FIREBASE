import { func } from 'prop-types';

export default function wrapPath(path) {
  if (__isFirebaseSSR__) {
    return `/fir-ch2-5cbdb/us-central1/ssr${path}`;
  } else {
    return path;
  }
}
