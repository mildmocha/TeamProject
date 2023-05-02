/* brnad list */
const listsBtn = document.querySelector('.lists_btn');
const lists = document.querySelector('.lists');

listsBtn.addEventListener('click', function(){
    if(listsBtn.classList.toggle('active')){
        lists.classList.add('down')
    }else{
        lists.classList.remove('down')
    }
})
/* brnad list end */