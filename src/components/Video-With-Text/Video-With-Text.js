import React from 'react';
import Video from './Video/Video';
import './Video-With-Text.scss';

const VideoText = () => {
  return (
    <div className="video-with-text ">
      <Video></Video>
      <div className="video-with-text__green-column">
        <div className="video-with-text__green-column--content">
          <h5><strong>DOBRY PROJEKT</strong> PROWADZI DO <strong>DOBREGO INTERESU</strong></h5>
          <p>W <strong>Avocado Studio </strong> wprowadzamy odważne pomysły w życie. Naszym celem jest wdrożenie dobrego projektu w celu zwiększenia wartości biznesowej. Podstawą naszych przekonań jest zawsze dobranie odpowiedniego designu. Korzystamy z najnowszych badań rynku i sprawdzonych strategii. Dzięki temu nasz zespół stale opracowuje nowe sposoby docierania do odbiorców i angażowania ich zgodnie z intencją klienta. </p>
            
          <p> Biuro we Wrocławiu to urocze małe studio, które jest naszym kreatywnym sanktuarium. Nasze dni spędzamy tam analizując badania, tworzymy burze mózgów, wyczarowując koncepcje i przekraczając granice naszych umysłów. Cokolwiek robimy, nienasycenie szukamy momentu by powiedzieć <strong>„EUREKA” </strong>, w którym pomysł staje się koncepcją, a kreatywność ożywa.</p>
        </div>
      </div>
    </div>

  );
}

export default VideoText;