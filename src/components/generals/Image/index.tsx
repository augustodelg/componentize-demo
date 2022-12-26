import { PropsWithChildren } from "react"

interface Props {
    src: string,
    center?: boolean,
    size?: 'w-1/6' | 'w-2/6' | 'w-3/6' | 'w-4/6' | 'w-5/6' | 'w-6/6' | 'w-1/12' | 'w-2/12' | 'w-3/12' | 'w-4/12' | 'w-5/12' | 'w-6/12' | 'w-7/12' | 'w-8/12' | 'w-9/12' | 'w-10/12' | 'w-11/12' | 'w-12/12'

}

const Image = (props: Props) => {

    const center = props.center && 'mx-auto my-auto'

    return (
        <img src={props.src} className={`max-w-full h-auto ${center} ${props.size}`} />
    )
}

export default Image