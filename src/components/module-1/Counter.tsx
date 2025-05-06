import {useState, type JSX} from "react";

interface CounterProps {
    initialValue?: number;
}

const Counter = ({initialValue}: CounterProps): JSX.Element => {
    const [counter, setCounter] = useState<number>(initialValue || 0)

    const onIncrease: () => void = () => {
        setCounter(counter + 1)
    }
    const onDecrease: () => void = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Counter;