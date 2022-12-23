import { PropsWithChildren } from "react"
import Typography, { ITypography } from ".."
import THEME from "../../../../config/theme"

interface Props extends Pick<ITypography, 'className' | 'color'> {
}

const Description = (props: PropsWithChildren<Props>) => {
    return (
        <Typography
            size={THEME.fonts.size.small}
            color={props.color}
            weight='font-regular'
            className={props.className}>
            {props.children}
        </Typography>
    )
}

export default Description