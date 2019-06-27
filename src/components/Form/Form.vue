<template>
  <div>
    <br>
    <div class="spacerline"></div>
    <br>
    <h1 class="text-center font-weight-medium">Prufe Dich selbst</h1>
    <br>
    <div class="container shadow-sm p-3 bg-white rounded">
      <div class="jumbotron position-relative">
        <h1 class="text-center text-width">Prufe dich selbst</h1>
        <p
          class="lead text-justify position-absolute fixed-bottom text-center"
          style="max-width: 800px;"
        >1 richtig 6 fallsch</p>
      </div>
      <div class="container shadow p-3 mb-5 bg-white rounded text-center">
        <ul class="list-inline d-inline-flex" style="max-width: 500px;">
          <li class="list-inline-item">
            <h1>Frage</h1>
          </li>
          <li class="list-inline-item">
            <p
              class="lead text-center text-justify"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente in consequuntur iste aspernatur recusandae id porro odio voluptates maiores blanditiis modi, eos quibusdam! Voluptates</p>
          </li>
        </ul>
        <form class="form-width">
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg padding"
              id="formGroupExampleInput"
              placeholder="Katzli"
            >
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg padding"
              id="formGroupExampleInput2"
              placeholder="Mausi"
            >
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg padding"
              id="formGroupExampleInput"
              placeholder="Furiouso"
            >
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control form-control-lg padding"
              id="formGroupExampleInput2"
              placeholder="Schrattlig"
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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

.form-width {
  max-width: 500px;
  margin-left: 400px;
}

.padding {
  padding: 35px;
  background-color: #e9ecef;
}
</style>
