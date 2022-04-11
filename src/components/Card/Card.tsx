import React from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { StyledCard } from './Card.styles';

type Props = {
    title?: string;
    className?: string;
    children?: React.ReactNode;
};

export function Card({ title, className, children }: Props): JSX.Element {
    const renderHeader = (): JSX.Element => {
        console.log('render header');
        return (
            <div className="card-header-wrapper">
                <div className="card-header-icon"><GrContactInfo /></div>
                <div className="card-header-title">{title}</div>
            </div>
        );
    };
    return (
        <StyledCard className={`${className || ''} border`}>
            {title && renderHeader()}
            {children}
        </StyledCard>
    );
}
