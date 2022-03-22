const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'http://localhost:8080';

const scheme = (proto) => (this.location.protocol === 'https:' ? `${proto}s` : proto); // hot fix, check in later

export const GRAPHQL_URL = `${scheme(
  'http',
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  'ws',
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

export const authClientId = 'EwfxihXr7dHSMjiK3nPvm1fxcOUlrGvO';
export const authDomain = 'reset2077.us.auth0.com';
export const callbackUrl = 'http://localhost:3000/callback'; // modify `callbackUrl` to point to your localhost
