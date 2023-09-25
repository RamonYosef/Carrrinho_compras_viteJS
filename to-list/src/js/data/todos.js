import { btnCheck, btnDel, btnEdit } from "../componets/buttons";
import { myModal, product, productBuy } from "../variables";

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
            ${prevdata[index].check === true? "<strong class='fs-3'>Realizado <i class='bx bxs-badge-check'></i></strong><br>": ""}
              <strong>Nome:</strong> ${e.nome} <br>
              <strong>Valor:</strong> ${e.valor} <br>
              <strong>descrição:</strong> ${e.desc} <br>
              <strong>quantidade:</strong> ${e.qtd} 
        </span>
        <span class='d-flex gap-3 mt-3'> 
             ${prevdata[index].check === true
                ?
                "<button class='btn btn-danger check btn-sm btn-back'>Voltar</button>" +
                "<button class='btn  invisible btn-edit btn-sm'>Editar</button>" +
                "<button class='btn  invisible btn-danger  del btn-sm'>delete</button>"
                :
                "<button class='btn btn-success check btn-sm'>Comprado</button>" +
                "<button class='btn btn-primary edit btn-sm'>Editar</button>" +
                "<button class='btn btn-danger del btn-sm'>delete</button>"
            }  
        </span>
      `;

        itemLi.innerHTML = itemHtml;

        {e.check == false ? product.append(itemLi) : productBuy.append(itemLi)}
        {e.check == false ? itemLi.classList.add("list__item", "bg-light") : itemLi.classList.add("list__item_buy");}
        

        // if (e.check == false) {
        //     product.append(itemLi);
        // } else {
        //     productBuy.append(itemLi);
        // }
    });

    btnCheck();
    btnDel();
    btnEdit();
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

function editList(index){
    const prevdata = data();
    const form = document.querySelector('#formProductEdit');

    form.querySelector('[name=nomeEdit]').value = prevdata[index].nome;
    form.querySelector('[name=valorEdit]').value = prevdata[index].valor;
    form.querySelector('[name=descEdit]').value = prevdata[index].desc;
    form.querySelector('[name=qtdEdit]').value = prevdata[index].qtd;
    console.log(prevdata[index].nome); 

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const newData = ({
            nome:  form.querySelector('[name=nomeEdit]').value,
            valor: form.querySelector('[name=valorEdit]').value,
            desc: form.querySelector('[name=descEdit]').value,
            qtd:  form.querySelector('[name=qtdEdit]').value,
            check: false
        })

        prevdata[index] = newData;
        localStorage.setItem('list', JSON.stringify(prevdata));
        myModal.hide();

        renderTodos();
    })
   
}





export {
    renderTodos,
    dataPush,
    checkList,
    delList,
    editList,
}