import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { InfoArea } from './components/InfoArea';
import { TableArea } from './components/TableArea';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';

const App = () => {
  const [ list, setList ] = useState(items);
  const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
  const [ filteredList, setFilteredList ] = useState<Item[]>([]);
  const [ income, setIncome ] = useState(0);
  const [ expense, setExpense ] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [ list, currentMonth ]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.GridStyled>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Área de informações */ }
        <InfoArea
          currentMonth={ currentMonth }
          onMonthChange={ handleMonthChange }
          income={ income }
          expense={ expense }
        />

        {/* Área de inserção */ }


        {/* Área de itens */ }
        <TableArea list={ filteredList } />

      </C.Body>
    </C.GridStyled>
  );
}

export default App;
