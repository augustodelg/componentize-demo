import { PropsWithChildren } from "react"
import Typography, { ITypography } from ".."
import THEME from "../../../../config/theme"

interface Props extends Pick<ITypography, 'className' | 'color'> {
}

const Subtitle2 = (props: PropsWithChildren<Props>) => {
    return (
        <Typography
            size={THEME.fonts.size.subtitle2}
            color={props.color}
            weight='font-bold'
            className={props.className}>
            {props.children}
        </Typography>
    )
}

export default Subtitle2