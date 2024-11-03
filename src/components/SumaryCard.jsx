import styled from 'styled-components';
import '../styles/styles.css';  
import '../styles/styles.scss';
import illustration from "../assets/imagenes/illustration.svg"; 


// Styled-component para el botón de completar pedido
const CompleteOrderButton = styled.button`
    background-color: #3829e0;
    color: white;
    border: none;
    padding: 15px;
    width: 80%;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px; /* Espacio entre el botón de completar y el de cancelar */

    &:hover {
        background-color: #574bff;
    }
`;

// Styled-component para el botón de cancelar pedido
const CancelOrderButton = styled.button`
    background: none; /* Sin fondo */
    color: #ff4d4d; /* Color del texto */
    border: none; /* Sin borde */
    padding: 15px; /* Agrega padding para que se vea como un botón */
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px; /* Espacio adicional debajo del botón de cancelar */

    &:hover {
        background-color: #ffcccc; /* Color de fondo al hacer hover */
        color: #ff1a1a; /* Cambia el color del texto al hacer hover */
        border-radius: 5px; /* Bordes redondeados al hacer hover */
    }
`;

const OrderSummary = () => {
    return (
        <div className="order-summary-container">
            <img src={illustration} alt="Illustration" className="illustration-image" />
            <h2>Order Summary</h2>
            <ul className="order-summary-list">
                <li className="order-item">
                    <span className="item-name">Annual Plan</span>
                    <span className="item-price">$59.99/year</span>
                    <a href="#">Change</a>
                </li>
            </ul>
            <CompleteOrderButton>Complete Order</CompleteOrderButton>
            <CancelOrderButton>Cancel Order</CancelOrderButton>
    </div>
    );
};

export default OrderSummary;