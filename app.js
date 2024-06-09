
const div = document.querySelector('div')


axios('https://fakestoreapi.com/products')
.then((res)=>{
console.log(res.data);


res.data.map((item)=>{
       
div.innerHTML += `<div class="main-card">
                  <h2>Title : ${item.title}</h2>
                  <img width ="150" src="${item.image}"  alt="products" /> 
                  <h2>price : ${item.price}</h2>
                  <hr/>
                  </div>
`

})



}).catch((err)=>{
console.log(err);
})
