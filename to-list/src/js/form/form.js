import { dataPush, renderTodos } from "../data/todos";

const formProduct = document.querySelector('#formProduct');

function onSubmitFormProduct(){
    formProduct.addEventListener('submit', (ev) => {
        ev.preventDefault();

        dataPush({
            nome: document.querySelector('[name=nome]').value,
            valor: document.querySelector('[name=valor]').value,
            desc: document.querySelector('[name=desc]').value,
            qtd: document.querySelector('[name=qtd]').value,
            check: false
        })

        renderTodos();
    })
}

export{
    onSubmitFormProduct
}