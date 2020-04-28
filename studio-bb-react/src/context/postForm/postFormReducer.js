import {
	OPEN_POST_FORM,
	CLOSE_POST_FORM,
	SUBMIT_POST_FORM,
	SET_SENDING,
	CLEAR_FORM,
} from "../types";

const handlers = {
	[OPEN_POST_FORM]: (state) => ({
		...state,
		view: true,
		text: "Отправить сообщение",
	}),
	[CLOSE_POST_FORM]: (state) => ({ ...state, view: false }),
	[SUBMIT_POST_FORM]: (state, { payload }) => ({
		...state,
		//fields: payload,
		//sending: false,
	}),
	[SET_SENDING]: (state) => ({
		...state,
		sending: true,
		text: "Отправляется...",
	}),
	[CLEAR_FORM]: (state) => ({ ...state, fields: [] }),
	DEFAULT: (state) => state,
};

export const postFormReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action);
};
