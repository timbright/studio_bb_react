import React, { useReducer } from "react";
import { PostFormContext } from "./postFormContext";
import { postFormReducer } from "./postFormReducer";
import { OPEN_POST_FORM, CLOSE_POST_FORM } from "../types";

export const PostFormState = ({ children }) => {
	const initialState = {
		view: false,
		text: [],
		sending: false,
	};
	const [state, dispatch] = useReducer(postFormReducer, initialState);

	const open = () => {
		dispatch({ type: OPEN_POST_FORM });
	};

	const close = () => {
		dispatch({ type: CLOSE_POST_FORM });
	};

	return (
		<PostFormContext.Provider value={{ open, close, form: state }}>
			{children}
		</PostFormContext.Provider>
	);
};
