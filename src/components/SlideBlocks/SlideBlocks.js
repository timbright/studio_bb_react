import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./SlideBlocks.module.scss";
import sprite from "../../assets/svg/sprite.svg";

import Button from "../UI/Button/Button";

const blocks = [
	{
		icon: [
			{ path: sprite + "#pilates-hundred" },
			{ width: "297.12" },
			{ height: "300" },
			{ viewBox: "0 0 297.12 300" },
		],
		head: "Пилатес это",
		text:
			"Система эффективных упражнений для глубокой проработки мыщц. Главная цель занятий Пилатес - сделать тело грациозным, послушным и выносливым",
		buttonName: "О студии",
		to: "/studio",
	},
	{
		icon: [
			{ path: sprite + "#teaser" },
			{ width: "357.3" },
			{ height: "300" },
			{ viewBox: "0 0 357.34 300" },
		],
		head: "Кому подходит Пилатес",
		text:
			"Этот метод настолько уникален и универсален, что подходит абсолютно всем, не зависимо от пола, возраста и физической подготовленности ",
		buttonName: "Преподаватели",
		to: "/our-teachers",
	},
	{
		icon: [
			{ path: sprite + "#t-plank" },
			{ width: "340.45" },
			{ height: "300" },
			{ viewBox: "0 0 340.45 300" },
		],
		head: "Польза Пилатес",
		text:
			"Этот метод настолько уникален и универсален, что подходит абсолютно всем, не зависимо от пола, возраста и физической подготовленности ",
		buttonName: "Расписание",
		to: "/schedule",
	},
];

//console.log(blocks);

export default class SlideBlocks extends Component {
	renderBlocks() {
		return blocks.map((block, index) => {
			//^деструктуризация
			const {
				icon: [path, width, height, viewBox],
			} = block;

			return (
				<li key={index}>
					<div className={classes.SlideBlocks__Slide}>
						<div className={classes.SlideBlocks__Icon}>
							<svg
								width={width.width}
								height={height.height}
								viewBox={viewBox.viewBox}
							>
								<use href={path.path}></use>
							</svg>
						</div>
						<h2>{block.head}</h2>
					</div>

					<div className={classes.SlideBlocks__Hide}>
						<p className={classes.SlideBlocks__Text}>{block.text}</p>
						<NavLink to={block.to}>
							<Button btnType="block">{block.buttonName}</Button>
						</NavLink>
					</div>
				</li>
			);
		});
	}
	render() {
		return <ul className={classes.SlideBlocks}>{this.renderBlocks()}</ul>;
	}
}
