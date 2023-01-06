
//--------SEGUNDA PRE ENTREGA-------------------
const productos = [
    {
        nombre: "CORONA",
        precio: 450,
        id: 1,
        img: "./img/CORONA.png",

    },
    {
        nombre: "BRAHMA",
        precio: 450,
        id: 2,
        img: "./img/BRAHMA.png",

    },
    {
        nombre: "HEINEKEN",
        precio: 450,
        id: 3,
        img: "./img/HEINEKEN.png",

    },
    {
        nombre: "QUILMES",
        precio: 450,
        id: 4,
        img: "./img/QUILMES.png",

    },
    {
        nombre: "SALTA CAUTIVA ROJA",
        precio: 450,
        id: 5,
        img: "./img/SALTACAUTIVAROJA.png",

    },
    {
        nombre: "SCHNEIDER NEGRA",
        precio: 450,
        id: 6,
        img: "./img/SCHNEIDERNEGRA.png",
        cantidad: 1
    },
    {
        nombre: "SCHNEIDER ROJA",
        precio: 450,
        id: 7,
        img: "./img/SCHNEIDERROJA.png",
        cantidad: 1
    },
    {
        nombre: "STELLA ARTOIS",
        precio: 450,
        id: 8,
        img: "./img/STELLAARTOIS.png",
        cantidad: 1
    },
    {
        nombre: "MALIBU",
        precio: 450,
        id: 9,
        img: "./img/MALIBU.png",
        cantidad: 1       
    },
    {
        nombre: "ABSOLUT APPLE",
        precio: 450,
        id: 10,
        img: "./img/ABSOLUTAPPLE.png",
        cantidad: 1
    },
    {
        nombre: "ABSOLUT GRAPEFUIT",
        precio: 450,
        id: 11,
        img: "./img/ABSOLUTGRAPEFRUIT.png",
        cantidad: 1
    },
    {
        nombre: "ABSOLUT PEARS",
        precio: 450,
        id: 12,
        img: "./img/ABSOLUTPEARS.png",
        cantidad: 1
    },
    {
        nombre: "ABSOLUT RASPBERRI",
        precio: 450,
        id: 13,
        img: "./img/ABSOLUTRASPBERRI.png",
        cantidad: 1
    },
    {
        nombre: "SERNOVA FRESH CITRUS",
        precio: 450,
        id: 14,
        img: "./img/VODKASERNOVAFRESHCITRUS.png",
        cantidad: 1
    },
    {
        nombre: "SERNOVA SWEET APPLE PEAR",
        precio: 450,
        id: 15,
        img: "./img/VODKASERNOVASWEETAPPLEPEAR.png",
        cantidad: 1
    },
    {
        nombre: "SERNOVA WILD BERRIES",
        precio: 450,
        id: 16,
        img: "./img/VODKASERNOVA WILDBERRIES.png",
        cantidad: 1
    },
    {
        nombre: "SMIRNOFF",
        precio: 450,
        id: 17,
        img: "./img/SMIRNOFF.png",
        cantidad: 1
    },
    {
        nombre: "SMIRNOFF GREEN APPLE",
        precio: 450,
        id: 18,
        img: "./img/SMIRNOFFGREENAPPLE.png",
        cantidad: 1
    },
    {
        nombre: "SMIRNOFF RASPBERRY",
        precio: 450,
        id: 19,
        img: "./img/SMIRNOFFRASPBERRY.png",
        cantidad: 1
    },
    {
        nombre: "SKYY",
        precio: 450,
        id: 20,
        img: "./img/SKYY.png",
        cantidad: 1
    },
    {
        nombre: "SKYY RASPBERRY",
        precio: 450,
        id: 21,
        img: "./img/SKYYRASPBERRY.png",
        cantidad: 1
    },
    {
        nombre: "FERNET BRANCA",
        precio: 450,
        id: 22,
        img: "./img/FERNETBRANCA.png",
        cantidad: 1
    },
    {
        nombre: "COCA COLA",
        precio: 450,
        id: 23,
        img: "./img/COCACOLA.png",
        cantidad: 1
    },
    {
        nombre: "COSECHA TARDIA",
        precio: 450,
        id: 24,
        img: "./img/COSECHATARDIA.png",
        cantidad: 1
    },
];

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

mostrarProductos();

const agregarCarrito = (id) => {
    const productoCarrito = carrito.find(producto => producto.id === id)
    if(productoCarrito) {
        productoCarrito.cantidad++;
    }else {
        const productoo = productos.find(producto => producto.id === id)
        carrito.push(productoo)
    }
    total()
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


const containerCarrito = document.getElementById("containerCarrito")
const verCarrito = document.getElementById("verCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito()
} )

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
    total()
}

const eliminarCarrito = (id) => {
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
    carrito = [];
    mostrarCarrito()

    localStorage.clear()
}


const totalCompra = document.getElementById("totalCompra");

const total = () => {
    let numero = 0;
    carrito.forEach(producto => {
        numero += producto.precio * producto.cantidad
    })

    totalCompra.innerHTML = `Total: $${numero}`
}