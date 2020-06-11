import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Testimonials.scss';
class Testimonials extends React.Component {


  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    const testimonialsContent = [
      {
        testimonial: 'Podziękowania za wspaniałą i zdrowo owocną współpracę.',
        name: 'Rafał Czerkawski',
        company: 'Treningowi Eksperci Sp. z o.o.'
      },
      {
        testimonial: 'Jeśli wszyscy nasi parterzy byli by tak sumienni jak Avodaco Studio to ja nadał bym chodził z włosami na głowie',
        name: 'Krzysztof Kaleta',
        company: 'Building Company Sp. z o.o.'
      },
      {
        testimonial: 'Mocno kreatywna i odżywcza współpraca z Avocado studio. Jesteście boscy.',
        name: 'Anna Ciura-Sierota',
        company: 'Centrum Wspierania Projektów Europejskich S.A.'
      }
    ];

  const items = testimonialsContent.map((item, key) =>
      <div className="testimonial">
        <p>{item.testimonial}</p>
        <h5 className="testimonial__name">{item.name}</h5>
        <h6 className="testimonial__company">{item.company}</h6>
      </div>
  );

  return (
    <Slider {...settings} className="testimonials">
      {items}
    </Slider>
  );
}
}

export default Testimonials;