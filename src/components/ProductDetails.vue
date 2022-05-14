<template>
  <v-flex xs7  pl-5 class="d-flex text-xs-left">
        <div class="product-summary">
          <h2 class="product-title">Basic contrast sneakers</h2>
          <div class="user-ratings">
            <div class="star-rating">
              <span style="width:100%"></span>
            </div>
         <a href="#reviews" class="total-review" rel="nofollow">(<span class="count"> 5 </span> customer review)</a>
          </div>
          <div class="price">
            <h3>
            <span>$</span>
            160.00
            </h3>
            <del>$ 180</del>
          </div>
          <div class="prodect-details">
            <h3>Product Details {{ $route.params.id }}</h3>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</p>
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

}
</script>

<style>
  @import '../assets/styles/details.css';
</style>