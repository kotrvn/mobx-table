import { ReactNode } from "react";
import styled from "styled-components";



export type CardProps = {
    children: ReactNode;
}

export const CardElement = styled.div`
    width: 100%;
    height: 100%;
    max-width: 400px;
    padding: 2rem;
    margin: 0 1rem;
    border: 1px solid var(--colors-text);
    overflow-y: scroll;

`;

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <CardElement>
            {children}
        </CardElement>
    )
}