import { ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Anchor, AnchorProps } from '@mantine/core'

type LinkProps = NextLinkProps & {
  children: ReactNode
  anchorProps?: AnchorProps<'a'>
}

export const Link: React.FC<LinkProps> = ({
  children,
  anchorProps,
  ...props
}) => {
  return (
    <NextLink {...props} passHref>
      <Anchor {...anchorProps}>{children}</Anchor>
    </NextLink>
  )
}
