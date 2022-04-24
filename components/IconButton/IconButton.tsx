import { ComponentPropsWithoutRef, ReactElement, SVGProps } from 'react'
import styled, { DefaultTheme } from 'styled-components'

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: ReactElement<SVGProps<SVGSVGElement>>
  label?: string
  color?: keyof DefaultTheme['colors']
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  color,
  ...props
}) => {
  return (
    <Container color={color || 'moderateBlue'} {...props}>
      {icon}
      {label && <Label>{label}</Label>}
    </Container>
  )
}

type ContainerProps = {
  readonly color: keyof DefaultTheme['colors']
}

const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors[props.color]};
  font-weight: 500;
`

const Label = styled.span`
  margin-left: 8px;
`
