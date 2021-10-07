import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styles";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    let [ year, month ] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
    let [ year, month ] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return (
    <C.ContainerStyled>
      <C.MonthArea>
        <C.MonthArrow onClick={ handlePrevMonth }>
          <ChevronLeft />
        </C.MonthArrow>
        <C.MonthTitle>{ formatCurrentMonth(currentMonth) }</C.MonthTitle>
        <C.MonthArrow onClick={ handleNextMonth }>
          <ChevronRight />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>
        <ResumeItem title='Receitas' value={ income } />
        <ResumeItem title='Despesas' value={ expense } />
        <ResumeItem title='Balanço' value={ income - expense } />
      </C.ResumeArea>
    </C.ContainerStyled>
  )
}