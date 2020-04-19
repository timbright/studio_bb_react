import { TOGGLE_MENU, CLOSE_MENU } from "../types";

const handlers = {
	[TOGGLE_MENU]: (state, action) => action.payload,
	[CLOSE_MENU]: (state, action) => action.payload,
	DEFAULT: (state) => state,
};

export const menuReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action);
};
