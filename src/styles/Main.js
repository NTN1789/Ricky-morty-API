

import styled from "styled-components";

  
export const Main = styled.main`
	width: 100%;
	padding: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:#293905 ;


	.container-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10rem;
	}
`;

export const Card = styled.li`
	width:45vh;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align:center;
	background-color: #303032;
	border-radius:62px;
	color: #ffffff;
	cursor: pointer;
	&:hover{
		color:#293905;
	}

        box-shadow: 0px 0px 25px -5px ;
        transition: 0.4s;
        animation: ease-in;
		gap:4px;
		&:hover{
			transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px ;
		background-color:green;
		}
	
	

	

	

	

	`