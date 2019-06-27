<template>
  <div>
    <div class="spacerline"></div>
    <br>
    <h1 class="text-center">Staatslexikon</h1>
    <div>
      <div class="container text-center">
        <div class="jumbotron jumbotron-fluid position-relative">
          <h1 class="font-weight-bold display-4 text-primary text-width">Kleines Staats-kundelexikon</h1>
          <div class="d-flex justify-content-center  position-absolute fixed-bottom">
            <div v-for="(my, index) in myJson" :key="index">
              <a @click="itemToShow = index" class="utility px-2">{{ my.ako }}</a>
            </div>
          </div>
        </div>
        <div
          class="container-fluid shadow bg-white rounded"
          v-for="(my, index) in myJson"
          :key="index"
        >
          <p v-show="itemToShow == index" class="lead">{{ my.letter }}</p>
        </div>
      </div>
    </div>
  </div>
  <!--      Container Text  End        -->
  <!-- <p v-show="itemToShow == index">{{ my.letter }}</p>  -->
</template>

<script>
import json from "../../data.json";

export default {
  data() {
    return {
      myJson: json,
      //alphabets: "ABCDEFGHIJKLMNOPQRSTUWXYZ",
      itemToShow: -1,
      content: ""
    };
  },
  methods: {},
  mounted() {}
};
</script>


<style scoped>
.spacerline {
  margin: 40px 0;
  height: 1px;
  background: #ccc;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #ccc;
}

.utility {
  font-size: 20px;
  color: #b4b4b4;
  text-decoration: none;
  transition: all 0.3s;
}
.lead {
  max-width: 500px;
  margin: auto;
}


.utility:hover,
.utility:active {
  font-size: 30px;
  color: darkblue !important;
  cursor: pointer;
  border-bottom: 3px solid darkblue;
}
</style> 

