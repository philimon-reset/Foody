<template>
    <div>
      <pre v-highlightjs><code>{{JSON.stringify(user, null, 2)}}</code></pre>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "profile",
  setup() {
    const { user } = useAuth0();
    console.log(user);
    return {
      user,
    }
  }
};
</script>

