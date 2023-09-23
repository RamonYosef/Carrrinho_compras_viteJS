import { btnCheck, btnDel } from "../componets/buttons";
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
    product.innerHTML = "";
    productBuy.innerHTML = "";
    const prevdata = data();

    data().forEach((e, index) => {
        const itemLi = document.createElement("li");
        itemLi.setAttribute("data-index", index);

        const itemHtml = `
        <span>
              <strong>Nome:</strong> ${e.nome} <br>
              <strong>Valor:</strong> ${e.valor} <br>
              <strong>descrição:</strong> ${e.desc} <br>
              <strong>quantidade:</strong> ${e.qtd} 
        </span>
        <span class='d-flex gap-3 mt-3'> 
             ${prevdata[index].check === true
                ?
                "<button class='btn btn-danger check btn-sm'>Voltar</button>" +
                "<button class='btn d-none btn-edit btn-sm'>Editar</button>" +
                "<button class='btn d-none btn-danger  del btn-sm'>delete</button>"
                :
                "<button class='btn btn-success check btn-sm'>Comprado</button>" +
                "<button class='btn btn-primary btn-edit btn-sm'>Editar</button>" +
                "<button class='btn btn-danger del btn-sm'>delete</button>"
            }  
        </span>
      `;

        itemLi.innerHTML = itemHtml;

        {e.check == false ? product.append(itemLi) : productBuy.append(itemLi)}

        // if (e.check == false) {
        //     product.append(itemLi);
        // } else {
        //     productBuy.append(itemLi);
        // }
    });

    btnCheck();
    btnDel();
}


function checkList(index) {
    const prevdata = data();
    prevdata[index].check = !prevdata[index].check;
    localStorage.setItem('list', JSON.stringify(prevdata));
}

function delList(index) {
    const prevdata = data();
    prevdata.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(prevdata));
}

export {
    renderTodos,
    dataPush,
    checkList,
    delList
}