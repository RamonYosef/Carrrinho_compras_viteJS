const app = document.querySelector('#app');
const product = document.querySelector('#product');
const productBuy = document.querySelector('#productBuy');


const myModal = bootstrap.Modal.getOrCreateInstance('#myMobal', {
  keyboard: false
})

export{
    app,
    product,
    productBuy,
    myModal,
}