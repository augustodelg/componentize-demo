import { PropsWithChildren } from "react"
import Button, { IButton } from ".."
import THEME from "../../../../config/theme"

interface Props extends Pick<IButton, 'className' | 'color' | 'onClick'> {
}

const Round = (props: PropsWithChildren<Props>) => {
    return (
        <Button
            color={props.color}
            className={`${props.className}
            ${THEME.components.button.size.auto} 
            ${THEME.components.button.rounded.full}`}
            onClick={props.onClick}
        >
                {props.children}
        </Button>
    )
}

export default Round