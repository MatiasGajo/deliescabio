let productos = [];

fetch("./js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    mostrarProductos()
})


let carrito = [];

  if (localStorage.getItem("carrito")) {
      carrito = JSON.parse(localStorage.getItem("carrito"))
  }


const containerProductos = document.getElementById("containerProductos");
console.log(containerProductos)


const mostrarProductos = () => {
    productos.forEach( producto => {
       const card = document.createElement("div");
        card.classList.add("col-xl-2", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card mt-3">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> $${producto.precio} </p>
                        <button class="colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                    </div>
                </div>
                        `
containerProductos.appendChild(card);

const boton = document.getElementById(`boton${producto.id}`)


boton.addEventListener("click", () => {
    agregarCarrito(producto.id);
})
    })
}



const agregarCarrito = (id) => {
    Toastify({
        text: "Producto Agregado",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #111, #111)",
          borderRadius: "1rem",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    const productoCarrito = carrito.find(producto => producto.id === id)
    if(productoCarrito) {
        productoCarrito.cantidad++;
    }else {
        const productoo = productos.find(producto => producto.id === id)
        carrito.push(productoo)
    }
    mostrarCarrito()
    total()
     localStorage.setItem("carrito", JSON.stringify(carrito))
}

const containerCarrito = document.getElementById("containerCarrito")

const vaciarCarrito = document.getElementById("vaciarCarrito")

const mostrarCarrito = () => {
    containerCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-2", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card mt-3">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> $${producto.precio} </p>
                        <button id="${producto.id}" class="botonColor botonSumar">+</button>
                        <button id="${producto.id}" class="botonColor botonRestar">-</button>
                        <p>${producto.cantidad} </p>
                        <button class="colorBoton" id="botonEliminar${producto.id}"> Eliminar Producto </button>
                    </div>
                </div>
                        `

containerCarrito.appendChild(card);

  const boton = document.getElementById(`botonEliminar${producto.id}`)
  boton.addEventListener("click", () =>{
      eliminarCarrito(producto.id);
 })
    })

const botonSumar = document.querySelectorAll(".botonSumar")

botonSumar.forEach(btn => btn.addEventListener("click", sumarProd))

const botonRestar = document.querySelectorAll(".botonRestar")

botonRestar.forEach(btn => btn.addEventListener("click", restarProd))

    total()
}

const restarProd = (e) => {
    const prod = carrito.findIndex( prod => prod.id === parseInt(e.target.id))
    if (carrito[prod].cantidad > 1) {
    carrito[prod].cantidad--
    mostrarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
}

const sumarProd = (e) => {
    const prod = carrito.findIndex( prod => prod.id === parseInt(e.target.id))
    carrito[prod].cantidad++
    mostrarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const eliminarCarrito = (id) => {
    Toastify({
        text: "Producto Eliminado",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #111, #111)",
          borderRadius: "1rem",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    const producto = carrito.find(producto => producto.id === id)
    const indice = carrito.indexOf(producto)
    carrito.splice(indice, 1)
    mostrarCarrito()

     localStorage.setItem("carrito", JSON.stringify(carrito))
}


vaciarCarrito.addEventListener("click", () => {
    vaciarTodoElCarrito()
})

const vaciarTodoElCarrito = () => {
    if(carrito.length != 0){
        Swal.fire({
            title: 'Estas seguro?',
            icon: 'info',
            html:
              'Se van a borrar todos tus productos',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              'Si',
            cancelButtonText:
              'No',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                carrito = [];
                mostrarCarrito()
                 localStorage.clear()
            }
          })
    }else {
        Swal.fire({
            title: 'No es posible!',
            icon: 'info',
            html:
              'No tienes productos en tu carrito',
            focusConfirm: false,
            confirmButtonText:
              'OK',
          })
    }
}


const totalCompra = document.getElementById("totalCompra");

const total = () => {
    let numero = 0;
    carrito.forEach(producto => {
        numero += producto.precio * producto.cantidad
    })

    totalCompra.innerHTML = `$${numero}`
}

const comprar = document.getElementById("comprar");

comprar.addEventListener("click",() =>{
    if(carrito.length != 0){
        Swal.fire('Muchas gracias por su compra!')
        carrito = [];
        mostrarCarrito()
    
         localStorage.clear()
    }else {
        Swal.fire({
            title: 'No es posible!',
            icon: 'info',
            html:
              'No tienes productos en tu carrito',
            focusConfirm: false,
            confirmButtonText:
              'OK',
          })
    }
})



const botonMas = () => {
    console.log("click")
}
