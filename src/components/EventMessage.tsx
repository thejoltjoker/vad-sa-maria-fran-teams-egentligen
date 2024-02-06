import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const EventMessage = ({children}: Props) => {
  return (
    <div className="flex items-center gap-4 text-neutral-500">
            <div className="size-3 rounded-full border border-white bg-neutral-500 outline outline-1"></div>
            <p>
            {children}
            </p>
          </div>
  )
}

export default EventMessage