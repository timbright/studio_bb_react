import React, { useContext } from "react";
import classes from "./PostForm.module.scss";
import sprite from "../../assets/svg/sprite.svg";
import { PostFormContext } from "../../context/postForm/postFormContext";

const PostForm = (props) => {
	const { form, close } = useContext(PostFormContext);

	if (form.view === false) return null;

	const onSubmit = (evt) => {
		evt.preventDefault();
		console.log(`submit`);
	};

	return (
		<section className={classes.PostForm}>
			<form id="form">
				{/*<div class="form__close">*/}
				<button id="close-form" type="button" onClick={close}>
					<svg width="20" height="20" viewBox="0 0 20 20">
						<use href={sprite + "#cross-close-icon"}></use>
					</svg>
				</button>
				{/*</div>*/}
				<legend>Форма для связи</legend>
				<div>
					<svg width="32" height="32" viewBox="0 0 512 512">
						<use href={sprite + "#data_boy"}></use>
					</svg>
					<label htmlFor="name">
						Имя:
						<span>*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Как к Вам обращаться?"
						required
					></input>
				</div>
				<div>
					<svg width="32" height="32" viewBox="0 0 512 512">
						<use href={sprite + "#old_phone"}></use>
					</svg>
					<label htmlFor="phone">Телефон:</label>
					<input
						type="phone"
						id="phone"
						name="phone"
						placeholder="+7 (999) 99 99 999"
					></input>
				</div>
				<div>
					<svg width="32" height="32" viewBox="0 0 512 512">
						<use href={sprite + "#mailbox"}></use>
					</svg>
					<label htmlFor="email">
						E-mail:
						<span>*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="mail@mail.ru"
						required
					></input>
				</div>
				<div>
					<svg width="32" height="32" viewBox="0 0 512 512">
						<use href={sprite + "#comment"}></use>
					</svg>
					<label htmlFor="text_comment">Сообщение:</label>
					<textarea
						id="text_comment"
						name="text_comment"
						placeholder="Не стесняйтесь в своем красноречии :-)"
					></textarea>
				</div>
				<button type="submit" onClick={onSubmit} disabled={props.disabled}>
					{form.text}
				</button>
			</form>
		</section>
	);
};

export default PostForm;
