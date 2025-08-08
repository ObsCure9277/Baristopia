const drinks = [
     {
        id : 1, 
        title : "Asian Dolce Latte",
        image: "/img/Asian-Dolce-Latte.jpg",
        price : 19
    },
     {
        id: 2,
        title : "Caffe Americano",
        image : "/img/caffe-americano.jpg",
        price : 19 
    },
     {
        id: 3,
        title : "Caffe Latte",
        image : "/img/caffe-latte.jpg",
        price : 19
    },
     {
        id:  4,
        title : "Caffe Mocha",
        image : "/img/caffe-mocha.jpg",
        price : 16
    },
     {
        id:  5,
        title : "Cappuccino",
        image : "/img/cappuccino.jpg",
        price : 17
    },
     {
        id:  6,
        title : "Caramel Macchiato",
        image : "/img/caramel-macchiato.webp",
        price : 15  
    },
     {
        id:  7 ,
        title : "Cocoa Cappuccino",
        image : "/img/cocoa-cappuccino.webp",
        price : 17
    },
     {
        id:  8,
        title : "Cold Foam Iced Espresso",
        image : "/img/cola-foam-iced-expresso.webp",
        price : 16
    },
     {
        id:  9,
        title : "Cold Brew",
        image : "/img/coldbrew.webp",
        price : 17 
    },
     {
        id:  10,
        title : "DoubleShot-Iced Shaken Espresso",
        image : "/img/doubleshot-iced-shaken-espresso.jpg",
        price : 19
    },
     {
        id:  11,
        title : "Matcha Cold Foam Iced Americano",
        image : "/img/matcha-cold-foam-iced-americano.webp",
        price : 16
    },
     {
        id:  12,
        title : "Vanilla Sweet Cream Cold Brew",
        image : "/img/vanilla-sweet-cream-cold-brew.jpg",
        price : 18
    },
     {
        id:  13,
        title : "Mango Passionfruit Iced Black Tea",
        image : "/img/mango-passion-fruit-cold-foam-shaken-iced-black-tea.jpg",
        price : 13 
    },
     {
        id:  14, 
        title : "Iced Shaken Lemon Tea",
        image : "/img/ice-shaken-lemon-tea.jpg",
        price : 14
    },
    {
        id:  15,
        title : "Green Tea Latte",
        image : "/img/green-tea-latte.jpg",
        price : 15
    }
    
]

const categories = [... new Set(drinks.map((item) =>
    {return item}))]
    let j = 0; 

var cart = []; 
function addToCart(a){
    cart.push({...categories[a]});
    displayCart(); 
}
function displayCart(a){
    let j = 0, total = 0; 
    document.getElementById('qty').innerHTML = cart.length ;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"; 
        document.getElementById("total").innerHTML = "$ "+0+".00"; 
    }
    else{
        document.getElementById("cartItem").innerHTML= cart.map((items)=>{
            var {image,title,price} = items; 
            total=total+price;
            document.getElementById("total").innerHTML = "$"+total+".00"
            return(
            `<div class='cart-item'>
            <div class='row-img'>
                <img class='rowing' src="${image}" alt="hi"/>
            </div>
            <p style='font-size:15px;'>${title}</p>
            <h2 style='font-size:15px;'>$${price}.00</h2> 
            <img src="/img/x.png" onclick='delElement("+(j++)+")'/></div>`
            ); 
        }).join(''); 
    }
} 
function showCart(){
    var x = document.getElementById('side'); 
    if (window.innerWidth <= 768) {
        // Mobile behavior
        if (x.classList.contains('show')) {
            x.classList.remove('show');
        } else {
            x.classList.add('show');
        }
    } else {
        // Desktop behavior (existing code)
        if (x.style.display === "none"){ 
            x.style.display = "block"; 
        } else {
            x.style.display = "none"; 
        }
    }
}

// Close cart when clicking outside on mobile
document.addEventListener('click', function(event) {
    const cart = document.getElementById('side');
    const cartButton = document.getElementById('cartBttn');
    
    if (window.innerWidth <= 768 && cart.classList.contains('show')) {
        if (!cart.contains(event.target) && !cartButton.contains(event.target)) {
            cart.classList.remove('show');
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const cart = document.getElementById('side');
    if (window.innerWidth > 768) {
        cart.classList.remove('show');
        cart.style.display = 'none';
    }
});

function delElement(a){
    cart.splice(a,1);
    displayCart();
}