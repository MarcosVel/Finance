import { Container, IconButton, Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { COLORS } from '../../colors';

export const ContainerStyled = styled(Container)`
  display: flex !important;
  align-items: center;
  background-color: ${COLORS.purpleGray};
  border-radius: 10px;
  padding: 24px;
  margin-top: -50px;
`

export const MonthArea = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
`

export const MonthArrow = styled(IconButton)`
  svg {
    color: ${COLORS.textGray}
  }
  &:hover {
    svg {
      color: ${COLORS.white}
    }
  }
`

export const MonthTitle = styled(Typography)`
  flex: 0.8;
  text-align: center;
  color: ${COLORS.textGray};
  font-size: 18px !important;
`

export const ResumeArea = styled(Box)`
  flex: 2;
  display: flex;
`