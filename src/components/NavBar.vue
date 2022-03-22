<template>
  <div>
    <h2>User Profile</h2>
      <div>
    <button @click="logout">Log out</button>
    <button @click="login">Log in</button>
      </div>
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
        },
        user,
        isAuthenticated
      };
    }
  };
</script>