import { PropsWithChildren, useEffect } from "react"
import THEME from "../../../config/theme"
import Description from "./variants/Description"
import Normal from "./variants/Normal"
import Subtitle from "./variants/Subtitle"
import Subtitle2 from "./variants/Subtitle2"
import Title from "./variants/Title"

export interface ITypography {
    size: string,
    color?: string,
    weight?: string,
    className?: string
}
// A more elavorate logic should be implemented in order to respect the html semantics.
const Typography = (props: PropsWithChildren<ITypography>) => {

    const weight = props.weight ? props.weight : 'font-bold'
    const color = props.color ? props.color : THEME.colors.grayDeep.normal

    return (
        <p className={`${props.size} ${color} ${weight} ${props.className}`}>
            {props.children}
        </p>
    )
}

Typography.Title = Title
Typography.Subtitle = Subtitle
Typography.Subtitle2 = Subtitle2
Typography.Description = Description
Typography.Normal = Normal


export default Typography
