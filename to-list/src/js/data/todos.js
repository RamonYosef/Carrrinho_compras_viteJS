import { btnCheck } from "../componets/buttons";
import { product, productBuy } from "../variables";

function data() {
    if (localStorage.getItem('list')) {
        return JSON.parse(localStorage.getItem('list'));
    }

    return [];
}

function dataPush(e) {
    const prevdata = data();
    prevdata.push(e);
    localStorage.setItem('list', JSON.stringify(prevdata));
}

function renderTodos() {
    data().forEach((e, index) => {
        product.innerHTML = '';
        productBuy.innerHTML = '';

        const itemList = document.createElement('li');
        itemList.setAttribute('data-index', index)

        const HtmlList = `
        <span class='mb-3'>
            <strong>Nome: </strong> ${e.nome} <br>
            <strong>Valor: </strong> ${e.valor} <br>
            <strong>Descrição: </strong> ${e.desc} <br> 
            <strong>Quantidade: </strong> ${e.qtd} <br>
        </span>
        <span class='mb-3'>
            <button class='btn btn-success btn-sm check'>Comprado</button>
            <button class='btn btn-primary btn-sm'>Editar</button>
            <button class='btn btn-danger btn-sm'>Remover</button>
        </span>
    
    `;

        itemList.innerHTML = HtmlList;

        { e.check == false ? product.append(itemList) : productBuy.append(itemList) }

    });

    btnCheck();

}

function checkList(index){
    const prevdata = data();
    prevdata[index].check = !prevdata[index].check;
    localStorage.setItem('list', JSON.stringify(prevdata));
}

export {
    renderTodos, dataPush, checkList
}