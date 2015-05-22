var gems = [
{
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true, //only show if it is true
    soldOut: true //hide product if it is sold out
},
{
    name: 'Pentagonal Gem',
    price: 5.95,
    description: ". . .",
    canPurchase: false,
}
];

<html ng-app="store">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body ng-controller="StoreController as store">
    <div ng-hide="store.product.soldOut" >
        <h1> {{store.products[0].name}} </h1>
        <h2> {{store.products[0].price}} </h2>
        <p> {{store.products[0].description}} </p>
        //only show if canPurchase is true
        <button ng-show="store.products[0].canPurchase"> Add to Cart </button>
    </div>
</body>
</html>

//iterate through array instead of hard coding the index
//use ng-repeat directive
//product is the array we want to iterate over
<body ng-controller="StoreController as store">
    <div ng-repeat="product in store.products">
        <h1> {{product.name}} </h1>
        <h2> {{product.price}} </h2>
        <p> {{product.description}} </p>
        //only show if canPurchase is true
        <button ng-show="product.canPurchase"> Add to Cart </button>
    </div>
</body>