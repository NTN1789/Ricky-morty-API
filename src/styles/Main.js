

import styled from "styled-components";

  
export const Main = styled.main`
	width: 100%;
	padding: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.container-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 4rem;
	}
`;

export const Card = styled.li`
	width:50vh;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #303032;
	border-radius:70px;
	color: #ffffff;
	cursor: pointer;
    overflow: hidden;
        box-shadow: 0px 0px 15px -5px ;
        transition: 0.3s;
        animation: ease-in;
		gap:20px;
		&:hover{
			transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px ;
		}
	
		h1{
			text-align:center
		}

	

	

	

	`