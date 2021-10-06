import { TableContainer, TableCell, tableCellClasses, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import { COLORS } from '../../colors';

export const TableContainerStyled = styled(TableContainer)`
  width: auto !important;
  border-radius: 10px;
  margin-top: 32px;
  padding: 16px 32px;
  background-color: ${COLORS.purpleGray};
`

export const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    color: ${COLORS.white};
    font-size: 16px;
    font-weight: bold;
  };

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
