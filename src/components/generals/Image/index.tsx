import { PropsWithChildren } from "react"

interface Props {
    src: string,
    center: boolean,
    size?: 'w-1/6' | 'w-2/6' | 'w-3/6' | 'w-4/6' | 'w-5/6' | 'w-6/6',

}

const Image = (props: Props) => {

    const center = props.center && 'mx-auto my-auto'

    return (
        <img src={props.src} className={`max-w-full h-auto ${center} ${props.size}`} />
    )
}

export default Image