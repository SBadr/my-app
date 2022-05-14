<template id="example-1">
<v-container class="grey lighten-5">
    <v-row no-gutters v-for="k in (items.length/3)" :key="k">
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:progress>
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="items[3*(k-1)+n-1].img"
    ></v-img>

    <v-card-title>{{ items[3*(k-1)+n-1].marque }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <div class="grey--text ms-4">
          {{ items[3*(k-1)+n-1].price }} €
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ items[3*(k-1)+n-1].description }}
      </div>

      <div>{{ items[3*(k-1)+n-1].details }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="details()"
      >
        Détails
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    items: []
  }),
  mounted () {
    fetch('http://localhost:3000/products')
      .then(response => (response.json()))
      .then(data => (this.items = data))
  },
  methods : () => ({
    details() {
      this.$router.push('about/1')
    }
  }),
}
</script>