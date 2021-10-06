import { Table, TableHeadColumn } from "./styles";
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}

export function TableArea({ list }: Props) {
    return(
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={150}>Data</TableHeadColumn>
                    <TableHeadColumn width={170}>Categoria</TableHeadColumn>
                    <TableHeadColumn>Título</TableHeadColumn>
                    <TableHeadColumn width={150}>Valor</TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </Table>
    )
}