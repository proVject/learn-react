import React, {type JSX, useState} from "react";

const SimpleForm = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('')

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        alert(`Entered text ${inputValue}`)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
};

export default SimpleForm;