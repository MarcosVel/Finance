import { TableContainer, TableCell, tableCellClasses, TableRow, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { COLORS } from '../../colors';

export const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.body} {
    font-size: 14px;
    color: ${COLORS.white};
  };
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color:  ${COLORS.purpleHeader};
  }
  // hide last border
  &:last-child td, &:last-child th {
    border: 0;
  }
`;

export const Category = styled(Typography) <{ backColor: string }>`
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  color: ${COLORS.white};
  background-color: ${props => props.backColor};
`

export const Value = styled(Typography) <{ color: string }>`
  color: ${props => props.color};
`