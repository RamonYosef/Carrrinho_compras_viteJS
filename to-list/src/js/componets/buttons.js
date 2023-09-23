import { checkList, delList, renderTodos } from "../data/todos";

function btnCheck(){
    const check = document.querySelectorAll('.check');

    check.forEach((btn) => {
        btn.addEventListener('click', () => {
            const li = btn.closest('li');
            const index = li.dataset.index;
            checkList(index);
            renderTodos();
        })
    })
}

function btnDel(){
    const del = document.querySelectorAll('.del');

    del.forEach((btn) => {
        btn.addEventListener('click', () => {
            const li = btn.closest('li');
            const index = li.dataset.index;
            delList(index);
            renderTodos();
        })
    })
}

export{
    btnCheck,
    btnDel
}