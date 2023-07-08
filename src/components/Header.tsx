// @ts-ignore
import { styled } from "styled-components"
import { Container } from "./Container"


import { IoMoonOutline } from 'react-icons/io5'
import { useEffect, useState } from "react";



interface ModeSwitcherProps {
    onClick?: () => void;
}


const HeaderElement = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled.a.attrs({
    href: '/'
})`
    color: var(--color-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold)

`;

const ModeSwitcher = styled.div<ModeSwitcherProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-text);
    font-size: var(--fs-sm);
    cursor: pointer;
`


export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (): void => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    
    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>Попробуй</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoonOutline />&nbsp;Сменить тему
                    </ModeSwitcher>

                </Wrapper>
            </Container>
        </HeaderElement>
    )
}