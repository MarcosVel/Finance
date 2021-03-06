import { Container, Grid, Typography } from "@material-ui/core";
import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from './colors'

export const GridStyled = styled(Grid)`
  background-color: ${COLORS.background};
  min-height: 100vh;
`

export const Header = styled(Grid)`
  background-color: ${COLORS.purpleHeader};
  height: 180px;
  text-align: center;
`

export const HeaderText = styled(Typography)`
  margin: 0;
  padding: 0;
  color: ${COLORS.white};
  font-size: 2.2rem !important;
  padding-top: 40px;
`

export const Body = styled(Container)`
  /* background-color: ${COLORS.purpleGray}; */
  padding-bottom: 64px;
`