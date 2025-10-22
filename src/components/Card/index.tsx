import type React from "react";

import { CardWrapper, CardIcon, CardTitle, CardValue } from './Card.styles';

interface CardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
 
    return (
        <CardWrapper>
            <CardIcon>{icon}</CardIcon>
            <CardTitle>{title}</CardTitle>
            <CardValue>{value}</CardValue>
        </CardWrapper>
    )
}

export default Card;
