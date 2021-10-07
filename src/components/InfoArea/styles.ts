import { Container, IconButton, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import styled from 'styled-components';
import { COLORS } from '../../colors';

export const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  background-color: ${COLORS.purpleGray};
  border-radius: 10px;
  padding: 32px;
  margin-top: -30px;
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
  /* flex: 1; */
  text-align: center;
  color: ${COLORS.textGray};
  font-size: 18px !important;
`

export const ResumeArea = styled(Box)`
  flex: 2;
  display: flex;
`