<template>
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
                src="../../public/images/instagram.png"
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
                src="../../public/images/facebook-icon.png"
                id="instagram"
              />i-fruver</a
            >
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-center py-1 my-1 border-top text">
        <p id="copyright">
          Copyright&copy; 2021 - Página creada por Grupo 3 (Equipo 3) Misión TIC
          UTP - Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
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
</style>
