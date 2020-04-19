import React, { useReducer } from "react";
import { MenuContext } from "./menuContext";
import { menuReducer } from "./menuReducer";
import { TOGGLE_MENU, CLOSE_MENU } from "../types";

export const MenuState = ({ children }) => {
	const initialState = {
		open: false,
	};

	const [state = initialState, dispatch] = useReducer(menuReducer);

	const toggle = () => {
		dispatch({
			type: TOGGLE_MENU,
			payload: { open: !state.open }, //*переключатель стейта
		});
	};

	const close = () => {
		dispatch({
			type: CLOSE_MENU,
			payload: { open: false }, //*закрывает мобильное меню
		});
	};

	return (
		<MenuContext.Provider value={{ toggle, close, menu: state }}>
			{children}
		</MenuContext.Provider>
	);
};
