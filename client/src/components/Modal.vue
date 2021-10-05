<template>
  <div
    class="modal fade"
    id="modalId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Inicio de sesión</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Login />
        </div>
        <div class="modal-footer">
          <router-link to="/register">
            <a
              v-on:click="onRegister()"
              data-dismiss="modal"
              data-toggle="modal"
              class="item"
              href="../views/Register.vue"
              >Registrarse</a
            >
          </router-link>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
export default {
  name: "Modal",
  components: { Login },
  props: {},
  methods: {
    onRegister: function () {
      $("#modalId").modal("hide");
    },
  },
};
</script>

<style></style>
