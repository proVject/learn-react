import Counter from "./Counter.tsx";
import Header from "./Header.tsx";
import Message from "./Message.tsx";

const Module1 = () => {
    return (
        <>
            <Header title="MY SITE"/>
            <Counter/>
            <Message text="Це важливо!" isImportant={true} />
        </>
    );
};

export default Module1;