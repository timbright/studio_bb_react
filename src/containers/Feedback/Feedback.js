import React, { Component } from "react";

import classes from "./Feedback.module.scss";
import php from "../../mail.php";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import Alert from "../../components/UI/Alert/Alert";

class Feedback extends Component {
	state = {
		messageForm: {
			name: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Как к Вам обращаться?",
					id: "name",
					name: "name",
				},
				value: "",
				validation: {
					required: true,
					maxLength: 40,
				},
				label: "Имя",
				htmlFor: "name",

				valid: false,
				touched: false,
			},
			tel: {
				elementType: "input",
				elementConfig: {
					type: "phone",
					placeholder: "+7 (999) 99 99 999",
					id: "phone",
					name: "phone",
				},
				value: "",
				validation: {
					required: false,
					maxLength: 15,
				},
				label: "Телефон:",
				htmlFor: "name",
				valid: false,
				touched: false,
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					placeholder: "mail@mail.com",
					id: "email",
					name: "email",
				},
				value: "",
				validation: {
					required: true,
					isEmail: true,
				},
				label: "E-mail:",
				htmlFor: "email",
				valid: false,
				touched: false,
			},
			textMessage: {
				elementType: "textarea",
				elementConfig: {
					type: "text",
					placeholder: "Не стесняйтесь в своем красноречии :-)",
				},
				value: "",
				validation: {
					required: true,
					maxLength: 200,
				},
				label: "Сообщение:",
				htmlFor: "text_comment",
				valid: false,
				touched: false,
			},
		},
		loading: false,
	};

	messageHandler = (event) => {
		event.preventDefault(); //- предотвратить перезагрузку
		this.setState({ loading: true }); //- запускаем лоадер

		const formData = {}; //-создаем пустой объект для данных формы
		for (let formElementIndentifier in this.state.messageForm) {
			formData[formElementIndentifier] = this.state.messageForm[
				formElementIndentifier
			].value;
		}
		this._ajaxSend(formData);
	};

	//- проверка введеных данных на валидность
	checkValidity(value, rules) {
		let isValid = true;

		if (!rules) {
			//- это условие дублиррует validation: {} , но это усиливает проверку
			//- если в каком то из инпутов  в поле validation отсутствует какое либо правило вернуть при проверки true
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== "" && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid;
		}

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid;
		}
		return isValid;
	}

	//- делаем копию стейта чтобы не мутировать начальный стейт и оставить его в изначальном состоянии
	//- чтобы скопировать стейт со вложенными объектами спрэд оператор использовать недостаточно
	inputChangedHandler = (event, inputIndentefier) => {
		const updatedMessageForm = {
			//- копируем стейт
			...this.state.messageForm,
		};

		const updatedFormElement = {
			//- копируем каждый элемент стейта
			...updatedMessageForm[inputIndentefier],
		};

		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedFormElement.touched = true;
		updatedMessageForm[inputIndentefier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIndentefier in updatedMessageForm) {
			formIsValid = updatedMessageForm[inputIndentefier].valid && formIsValid;
		}

		this.setState({
			messageForm: updatedMessageForm,
			formIsValid: formIsValid,
		});
	};

	messageDelete = () => {
		setTimeout(() => {
			this.setState({ error: false, success: false });
		}, 3000);
	};

	render() {
		const formElementArray = [];

		for (let key in this.state.messageForm) {
			formElementArray.push({
				id: key,
				config: this.state.messageForm[key],
			});
		}

		let form = (
			<form onSubmit={this.messageHandler}>
				<legend>Форма для связи</legend>
				{formElementArray.map((formElement) => (
					<Input
						key={formElement.id}
						id={formElement.id}
						name={formElement.name}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						label={formElement.config.label}
						htmlFor={formElement.config.htmlFor}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={(event) => this.inputChangedHandler(event, formElement.id)}
					/>
				))}
				<Button
					btnType="feedback"
					disabled={
						!this.state.formIsValid || this.state.error || this.state.success
					}
				>
					Отправить
				</Button>
				{this.state.loading ? <Loader /> : null}
				<Alert error={this.state.error} success={this.state.success} />
			</form>
		);
		return <section className={classes.Feedback}>{form}</section>;
	}

	_ajaxSend(formData) {
		fetch(php, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				this.setState({ loading: false });
				if (response.ok) {
					let currentMessageForm = this.state.messageForm;
					for (let inputIndentefier in currentMessageForm) {
						currentMessageForm[inputIndentefier].value = "";
					}
					this.setState({
						messageForm: currentMessageForm,
						formIsValid: false,
						success: {
							note: "Спасибо!",
							text: `Ваше сообщение отправлено!`,
						},
					});
					this.messageDelete();
				} else {
					this.setState({
						error: {
							text: `Cервер не доступен.`,
							typeError: `Ошибка: ${response.status}`,
						},
					});
					this.messageDelete();
				}
			})
			.catch((error) => {
				this.setState({
					loading: false,
					error: {
						text: `Что-то пошло не так...`,
						typeError: `${error}`,
					},
				});
				this.messageDelete();
			});
	}
}
export default Feedback;
