/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    .Collapsible__trigger {
        justify-content: space-between;
         align-items: center;
        font-style: normal;
        font-weight: bold;
        text-align: left;
        font-size: 1rem;
        padding: 15px 12px;
        display: flex;  
        flex-direction: row;
        width: 100%;
        background-color: #333;
        border-radius: 3px;

    }
    .Collapsible__trigger p {
        padding: 0;
        margin: 0;
    }
    .Collapsible__trigger svg{
        font-size: 50px;
        display: inline-block;
        margin-left: auto;
        top: 50%;
    }

    }
    .Collapsible__trigger:hover {
        cursor: pointer;
        background-color: #1E1D1D;
    }  
    .Collapsible {
        width: 100%;
        text-align: center;
        border-radius: 3px;
        margin: 3px;
        background-color: #A08F8F; 
    }
    .Collapsible__contentInner {
        width: 100%;
        display: flex;
        margin-top: 3px;
        text-align: left; 
    }
    .Collapsible__contentInner a { 
        display: flex;
        margin-left: 10px;
        text-align: left; 
        padding-top:0;
    }
    .Collapsible:focus {
        height: 50px;
    }
`;
