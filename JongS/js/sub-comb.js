
import products from "./comb.json" assert{type: 'json'}
console.log(products)

let myProduct;

const inputs = document.querySelectorAll('.brand input');
const types = document.querySelectorAll('.type input');
 
function checkOnlyOne(element) {
  
    let checkboxes 
        = document.getElementsByName('brandi');
 
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }
  function checkOnlyOneType(element) {
  
    let checkboxes 
        = document.getElementsByName('typei');
 
    
    checkboxes.forEach((aa) => {
      aa.checked = false;
    })
    
    element.checked = true;
  }

  function getTypeboxValue(event)  {
   
    if(event.target.checked) {
        checkOnlyOne(this);
        checkOnlyOneType(this);
        console.log(event.target.value)
    }
    
    const filtered = myProduct.filter((aa)=>{
        return (aa.type ===event.target.value);
    })
    removeItem() 
    
    filtered.forEach((product)=>{
    createItem(product);}
    
    

    )
 if(!event.target.checked){
    removeItem()
    importData()
 }}
    types.forEach((input) => {
        input.addEventListener('change', getTypeboxValue);
    });

function getCheckboxValue(event)  {
   
    if(event.target.checked) {
        checkOnlyOne(this);
        checkOnlyOneType(this);
        console.log(event.target.value)
    }
    
    const filtered = myProduct.filter((aa)=>{
        return (aa.brand ===event.target.value);
    })
    removeItem() 
    
    filtered.forEach((product)=>{
    createItem(product);}
    
    

    )
 if(!event.target.checked){
    removeItem()
    importData()
 }}
    inputs.forEach((input) => {
        input.addEventListener('change', getCheckboxValue);
    });
       

/*const selectCategory = (event) => {
    if(!myProduct) {return}
    // //target> ... > options > selectedIndex -몇 번 선택했는지 알 수 있음
   // console.log(event)
    //const {selectedIndex} = event.target.options; //순서
   // console.log(selectedIndex,'selectedIndex')
    //구조분해 value(key)의 값 (value)
    const {selectedIndex:n} = event.target.value;//
  const {value} = event.target.options[n] // 순서가 갖는 밸류
    
    console.log(event.target.options[n])
    console.log(value)
  
    const filtered = myProduct.filter((aa)=>{
        return aa.category === value;
    })
    removeItem() 
    filtered.forEach((product)=>{
    createItem(product);
})
     
}
*/

//li 삭제 
const removeItem = () => {
    const items = document.querySelectorAll('.goods li')
    items.forEach((items)=> {
        items.remove();
    })
}



//li만들어서 ul에 넣어주는 함수
const createItem = (product) => {
    const ul = document.querySelector('.goods');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const span = document.createElement('span');
   
   
    // 한국 원화는 보조 통화 단위를 사용하지 않음

    

    const price = new Intl.NumberFormat('ko-KR', {
        style: 'currency', currency: 'KRW'
    }).format(product.price)



    img.setAttribute('src', product.img)
    li.id = product.id;
    p.className = 'name';
    p.innerHTML = product.name
    span.className = 'price'
    span.innerText = price;


    li.append(img, p, span)
    ul.append(li)
}

//만든 li들을 반복되게
const importData = () => {
    
    myProduct = products.data;
    myProduct.map((product) => {
        createItem(product);
    })

}

importData()
