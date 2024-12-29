import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fixed?: boolean
}

export default function PageLayout({ fixed, ...props }: PageLayoutProps) {
  return (
    <PageLayoutStyled {...props} $fixed={!!fixed}>
      {props.children}
    </PageLayoutStyled>
  )
}

const PageLayoutStyled = styled.div<{ $fixed?: boolean }>`
  ${({ $fixed }) =>
    $fixed
      ? css`
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 1000;
        `
      : css`
          height: 100%;
          margin: 0 auto;
        `};

  // Celulares
  @media (max-width: 768px) {
    max-width: auto;
  }

  // Tablets
  @media (min-width: 768px) {
    max-width: 46.875rem;
  }

  // Desktop HD
  @media (max-width: 992px) {
    max-width: 60.625rem;
  }

  // Desktop FULL HD
  @media (max-width: 1200px) {
    max-width: 73.125rem;
  }
`
