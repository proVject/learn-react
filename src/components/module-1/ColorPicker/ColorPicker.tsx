import {type JSX, useState} from "react";

type Colors = 'red' | 'green' | 'blue'

interface colorPickerProps {
    initColor?: Colors
}

const ColorPicker = ({initColor = 'red'}: colorPickerProps): JSX.Element => {
    const [currentColor, setCurrentColor] = useState<Colors>(initColor)

    return (
        <div>
            <p style={{ color: currentColor }}>Обраний колір: {currentColor}</p>.
            <button onClick={() => setCurrentColor('red')}>Red</button>
            <button onClick={() => setCurrentColor('green')}>Green</button>
            <button onClick={() => setCurrentColor('blue')}>Blue</button>
        </div>
    );
};

export default ColorPicker;