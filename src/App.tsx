import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';

const App = () => {
  const [ list, setList ] = useState(items);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [ list, currentMonth ]);

  return (
    <C.GridStyled>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Área de informações */ }


        {/* Área de inserção */ }


        {/* Área de itens */ }


      </C.Body>
    </C.GridStyled>
  );
}

export default App;
