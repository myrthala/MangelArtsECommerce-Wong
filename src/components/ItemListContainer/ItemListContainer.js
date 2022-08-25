const stock = [
    {
        id: 1, 
        nombre: 'Arte 1',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 2, 
        nombre: 'Arte 2',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 3, 
        nombre: 'Arte 3',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 4, 
        nombre: 'Arte 4',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 5, 
        nombre: 'Arte 5',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 6, 
        nombre: 'Arte 6',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 7, 
        nombre: 'Arte 7',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    },
    {
        id: 8, 
        nombre: 'Arte 8',
        precio: 200,
        img: '',
        stock: 20,
        desc: 'el mejor arte'
    }
]

const ItemListContainer = () => {

    const[productos, setProductos] = useState[];

    const pedirDatos = () => {
        return new Promise( (resolve, reject) => {
            //cuerpo de la promesa
            setTimeout(() => {
                resolve(stock)
            }, 3000) // 3000ms = 3s

        })
    }

    pedirDatos()
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Fin del proceso.")
        })

        return(
            <div>
                <h2>Productos</h2>
                <hr/>
            </div>
        )

}

export default ItemListContainer