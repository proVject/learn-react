import {type JSX} from "react";

interface OrderStatusProps {
    status: "pending" | "success" | "failed" | 'cancelled';
}

const OrderStatus = ({ status }:OrderStatusProps):JSX.Element => {
    return (
        <div>
            {status === "pending" && <p>⏳ Очікуємо оплату...</p>}
            {status === "success" && <p>✅ Оплачено!</p>}
            {status === "failed" && <p>❌ Помилка оплати.</p>}
            {status === "cancelled" && <p>🚫 Відмінено</p>}
        </div>
    );
};

export default OrderStatus;