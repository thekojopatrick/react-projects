import styled from "styled-components";
import tw from "twin.macro";

export const Button = ({ children, type, className }) => {
	return (
		<ButtonBox
			className={
				className ? className : type === "btn-primary" ? `btn-primary` : type === "btn-secondary" && "btn-secondary"
			}
		>
			{children}
		</ButtonBox>
	);
};
const ButtonBox = styled.button`
	letter-spacing: -0.01em;
	color: #363636;
	${tw`flex items-center gap-0.5 font-medium px-7 
	py-5 text-center rounded-lg text-base lg:text-lg`}

	&:hover {
		color: #f86061;

		svg {
			box-shadow: 0px 2px 50px -1px rgba(0, 0, 0, 0.4);
		}
	}

	&.btn-primary {
		color: #fffafa;
		background: #f86061;

		&:hover {
			color: #fffafa;
			background: #e13b3b;
		}
	}

	&.btn-outline {
		border: 2px solid #eedcdc;
		color: #2e2e2e;

		&:hover {
			color: #fffafa;
			background: #2e2e2e;
		}
	}

	svg {
		width: 4.375rem;
		height: 4.375rem;
		fill: #f86061;
		${tw`grid bg-white shadow-2xl 
		place-items-center rounded-full p-6`}
	}

	&.btn-secondary {
		color: #f86061;
		border: 1.5px solid #f86061;

		&:hover {
			color: #fffafa;
			background: #e13b3b;
		}
	}
`;
