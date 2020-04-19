import React, { useReducer } from "react";
import { TextContext } from "./textContext";
import { carouselReducer } from "../carouselReducer";
import { CHANGE_SLIDE, RESET_COUNTER } from "../../types";

export const TextState = ({ children }) => {
	const initialState = {
		currentItem: 0,
	};

	const [state = initialState, dispatch] = useReducer(carouselReducer);

	const change = () => {
		dispatch({
			type: CHANGE_SLIDE,
			payload: { currentItem: state.currentItem + 1 }, //*переключатель стейта
		});
	};

	const reset = () => {
		dispatch({
			type: RESET_COUNTER,
			payload: { currentItem: 0 },
		});
	};

	return (
		<TextContext.Provider value={{ reset, change, slider: state }}>
			{children}
		</TextContext.Provider>
	);
};
