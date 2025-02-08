import styled from "styled-components";
import {theme} from "../../../../styles/theme.ts";

export const StyledTechStackItems = styled.ul`
    display: flex;
    margin-top: 20vh;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 5.5rem;
    padding: 0;
`
export const StyledTechStackItem = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    width: 120px;
    height: 120px;
    z-index: 1;

    &::before {
        display: inline-block;
        content: '';
        position: absolute;
        top: 45%;
        left: 25%;
        width: 100%;
        height: 80%;
        background: rgba(166, 185, 200, 0.18);
        transform: rotate(10deg);
        border-radius: 20px;
        filter: blur(0.4rem);
        z-index: -1;
        @media ${theme.media.tablet} {
            display: none;
        }
    }
`
