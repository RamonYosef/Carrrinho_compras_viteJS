import { checkList, delList, editList, renderTodos } from "../data/todos";
import { myModal } from "../variables";

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

function btnEdit(){
    const edit = document.querySelectorAll('.edit');

    edit.forEach((btn) => {
        btn.addEventListener('click', () => {
            const li = btn.closest('li');
            const index = li.dataset.index;
            editList(index);
            myModal.show();
            renderTodos();
        })
    })
}

export{
    btnCheck,
    btnDel,
    btnEdit
}