<template>
  <div class="container">
    <!-- inicio encabezado del sitio -->
    <header class="header">
      <img class="logo" src="../public/images/ifruverLogo.jpeg" />
      <nav class="navbar navbar-expand-lg navbar-dark" id="menu">
        <div class="container-fluid justify-content-between py-1 my-1">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Menu />
        </div>
      </nav>
    </header>
    <br /><br />
    <!-- fin encabezado del sitio -->

    <!-- Modal -->
    <Modal type="login" />

    <!-- component matched by the route will render here -->
    <router-view />

    <!-- Inicio pie del sitio -->
    <footer id="footer">
      <div class="row">
        <div class="col-6 nav flex-column py-2">
          <h5>Más Información</h5>
          <p class="text-justify">
            Correo electrónico: ventas@ifruver.com.co<br />
            Teléfonos: 312 890 3467 - 321 765 8734<br />
          </p>
        </div>
        <div class="col-6 flex-column py-2 my-1">
          <h5>Encuentranos en redes sociales</h5>
          <ul class="d-flex justify-content-center">
            <li>
              <a
                href="https://www.instagram.com/?hl=es"
                target="blank"
                class="nav-link p-0 m-3 text-white align-center"
              >
                <img
                  src="../public/images/instagram.png"
                  id="instagram"
                />i-fruver</a
              >
            </li>
            <li>
              <a
                href="https://es-la.facebook.com/"
                target="blank"
                class="nav-link p-0 m-3 text-white"
              >
                <img
                  src="../public/images/facebook-icon.png"
                  id="instagram"
                />i-fruver</a
              >
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-center py-1 my-1 border-top text">
          <p id="copyright">
            Copyright&copy; 2021 - Página creada por Grupo 3 (Equipo 3) Misión
            TIC UTP - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
    <!-- fin pie del sitio -->
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Menu from "./components/Menu.vue";
export default {
  components: { Modal, Menu },
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Krub", sans-serif;
}

html,
body {
  box-sizing: border-box;
  min-height: 100%;
}

.logo {
  width: 200px;
}

#menu {
  display: flex;
  padding: 0px;
  background-color: rgb(54, 161, 72);
  align-items: center;
  justify-content: space-around;
}
#menu a {
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: white;
}

#menu a:hover {
  background-color: #e1e78c;
  color: black;
  border-radius: 5px;
}

.carrousel {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.nosotros-section,
.team-section {
  display: flex;
}

.nosotros-section {
  background-color: #f7f7f7;
  flex-wrap: inherit;
}

.nosotros-header {
  display: flex;
  justify-content: left;
}

.nosotros-info {
  width: 100%;
  padding: 20px;
}

.nosotros-info__text {
  text-align: justify;
}

.nosotros-info__imagen {
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
}

.team-info {
  width: 25%;
  padding: 15px;
}

.team-info__imagen {
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
}

.team-info__text {
  text-align: justify;
}

.team-info__title {
  text-align: center;
}

.login {
  align-content: left;
}

#instagram {
  max-width: 40px;
}

#facebook {
  max-width: 30px;
}

#footer {
  background-color: rgb(54, 161, 72);
  margin-left: 5px;
  color: white;
  text-align: center;
  margin-top: 100px;
}

#footer h5 {
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 10px;
}

#footer img {
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer li {
  list-style: none;
}

#copyright {
  font-size: 1rem;
  font-weight: bold;
}

#boton-carrito {
  text-align: right;
  font: bold;
}

.my-view {
  min-height: 400px;
}
.margin-button-enviar {
  margin-left: 500px;
}

.login-button {
  margin-right: 20px;
}
</style>
