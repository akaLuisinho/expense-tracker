import { Container, Title, Info} from './styles'

type Props = {
    title: string,
    value: number,
    color?: string,
}

export function ResumeItem({ title, value, color }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <Info color={color}>R${value}</Info>
        </Container>
    )
}