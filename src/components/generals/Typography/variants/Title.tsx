import { Children, PropsWithChildren } from "react"
import Typography, { ITypography } from ".."
import THEME from "../../../../config/theme"

interface Props extends Pick<ITypography, 'className' | 'color'> {
}

const Title = (props: PropsWithChildren<Props>) => {

    
    return (
        <Typography
            size={THEME.fonts.size.title}
            color={props.color}
            weight='font-extrabold'
            className={props.className}>
            {props.children}
        </Typography>
    )
}

export default Title