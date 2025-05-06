import Counter from "./Counter.tsx";
import Header from "./Header.tsx";
import Message from "./message/Message.tsx";
import OrderStatus from "./OrderStatus.tsx";
import SimpleForm from "./SimpleForm.tsx";
import {ProductList} from "./ProductList/ProductList.tsx";
import ColorPicker from "./ColorPicker/ColorPicker.tsx";
import TodoList from "./Todo/TodoList.tsx";

const Module1 = () => {
    return (
        <>
            <Header title="MY SITE"/>
            <Counter/>
            <Message text="Це важливо!" isImportant={true} />
            <OrderStatus status="success" />
            <OrderStatus status="cancelled" />
            <SimpleForm />
            <ProductList />
            <ColorPicker />
            <TodoList />
        </>
    );
};

export default Module1;