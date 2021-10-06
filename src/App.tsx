import { useEffect, useState } from "react"
import { Container, Header, HeaderText, Body } from "./App.styles"
import { items } from "./data/items"
import { Item } from './types/Item'
import { categories } from "./data/categories"
import { Category } from './types/Category'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'




export default function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=> {
      setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        
        {/* { Área de informações} */}

        {/* { Área de inserção} */}

        <TableArea list={filteredList}/>

      </Body>
    </Container>
  )
}