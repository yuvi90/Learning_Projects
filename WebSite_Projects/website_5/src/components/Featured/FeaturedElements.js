import styled from "styled-components"
import FeaturedPic from "../../images/featured3.jpg";

export const FeaturedContainer = styled.div`
    background-image: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${FeaturedPic});
    height: 100vh;
    width: 100%;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
` 
export const FeaturedButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background-color: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
        background-color: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`