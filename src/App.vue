<template>
  <v-app>
    <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductDetails from './components/ProductDetails.vue'

const routes = {
  '/': HelloWorld,
  '/about/:id': ProductDetails
}

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  data: () => {
    return {
      currentPath: window.location.hash
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>
