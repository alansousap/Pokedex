import { styled } from "..";

export const Header = styled('div', {
    width: '100%',
    padding: '0px 80px',
    marginTop: '1.5rem',

    h1: {
        color: '$gray200',
        fontWeight: '$bold',
        fontSize: '$lg',
    }
});

export const SearchContainer = styled('div', {
    width: '100%',
    height: '120px',
    backgroundImage: 'linear-gradient(to left, rgb(49, 49, 49), rgb(67, 67, 67))',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 32px',

    input: {
        width:'100%',
        borderRadius:'8px',
        padding: '0.5rem',
        border:'none',
        outline:'none'
    }
});

export const PokemonContainer = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
});