import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  return (
    <C.TableContainerStyled>
      <Table sx={ { minWidth: 700 } }>
        <TableHead>
          <TableRow>
            <C.StyledTableCell width={ 100 }>Data</C.StyledTableCell>
            <C.StyledTableCell width={ 130 } >Categoria</C.StyledTableCell>
            <C.StyledTableCell>Título</C.StyledTableCell>
            <C.StyledTableCell width={ 150 } align="right">Valor</C.StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { list.map((item, index) => (
            <C.StyledTableRow key={ index }>
              <C.StyledTableCell component="th" scope="row">
                teste
              </C.StyledTableCell>
              <C.StyledTableCell>teste 2</C.StyledTableCell>
              <C.StyledTableCell>{ item.title }</C.StyledTableCell>
              <C.StyledTableCell align="right">teste 4</C.StyledTableCell>
            </C.StyledTableRow>
          )) }
        </TableBody>
      </Table>
    </C.TableContainerStyled>
  )
}