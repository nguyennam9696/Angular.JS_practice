//controller help get data onto the page
// how to get variable onto our page
(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 2.95;
        description: '. . .'
    }
})();

<html ng-app="store">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div ng-controller="StoreController as store">
        <h1> {{store.product.name}} </h1>
        <h1> {{store.product.price}} </h1>
        <h1> {{store.product.description}} </h1>
    </div>
</body>
</html>