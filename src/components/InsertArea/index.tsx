import { useState } from 'react'
import { Container, InputArea, InputTitle, Input, Select, Button } from "./styles"
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'

type Props = {
    onAdd: (newItem: Item) => void;
}


export function InsertArea({ onAdd }: Props) {
    
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    
    const categoriesKeys: string[] = Object.keys(categories)

    function handleAddEvent() {

        let errors: string[] = [];

        if (isNaN(new Date(date).getTime())) {
            errors.push('Data não está preenchida')
        }
        if (category === '') {
            errors.push('Categoria não está preenchida')
        }
        if (title === '') {
            errors.push('Título não está preenchida')
        }
        if (value === 0) {
            errors.push('Valor inválido')
        }
        
        if(errors[0] !== undefined) {
            return alert(errors.join("\n"))
        }

        let newItem: Item = {
            date: new Date(date),
            category: category,
            title: title,
            value: value
        };

        onAdd(newItem)
    }

    return (
        <Container>
            <InputArea>
                <InputTitle>Data</InputTitle>
                <Input type="date" value={date} onChange={e => setDate(e.target.value)}/>
            </InputArea>

            <InputArea>
                <InputTitle>Categoria</InputTitle>
                <Select value={category} onChange={e => setCategory(e.target.value)}>
                    <option></option>
                    {categoriesKeys.map((key, index) => (
                        <option key={index} value={key}>{categories[key].title}</option>
                    ))}
                </Select>
            </InputArea>

            <InputArea>
                <InputTitle>Título</InputTitle>
                <Input type="text" value={title} onChange={e => setTitle((e.target.value))}/>
            </InputArea>
            
            <InputArea>
                <InputTitle>Valor</InputTitle>
                <Input type="number" value={value} onChange={e => setValue(parseFloat(e.target.value))}/>
            </InputArea>

            <InputArea>
            <Button onClick={handleAddEvent}>Adicionar</Button>
            </InputArea>
        </Container>
    )
}