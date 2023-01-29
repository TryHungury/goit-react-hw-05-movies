import { Box } from "components/box/Box"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import styled from "styled-components"

const Form = styled.form`
width: 100%;
display: flex; 
justify-content: center; 
align-items: center;

margin-top: ${p=>p.theme.space[3]}px;
margin-bottom: ${p=>p.theme.space[3]}px;

@media screen and (min-width: 320px) {
    margin-top: ${p=>p.theme.space[4]}px;
    margin-bottom: ${p=>p.theme.space[4]}px;
}
@media screen and (min-width: 720px) {
    margin-top: ${p=>p.theme.space[5]}px;
    margin-bottom: ${p=>p.theme.space[5]}px;
}
@media screen and (min-width: 1200px) {
    margin-top: ${p=>p.theme.space[6]}px;
    margin-bottom: ${p=>p.theme.space[6]}px;
}
`

const Input = styled.input`
display: block;
width: 25%;
height: 15px;

text-align: center;
outline: none;

border: ${p=>p.theme.borders.normal};
border-top-left-radius: ${p=>p.theme.radii.normal};
border-bottom-left-radius: ${p=>p.theme.radii.normal};

box-shadow: 3px 1px 3px 5px ${p=>p.theme.colors.text};

font-family: ${p=>p.theme.fonts.heading};
font-size: ${p=>p.theme.fontSizes[3]}px;

padding: ${p=>p.theme.space[4]}px;

@media screen and (min-width: 320px) {
    height: 25px;
    font-size: ${p=>p.theme.fontSizes[4]}px;
}
@media screen and (min-width: 720px) {
    height: 45px;
    font-size: ${p=>p.theme.fontSizes[5]}px;
}
@media screen and (min-width: 1200px) {
    height: 60px;
    font-size: ${p=>p.theme.fontSizes[6]}px;
}
`

const Button = styled.button`
height: 50px;
display: block;
text-align: center;  

border: ${p=>p.theme.borders.normal};
border-bottom-right-radius: ${p=>p.theme.radii.normal};
border-top-right-radius: ${p=>p.theme.radii.normal};

box-shadow: -3px 1px 3px 5px ${p=>p.theme.colors.text};

font-size: ${p=>p.theme.fontSizes[3]}px;

padding: 6px;

margin-left: ${p=>p.theme.space[4]}px;

font-family: 'Georgia, serif';

background-color: #aaa;
color: #fff;

transition: 
background-color 250ms linear,
color 250ms linear,
border-color 250ms linear;

&:hover, &:focus {
    color: #212121;
    border-color: #fff;
    background-color: #ccc;
}

@media screen and (min-width: 320px) {
    height: 60px;
    font-size: ${p=>p.theme.fontSizes[4]}px;
}
@media screen and (min-width: 720px) {
    height: 80px;
    font-size: ${p=>p.theme.fontSizes[5]}px;
}
@media screen and (min-width: 1200px) {
    height: 95px;
    font-size: ${p=>p.theme.fontSizes[6]}px;
}
`

export const Search = ({ makeFetch }) => {
    const [searchValue, setSearchValue] = useState("")
    const [, setSearchParams] = useSearchParams('')

    const handleOnChange = (event) => {
        let value = event.target.value;
        // console.log(value)

        setSearchValue(value.trim());
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!searchValue) {
            return;
        }

        makeFetch(searchValue);
        setSearchParams({query: searchValue})

        setSearchValue("");
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Box display="flex" justifyContent="center" alignItems="center" flexGrow="1">
                    <Input onChange={handleOnChange} name="textSearch" value={searchValue} type="text" placeholder="Input..."/>
                    <Button type="submit">Search</Button>
                </Box>
            </Form>
    )
}