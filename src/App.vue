<template>
  <v-app>
    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-toolbar-title>Nails by Oumy</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark :icon="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
        

    </v-app-bar>
    <v-container
    class="spacing-playground pa-6"
    fluid
  >
  <router-view />
    </v-container>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  components: {
  },
  data: () => {
    return {
      currentPath: window.location.hash,
      appTitle: 'Vernisoumy',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home' },
          { title: 'Contactez-nous', path: '/contact-us', icon: 'mdi-contacts' },
     ]
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>
