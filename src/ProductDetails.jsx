import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data'; // Importa los datos de los productos

function ProductDetails() {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id)); // Busca el producto por ID

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    // Estilos en línea para la página de detalles
    const detailsStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centra los elementos verticalmente
        marginTop: '20px'
    };

    // Estilos en línea para la imagen
    const imgStyle = {
        width: '80%', // Aprovecha mejor el espacio visual
        height: 'auto',
        borderRadius: '10px', // Bordes redondeados para la imagen
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Sombra suave para un efecto de elevación
    };

    // Estilos para los textos
    const textStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: '10px',
        textAlign: 'center' // Centra el texto horizontalmente
    };

    return (
        <div style={detailsStyle}>
            <h1>{product.nameProduct}</h1>
            <img src={product.img} alt={product.nameProduct} style={imgStyle} />
            <p style={textStyle}>Precio: ${product.price}</p>
            <p style={textStyle}>Cantidad: {product.quantity}</p>
        </div>
    );
}

export default ProductDetails;
