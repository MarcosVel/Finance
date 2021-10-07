import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { COLORS } from '../../colors';

export const ContainerStyled = styled(Box)`
  flex: 1;
  position: relative;
  svg {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -20px;
    left: 43px;
    color: #fff;
    opacity: .1;
  }
`

export const Title = styled(Typography)`
  text-align: center;
  color: ${COLORS.textGray};
  font-size: 18px !important;
  z-index: 999;
`

export const Value = styled(Typography)`
  text-align: center;
  color: ${COLORS.white};
  font-size: 20px !important;
  font-weight: bold !important;
  z-index: 999;
`

