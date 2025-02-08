import styled from "styled-components";
import {FlexWrapperPropsType} from "../types/styles/flexWrapperStyled.ts";


export const FlexWrapperStyled = styled.div<FlexWrapperPropsType>`
    display: flex;
    width: 100%;
    justify-content: ${({ $justifyC }) => $justifyC};
    flex-direction: ${({ $flexD }) => $flexD};
    align-items: ${({ $alignI }) => $alignI};
`;
