import React, { Component } from "react";
import classes from "./CarouselBox.module.scss";
import firstStudioImg from "../../assets/jpg/studio-1.jpg";
import secondStudioImg from "../../assets/jpg/studio-2.jpg";
import thirdStudioImg from "../../assets/jpg/studio-3.jpg";
import fourthStudioImg from "../../assets/jpg/studio-4.jpg";

export default class CarouselBox extends Component {
  state = {
    images: [
      { src: firstStudioImg, className: classes.view },
      { src: secondStudioImg, className: classes.hide },
      { src: thirdStudioImg, className: classes.hide },
      { src: fourthStudioImg, className: classes.hide }
    ],
    currentSlide: 0
  };

  changeSliders(items) {
    const interval = window.setInterval(() => {
      if (this.state.currentSlide + 1 >= items.length) {
        this.setState({
          currentSlide: 0
        });
      } else {
        this.setState({
          currentSlide: this.state.currentSlide + 1
        });
      }
      window.clearInterval(interval); //@ очищаем память чтобы не было утечки памяти и не было нескольких счетчиков

      for (let i = 0; i < items.length; i++) {
        //@ задает всем фото opacity 0
        items[i].className = classes.hide;
      }
      items[this.state.currentSlide].className = classes.view; //@ задает opacity
    }, 10000);
  }

  //@ отрисовывает картинки из стейта
  renderSliders() {
    this.changeSliders(this.state.images);

    return this.state.images.map((image, index) => {
      return (
        <li key={index}>
          <img src={image.src} alt="photoStudio" className={image.className} />
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <section className={classes.CarouselBox}>
          <ul>{this.renderSliders()}</ul>
        </section>
      </>
    );
  }
}
