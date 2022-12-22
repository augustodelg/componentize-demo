import { PropsWithChildren } from "react"

interface Props {
    color: string,
    center: boolean
}

const Chip = (props: PropsWithChildren<Props>) => {
    const center = props.center && 'mx-auto my-auto'
    return (
        <div className={`${props.color} ${center} rounded-full `}>
            {props.children}
        </div>
    )
}

export default Chip