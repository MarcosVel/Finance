import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.StyledTableRow>
      <C.StyledTableCell>
        { formatDate(item.date) }
      </C.StyledTableCell>
      <C.StyledTableCell>
        <C.Category variant='inherit' backColor={ categories[ item.category ].color }>
          { categories[ item.category ].title }
        </C.Category>
      </C.StyledTableCell>
      <C.StyledTableCell>{ item.title }</C.StyledTableCell>
      <C.StyledTableCell align="right">
        <C.Value variant='inherit' color={ categories[ item.category ].expense ? '#DE4A43' : '#77DD77' }>
          R$ { item.value }
        </C.Value>
      </C.StyledTableCell>
    </C.StyledTableRow>
  )
}