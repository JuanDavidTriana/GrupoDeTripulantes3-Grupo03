const routes = {},
    defaultRoute = 'home';

routes['home'] = {
    url: '#/',
    templateUrl: 'pages/home.html'
};

routes['blog'] = {
    url: '#/blog',
    templateUrl: 'pages/blog.html'
};

routes['carrito'] = {
    url: '#/carrito',
    templateUrl: 'pages/carrito.html'
};

routes['contacto'] = {
    url: '#/contacto',
    templateUrl: 'pages/contacto.html'
};

routes['tienda'] = {
    url: '#/tienda',
    templateUrl: 'pages/tienda.html'
};

$.router
    .setData(routes)
    .setDefault(defaultRoute);

$.when($.ready)
    .then(function() {
        $.router.run('.my-view', 'home');
    });