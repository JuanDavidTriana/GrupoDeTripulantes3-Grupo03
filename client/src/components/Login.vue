<template>
  <div class="Login">
    <form class="ui form">
      <div class="field">
        <label>Usuario</label>
        <input type="text" name="name-user" placeholder="e-mail" />
      </div>
      <br />
      <div class="field">
        <label>Contraseña</label>
        <input type="password" name="psw" placeholder="E.j. ••••••• " />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
};
</script>

<style></style>
