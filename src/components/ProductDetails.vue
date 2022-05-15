<template>
<v-container>
<v-row no-gutters style="margin-top: 48px;">
      <v-col
        cols="12"
        sm="4"
      >
        <v-card>
        <v-img id="product-img"
          :src="item.img"
          height="100%"
          class="grey darken-4"
        ></v-img>
      </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
      <div class="product-summary">
          <h2 class="product-title">{{item.marque}}</h2>
          <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="item.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
           class="rate"
        ></v-rating>

        <div class="text-grey ms-4">
          {{ item.rate }}
        </div>
      </v-row>
          <div class="price">
            <h3>
            {{item.price}}
            <span>€</span>
            </h3>
            <del>{{item.originalPrice}} €</del>
          </div>
          <div class="prodect-details">
            <h3>{{item.title}}</h3>
            <br>
            <h4>{{item.description}}</h4>
            <br>
            <p>{{item.details}}</p>
          </div>
        </div>
      </v-col>
</v-row>
</v-container>
</template>

<script>
export default {
data: () => ({
    item: {}
  }),
  mounted () {
    fetch('http://localhost:3000/products/'+ this.$route.params.id)
      .then(response => (response.json()))
      .then(data => (this.item = data))
  },
}
</script>

<style>
  @import '../assets/styles/details.css';
</style>