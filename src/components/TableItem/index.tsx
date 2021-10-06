import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.StyledTableRow>
      <C.StyledTableCell component="th" scope="row">
        { formatDate(item.date) }
      </C.StyledTableCell>
      <C.StyledTableCell>{ item.category }</C.StyledTableCell>
      <C.StyledTableCell>{ item.title }</C.StyledTableCell>
      <C.StyledTableCell align="right">R$ { item.value }</C.StyledTableCell>
    </C.StyledTableRow>
  )
}