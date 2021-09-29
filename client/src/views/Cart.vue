<template>
  <main>
    <div class="container">
      <div class="row">
        <div col-lg-12 col-m-8 col-s-4>
          <h2 class="text-center"><strong>Carrito de Compras</strong></h2>
          <br />
          <CartElements />
          <div id="boton-carrito">
            <button class="btn btn-outline-success" type="submit">
              Confirmar Pedido
            </button>
            <button class="btn btn-outline-success" type="submit">
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import CartElements from "@/components/CartElements.vue";

export default {
  name: "Home",
  components: {
    CartElements,
  },
};
</script>
