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
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 100px"
            >
              <li class="nav-item">
                <router-link to="/">
                  <a class="nav-link active">Inicio</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blog">
                  <a class="nav-link">Blog</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/store">
                  <a class="nav-link">Tienda</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact">
                  <a class="nav-link">Contactanos</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart">
                  <a class="nav-link" aria-current="page">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="
                        icon icon-tabler icon-tabler-shopping-cart-discount
                      "
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="6" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M20 6l-1 7h-13" />
                      <path d="M10 10l6 -6" />
                      <circle cx="10.5" cy="4.5" r=".5" />
                      <circle cx="15.5" cy="9.5" r=".5" />
                    </svg>
                  </a>
                </router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <br /><br />
    <!-- fin encabezado del sitio -->

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
export default {
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
</style>
