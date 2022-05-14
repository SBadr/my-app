<template>
  <v-flex xs5>
      <v-card>
        <v-img id="product-img"
          :src="item.img"
          height="100%"
          class="grey darken-4"
        ></v-img>
      </v-card>
  </v-flex>
  <v-flex xs7  pl-5 class="d-flex text-xs-left">
        <div class="product-summary">
          <h2 class="product-title">{{item.marque}}</h2>
          <div class="user-ratings">
            <div class="star-rating">
              <span style="width:100%"></span>
            </div>
         <a href="#reviews" class="total-review" rel="nofollow">(<span class="count"> 5 </span> customer review)</a>
          </div>
          <div class="price">
            <h3>
            {{item.price}}
            <span>€</span>
            </h3>
            <del>{{item.originalPrice}} €</del>
          </div>
          <div class="prodect-details">
            <h3>{{item.title}}</h3>
            <h4>{{item.description}}</h4>
            <p>{{item.details}}</p>
          </div>
          <div class="buy-product">
            <div class="stock">   
             <v-btn color="#4CAF50" dark>IN STOCKS
              <v-icon dark right>check_circle</v-icon>
             </v-btn>
            </div>
          </div>
        </div>
      </v-flex>
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