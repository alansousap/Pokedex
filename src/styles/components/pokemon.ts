import { styled } from "..";

export const Container = styled('div', {
    display:'flex',
    flexDirection: 'column',
    margin:'24px 16px',
    borderRadius:'8px',
    width:'100%',
    maxWidth:'240px',
    transition: 'all 0.25s ease-in-out',
    
    '&:hover': {
        boxShadow: '10px 10px 17px -4px rgba(0,0,0,0.75)',
    }
});

export const ImageContainer = styled('div', {
    backgroundColor:'$gray100',
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:'8px',

    p: {
        color:'$black',
    }
});

export const InfoContainer = styled('div', {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    height:'148px',
    padding:'12px 16px',

    h1: {
        color:'$black',
        fontWeight:'$medium',
        fontSize:'$md',
        marginTop:'2rem',
        marginBottom:'0.5rem',
    },

    div: {
        display:'flex',
        backgroundColor:'$gray100',

        p: {
            color:'$black',
            fontWeight:'$bold',
            margin:'0px 8px',
        }
    }
});