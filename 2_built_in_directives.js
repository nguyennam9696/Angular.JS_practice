var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true, //only show if it is true
    soldOut: true //hide product if it is sold out
}

<html ng-app="store">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div ng-hide="store.product.soldOut" ng-controller="StoreController as store">
        <h1> {{store.product.name}} </h1>
        <h2> {{store.product.price}} </h2>
        <p> {{store.product.description}} </p>
        //only show if canPurchase is true
        <button ng-show="store.product.canPurchase"> Add to Cart </button>
    </div>
</body>
</html>