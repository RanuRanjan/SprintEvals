var products=document.getElementById("products")


function addProduct(e){
    // encouter the defualt behaviour of form
    e.preventDefault();


    //getting the value
    var productName= document.getElementById("name").value
    var url= document.getElementById("url").value   
    var price= document.getElementById("price").value
    

    //creating the value
    var p=document.createElement("p")
    var image=document.createElement("img")
    var price_p=document.createElement("p")
  
    var cart=document.createElement("div")
    
   
    // console.log(productName,url,price);

    // setting the value
    p.innerHTML=productName
    image.setAttribute('src',url)
    price_p.innerHTML=price
    cart.innerHTML=`<a onclick="addCart()" href="cart.html" target="_blank">Add to cart`


    //appending the value to dom
    var div=document.createElement('div')
    div.append(image,p,price_p,cart)

    products.append(div)
}

function addCart(){
   
    alert("Product Added to Cart")
    
}


