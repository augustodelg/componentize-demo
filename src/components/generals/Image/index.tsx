import { PropsWithChildren } from "react"

interface Props {
    src: string,
    center?: boolean,
    size?: 'w-1/6' | 'w-2/6' | 'w-3/6' | 'w-4/6' | 'w-5/6' | 'w-6/6' | '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | '12/12'

}

const Image = (props: Props) => {

    const center = props.center && 'mx-auto my-auto'

    return (
        <img src={props.src} className={`max-w-full h-auto ${center} ${props.size}`} />
    )
}

export default Image