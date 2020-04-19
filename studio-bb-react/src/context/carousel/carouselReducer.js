import { CHANGE_SLIDE, RESET_COUNTER } from "../types";

const handlers = {
	[CHANGE_SLIDE]: (state, action) => action.payload,
	[RESET_COUNTER]: (state, action) => action.payload,
	DEFAULT: (state) => state,
};

export const carouselReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action);
};
