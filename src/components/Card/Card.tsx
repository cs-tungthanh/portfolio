import { StyledCard } from './Card.styles';

type Props = {
  title: string;
};

export function CardHeader(): JSX.Element {
    return <div>Header</div>;
}

export function Card({ title }: Props): JSX.Element {
    return (
        <StyledCard>
            <CardHeader />
            {title}
        </StyledCard>
    );
}
