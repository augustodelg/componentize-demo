import { PropsWithChildren } from "react"

interface Props {
    size: string,
    color: string,
    weight: string,
    className?: string
}

const Typography = (props: PropsWithChildren<Props>) => {
    return (
        <p className={`${props.size} ${props.color} ${props.weight} ${props.className}`}>
            {props.children}
        </p>
    )
}

export default Typography