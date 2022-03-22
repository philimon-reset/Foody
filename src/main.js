// Auth service
import { createAuth0 } from '@auth0/auth0-vue';

// vue components and services
import { createApp, provide, h } from 'vue';

// Graphql client
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import { apolloClient } from './Services/apollo_client';

// import router from './router';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(
  createAuth0({
    domain: 'reset2077.us.auth0.com',
    client_id: 'EwfxihXr7dHSMjiK3nPvm1fxcOUlrGvO',
    redirect_uri: window.location.origin,
    audience: 'https://hasura.io/learn',
  }),
);

app.mount('#app');
