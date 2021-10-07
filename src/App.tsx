import { useEffect, useState } from "react"
import { Container, Header, HeaderText, Body } from "./App.styles"
import { items } from "./data/items"
import { Item } from './types/Item'
import { categories } from "./data/categories"
import { Category } from './types/Category'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from "./components/InfoArea"
import { InsertArea } from "./components/InsertArea"


export default function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=> {
      setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(()=> {
    let monthIncome = 0
    let monthExpense = 0

    for(let i in filteredList) {
        if(categories[filteredList[i].category].expense) {
          monthExpense += filteredList[i].value
        } else {
          monthIncome += filteredList[i].value
        }
    }

    setIncome(monthIncome)
    setExpense(monthExpense)
  }, [filteredList])

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth)
  }

  function handleAddItem(newItem: Item) {
    let newList = [...list]
    newList.push(newItem)
    console.log(newList);
    setList(newList)
  }
  
  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>

        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

        <InsertArea 
          onAdd={handleAddItem}
        />

        <TableArea list={filteredList}/>

      </Body>
    </Container>
  )
}