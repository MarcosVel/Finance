import { TableContainer, TableCell, tableCellClasses, TableRow } from '@material-ui/core';
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
