<template>
  <div class="register">
    <h2>Registro de usuario</h2>
    <br />
    <form class="ui form">
      <div class="field">
        <input type="text" placeholder="Nombre de usuario" />
      </div>
      <br />
      <div class="field">
        <input type="email" placeholder="Correo eletronico" />
      </div>
      <br />
      <div class="field">
        <input type="password" placeholder="Contraseña" />
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden" />
          <label>Acepto los términos y condiciones</label>
        </div>
      </div>
      <br />
      <button
        type="submit"
        class="ui button fluid primary"
        :class="{ loading }"
      >
        Crear usuario
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  props: {},
};
</script>

<style>
.register {
  text-align: center;
}

.ui.form {
  max-width: 300px !important;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>
