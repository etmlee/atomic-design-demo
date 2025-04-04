import {
  Dialog,
  DialogContent,
} from "@/components/atoms/Dialog"
import { PropsWithChildren } from "react"

interface DialogDemoProps {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    trigger: React.ReactNode;
}

export const DialogDemo: React.FC<PropsWithChildren<DialogDemoProps>> = ({header, footer, trigger, children}) => {
  return (
    <Dialog>
        {trigger}
      <DialogContent className="sm:max-w-[425px]">
        {header}
        {children}
        {footer}
      </DialogContent>
    </Dialog>
  )
}
