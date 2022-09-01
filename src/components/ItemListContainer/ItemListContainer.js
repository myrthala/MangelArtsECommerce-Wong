import React, { useEffect } from "react";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([])

    const {categoryID} = useParams()
    console.log(categoryID)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoryID){
                    setProductos(res)
                }
                else {
                    setProductos(res.filter((prod) => prod.category === categoryID))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                //fin del proceso
            })
    }, [categoryID])

    return ItemListContainer
} 