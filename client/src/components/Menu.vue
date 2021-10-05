<template>
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
              class="icon icon-tabler icon-tabler-shopping-cart-discount"
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
    <!-- Button trigger modal -->
    <button
      v-on:click="openModal()"
      type="button"
      class="btn btn-light login-button"
    >
      Login
    </button>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  methods: {
    openModal: function () {
      $("#modalId").modal("show");
    },
  },
};
</script>

<style></style>
