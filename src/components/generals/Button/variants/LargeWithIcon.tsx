import { PropsWithChildren, ReactElement } from "react"
import Button, { IButton } from ".."

interface Props extends Pick<IButton, 'className' | 'color' | 'onClick'> {
    icon: ReactElement;
}

const LargeWithIcon = (props : PropsWithChildren<Props>) => {
  return (
    <Button.Large>
        {props.icon}
        {props.children}
    </Button.Large>
  )
}
export default LargeWithIcon