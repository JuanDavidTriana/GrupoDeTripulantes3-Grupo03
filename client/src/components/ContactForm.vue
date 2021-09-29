<template>
  <form class="d-flex flex-column align-items-center">
    <div class="form-group col-sm-6">
      <input
        type="text"
        class="form-control"
        id="inputNombre"
        placeholder="* Nombre y Apellido"
        required
      />
    </div>
    <br />
    <div class="form-group col-sm-6">
      <input
        type="email"
        class="form-control"
        id="inputEmail"
        placeholder="* Email"
        required
      />
    </div>
    <br />
    <div class="form-group col-sm-6">
      <textarea
        type="text"
        class="form-control"
        rows="4"
        placeholder="* Mensaje..."
        required
      ></textarea>
    </div>
    <br />
    <div class="d-flex justify-content-end form-group margin-button-enviar">
      <button type="submit" class="btn btn-outline-success right">
        Enviar
      </button>
    </div>
    <br />
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  props: {},
};
</script>

<style></style>
