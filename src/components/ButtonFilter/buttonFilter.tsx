import { BtnIcon, BtnText, ButtonFilterStyled } from './buttonFilter.styled'
import React from 'react'

interface PropsButtonFilter {
  active?: boolean
  children?: React.ReactNode
  text?: string
}
export function ButtonFilter({
  active = false,
  text = '',
  children,
}: PropsButtonFilter) {
  return (
    <li>
      <ButtonFilterStyled active={active}>
        <BtnIcon>{children}</BtnIcon>

        <BtnText>{text}</BtnText>
      </ButtonFilterStyled>
    </li>
  )
}
