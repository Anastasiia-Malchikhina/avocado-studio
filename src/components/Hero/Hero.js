import React from 'react';
import styles from './Hero.module.scss';
import './hero.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import parse from 'html-react-parser';

class Slideshow extends React.Component {

  settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  componentWillMount() {
  }
  render() {
  
    const heroContent = [
      {
        image: require('../../images/Slider/avocado-6.jpg'),
        title: 'Koncentrujemy się na <strong> kreatywnym</strong> projektowaniu i strategiach dla <strong>marek</strong>'
      },
      {
        image: require('../../images/Slider/avocado-1.jpg'),
        title: "Stwórzmy razem coś <strong>wspaniałego </strong>"
      },
      
      {
        image: require('../../images/Slider/avocado-4.jpg'),
        title: 'Jesteśmy małym, ale dynamicznym <strong> studiem kreatywnym </ strong> '
      },
      {
        image: require('../../images/Slider/avocado-5.jpg'),
        title: '#Kreatywne<strong>Odżywianie</strong>'
      },      
      {
        image: require('../../images/Slider/avocado.jpg'),
        title: 'Awokado Studio odżywia marki <strong> kreatywnością </strong>'
      }
    ];

    const items = heroContent.map((item) =>
      <div className={styles.hero__slide} key={item.title}>
        <h3 className={styles.hero__title}>{parse(item.title)}</h3>
        <img className={styles.hero__img} src={item.image} alt={item.title}/>
      </div> 
    );

    return (
      <React.StrictMode>
        <Slider {...this.settings} className={styles.hero}>
          {items}
        </Slider>
      </React.StrictMode>
    );
  }
}

export default Slideshow;