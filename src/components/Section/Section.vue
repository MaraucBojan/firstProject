<template>
  <div>
    <div class="container fluid text-center">
      <h1>Starseiter</h1>
      <br>
      <br>
      <div class="jumbotron jumbotron-fluid shadow bg-white rounded" style="margin: 0; padding: 0;">
        <div class="container position-relative">
          <img src="https://dummyimage.com/1000x600/000/fff" class="img-fluid" alt="img">
          <div class="position-absolute fixed-top flexy">
            <b-dropdown text="Staatskunde Grundbegriffe" variant="primary">
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>

            <b-dropdown text="Das furstentum liechtenstein" variant="danger">
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>

            <b-dropdown text="Die Aussenpolitik" variant="warning">
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <!-- Dropdown End  -->
        <br>
        <!-- Cards -->
        <div
          class="row margin-color"
          style="justify-content: space-around; background-color: #e9ecef; margin: 0;"
        >
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="https://dummyimage.com/200x150/000/fff"
                class="card-img-top img-fluid"
                style="border-bottom: 3px solid blue"
              >
              <div class="card-block">
                <h2 class="card-title">Something german</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quos?
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="https://dummyimage.com/200x150/000/fff"
                class="card-img-top img-fluid"
                style="border-bottom: 3px solid crimson"
              >
              <div class="card-block">
                <h2 class="card-title">something german</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quos?
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="https://dummyimage.com/200x150/000/fff"
                class="card-img-top img-fluid"
                style="border-bottom: 3px solid yellow"
              >
              <div class="card-block">
                <h2 class="card-title">GErman</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quos?
              </div>
            </div>
          </div>
        </div>
        <div
          class="row"
          style="justify-content: space-around; background-color: #e9ecef; margin: 0;"
        >
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="https://dummyimage.com/200x150/000/fff"
                class="card-img-top img-fluid"
                style="border-bottom: 3px solid blue"
              >
              <div class="card-block">
                <h2 class="card-title">something german</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quos?
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="https://dummyimage.com/200x150/000/fff"
                class="card-img-top img-fluid"
                style="border-bottom: 3px solid crimson"
              >
              <div class="card-block">
                <h2 class="card-title">something german</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quos?
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card">
              <img
                src="https://dummyimage.com/200x150/000/fff"
                class="card-img-top img-fluid"
                style="border-bottom: 3px solid yellow"
              >
              <div class="card-block">
                <h2 class="card-title">something german</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quos?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>

  <!-- cards end -->
</template>

<script>
export default {};
</script>

<style scoped>
.flexy {
  display: flex;
  justify-content: space-around;
}

.margin-color {
  justify-content: space-around;
  background-color: #e9ecef;
  margin: 0;
}
</style>