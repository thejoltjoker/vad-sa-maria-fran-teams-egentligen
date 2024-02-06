import React from 'react'

interface IncomingMessageProps  {children:React.ReactNode, time: string, name?:string}

const IncomingMessage = ({children, time, name}: IncomingMessageProps) => {
  return (
    <div className="w-fit">
      <p className="mb-1 text-sm text-neutral-500">
        <span className="font-bold">{name ?? "Maria"}</span> {time}
      </p>
      <div className="rounded-md bg-neutral-100 p-4">
        <p>{children}</p>
      </div>
    </div>
  )
}

export default IncomingMessage