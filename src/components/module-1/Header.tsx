import {type JSX} from "react";

interface HeaderProps {
    title: string;
    showButton?: boolean;
}

const Header = ({title, showButton = false}: HeaderProps): JSX.Element => {

    return (
        <header>
            <h1>{title}</h1>
            {showButton && <button>Login</button>}
        </header>
    );
};

export default Header;