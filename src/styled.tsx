import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  small: {
    outer: string,
    inner: string,
    start: string,
    end: string,
  },
  medium: {
    inner: string,
    start: string,
    end: string,
  },
  large: {
    before: string,
    inner: string,
    start: string,
    end: string,
  },
  xlarge: {
    outer: string,
    inner: string,
    start: string,
  },
  electionCenter: {
    desktop: string,
    tablet: string,
  },

  baseFont: string,
  secondaryFont: string,

  textPrimary: string,
  transparent: string,
  transparentOverlay: string,
  semiTransparentOverlay: string,
  black: string,
  white: string,
  oldPaper: string,
  oldPaper2: string,
  snowDrift: string,
  emerald: string,
  lightGray: string,
}

export default styled as CreateStyled<Theme>