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
    <v-row>
      <v-card-title style="width: 100%;">
        <v-col
        cols="12"
        sm="9"
      >
      {{ items[3*(k-1)+n-1].marque }}
      </v-col>
        
        <v-col
        cols="12"
        sm="3"
      >
      <h3 align="right">
          {{ items[3*(k-1)+n-1].price }} €
        </h3>
      </v-col>
        
      </v-card-title>
    </v-row>

    

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="items[3*(k-1)+n-1].rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="text-grey ms-4">
          {{ items[3*(k-1)+n-1].rate }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ items[3*(k-1)+n-1].description }}
      </div>

      <div>{{ items[3*(k-1)+n-1].details }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <router-link :to="'/details/'+items[3*(k-1)+n-1].id"><v-btn
        color="deep-purple lighten-2"
        text
      >
        Détails
      </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
  </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeList',

  data: () => ({
    items: []
  }),
  mounted () {
    fetch('http://localhost:3000/products')
      .then(response => (response.json()))
      .then(data => (this.items = data))
  },
}
</script>