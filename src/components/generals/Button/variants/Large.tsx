import { PropsWithChildren } from "react"
import Button, { IButton } from ".."
import THEME from "../../../../config/theme"

interface Props extends Pick<IButton, 'className' | 'color' | 'onClick'> {
}

const Large = (props: PropsWithChildren<Props>) => {
    return (
        <Button
            size={THEME.components.button.size.large}
            color={props.color}
            className={props.className}
            rounded={THEME.components.button.rounded.large}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default Large