import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from './styles'
import { formatCurrentMonth} from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'


type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}
 
export function InfoArea({ currentMonth, onMonthChange, income, expense }: Props) { 

    function handlePreviousMonth() {
        const [year, month] = currentMonth.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)

        currentDate.setMonth(currentDate.getMonth() - 1)
        
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    function handleNextMonth() {
        const [year, month] = currentMonth.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
 
        currentDate.setMonth(currentDate.getMonth() + 1)

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={handlePreviousMonth}>⬅️</MonthArrow>
                    <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>

            </MonthArea>
            <ResumeArea>
                <ResumeItem title='Receita' value={income}/>
                <ResumeItem title='Despesa' value={expense}/>
                <ResumeItem 
                title='Balanço' 
                value={income - expense} 
                color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </ResumeArea>
        </Container>
    )
}