import styled from 'styled-components';

export const StyledCardContainer = styled.div`
 display: flex;
 flex-direction: column;
 border: 1px solid grey;
 border-radius: 5px;
 padding: 25px;
 cursor: pointer
 text-align: left;
 transition: transform 0.25s ease-out;

background: -moz-linear-gradient(-45deg,  rgb(246,230,180) 0%, rgb(237,144,23) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  rgb(246,230,180) 0%,rgb(237,144,23) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  rgb(246,230,180) 0%,rgb(237,144,23) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

&:hover {
    transform: scale(1.05)
}
`
