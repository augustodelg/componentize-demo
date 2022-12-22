import { PropsWithChildren } from "react"

interface Props {
    color: string,
}

const Card = (props: PropsWithChildren<Props>) => {
    return (
        <div className={`${props.color} rounded-3xl`}>
            {props.children}
        </div>
    )
}

export default Card