import { PropsWithChildren } from "react";
import THEME from "../../../config/theme";
import Large from "./variants/Large";
import LargeWithIcon from "./variants/LargeWithIcon";
import Round from "./variants/Round";



export interface IButton {
    color?: string;
    className?: string;
    onClick?: () => void;
}

const Button = (props: PropsWithChildren<IButton>) => {

    return (
        <button type="button"
            className={`
                ${props.color}
                ${props.className}
                `}
            onClick={props.onClick}>
            {props.children}
        </button>);
};

Button.Large = Large
Button.Round = Round
Button.LargeWithIcon = LargeWithIcon

export default Button;