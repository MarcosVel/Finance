import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import * as C from "./styles";

type Props = {
  currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {
  return (
    <C.ContainerStyled>
      <C.MonthArea>
        <C.MonthArrow>
          <ChevronLeft />
        </C.MonthArrow>
        <C.MonthTitle>{ formatCurrentMonth(currentMonth) }</C.MonthTitle>
        <C.MonthArrow>
          <ChevronRight />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>

      </C.ResumeArea>
    </C.ContainerStyled>
  )
}