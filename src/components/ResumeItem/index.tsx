import { AccountBalanceWallet, TrendingDown, TrendingUp } from '@material-ui/icons';
import * as C from './styles';

type Props = {
  title: string;
  value: number;
}

export const ResumeItem = ({ title, value }: Props) => {

  let svg = () => {
    if (title === 'Receitas') {
      return <TrendingUp />
    } else if (title === 'Despesas') {
      return <TrendingDown />
    } else {
      return <AccountBalanceWallet />
    }
  }

  return (
    <C.ContainerStyled>
      { svg() }
      <C.Title>{ title }</C.Title>
      <C.Value>R$ { value }</C.Value>
    </C.ContainerStyled>
  )
}