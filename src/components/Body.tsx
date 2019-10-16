import React from 'react'

type Props = {
  children: React.FunctionComponent
}

export const Body: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  return <div>{children}</div>
}
