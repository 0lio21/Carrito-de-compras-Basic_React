import React from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from './data'; // Importa los datos de los productos

function Product() {
    const navigate = useNavigate();

    // Estilos en línea para la rejilla de productos
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Ajusta el tamaño de las columnas automáticamente
        gap: '1rem', // Espacio entre los productos
        padding: '1rem' // Padding alrededor de la rejilla
    };

    // Estilos en línea para cada tarjeta de producto
    const cardStyle = {
        cursor: 'pointer',
        padding: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)', // Sombra suave para el elevado
        display: 'flex',
        flexDirection: 'column', // Organiza la imagen y el texto verticalmente
        alignItems: 'center' // Alinea la imagen y el texto al centro
    };

    // Estilos para las imágenes
    const imgStyle = {
        width: '100%', // Ancho completo del contenedor
        height: '200px', // Altura fija para las imágenes
        objectFit: 'cover' // Mantiene el aspecto de la imagen
    };

    return (
        <div style={gridStyle}>
            {data.map(product => (
                <div key={product.id} onClick={() => navigate(`/product-details/${product.id}`)} style={cardStyle}>
                    <img src={product.img} alt={product.nameProduct} style={imgStyle} />
                    <p>{product.nameProduct}</p>
                </div>
            ))}
        </div>
    );
}

export default Product;
