const techProducts = [
    { id: 1, name: 'computer', price: 2100, },
    { id: 2, name: 'mouse', price: 78, },
    { id: 3, name: 'monitor', price: 589, },
    { id: 4, name: 'keyboard', price: 78, },
    { id: 5, name: 'HD', price: 350, },
    { id: 6, name: 'webcam', price: 187, },
    { id: 7, name: 'mic', price: 78, },
    { id: 8, name: 'headset', price: 216, },
];
//---------------------------------------------------------------------------------------------------------------------
// 1 - Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

let productEven = [];
const getProductEven = () => {
    techProducts.forEach((product) => {
        if (product.id % 2 === 0) {
            productEven.push(product.name);
        }
    })
    return productEven;
};
// console.log(getProductEven());
//---------------------------------------------------------------------------------------------------------------------

// 2 - Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário

const price300 = () => techProducts.some((product) => product.price > 300);
// console.log(price300());

//---------------------------------------------------------------------------------------------------------------------
// 3 - Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total

const findProduct = (id, unity) => {
    let result = 0;
    techProducts.find((product) => {
        if (product.id === id) {
            result = product.price * unity
        };
    })
    return result;
}
// console.log(findProduct(8, 2));

//---------------------------------------------------------------------------------------------------------------------
// 4 - Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais

const findPrice = (price) => techProducts.filter((product) => product.price === price)

// console.log(findPrice(78));