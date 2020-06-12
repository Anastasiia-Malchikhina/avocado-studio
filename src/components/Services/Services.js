import React from 'react';
import MainHeading from '../Heading/Heading';
import SubHeading from '../Heading/SubHeading';
import './Services.scss';

const  Services = () => {

  const servicesContent = [
    {
      icon: require('../../images/icons/code.svg'),
      title: 'Strony WWW',
      text: 'Z pasją tworzymy strony WWW, wykorzystująć aktualne trendy i najnowsze technologie. Tworzymy nieszbalonowe kreacje które, przyciągają uwagę odbiorców i sprawiają że zapamiętują je na długo.'
    },
    {
      icon: require('../../images/icons/sales.svg'),
      title: 'E-commerce',
      text: 'Tworzymy duże i małe sklepy internetower dopasowane idealnie do potrzeb naszych klientów. Integrujemy je z systemami automatyczej korespondencji, płatności, dostawy i księgowością klienta.'
    },
    {
      icon: require('../../images/icons/marketing.svg'),
      title: 'E-marketing',
      text: 'Wspieramy naszych klientów zwiększająć ich sprzedaż. Korzystamy z popularnych oraz niszowych sposobów dotarcia z przekazami marketingowymi do spersonalizowanych grup odbiorców.'
    },
    {
      icon: require('../../images/icons/idea.svg'),
      title: 'Rozwój marki',
      text: 'Budujemy marki. Analizujemy obecną pozycję, badamy aspiracje i planujemy kurs podróży marek na rynek i ich wzrost w czasie. Z pasją obserwujemy jak nasze działania pozwalają rosnąć naszym klientom.'
    },
    {
      icon: require('../../images/icons/electronics.svg'),
      title: 'Projekty graficzne',
      text: 'Właśnie na tym polega design. Nasz kreatywny zespół spędza mnóstwo czasu przekuwając lużne idea projektowe w prawdziwe dzieła sztuki. Są głodni każdego wyzwania.'
    },
    {
      icon: require('../../images/icons/help.svg'),
      title: 'STRATEGIA',
      text: 'Żadna marka ani biznes nie mogą przetrwać bez właściwej strategii u podstaw. Zespół Avocado Studio prowadzi konsultacje strategiczne i ściśle współpracuje z klientem, aby pomóc odkryć unikalną ścuieżkę wzrostu.'
    },
    {
      icon: require('../../images/icons/share.svg'),
      title: 'Social Media',
      text: 'Era cyfrowa nadeszła i utrzymanie uwagi odbiorcy w dzisiejszym szybkim świecie staje się coraz większym wyzwaniem. Korzystamy z areny społecznościowej, aby prowadzić rozmowy na temat marki klienta i rozwijać relacje.'
    },
    {
      icon: require('../../images/icons/letter.svg'),
      title: 'Copy Writing',
      text: 'Zapewniamy najwyższej jakości usługi pisania treści na stronie internetowej firmy lub mediach społecznościowych. Jeśli chcesz zostać zauważony, potrzebujesz dobrych tekstów, które sprzedają. Nasi eksperci od copywritingu zapewniają ich dostatek.'
    },
    {
      icon: require('../../images/icons/glasses.svg'),
      title: 'DORADZTWO',
      text: 'Czasami potrzebujesz porady, aby utrzymać się na dobrej drodze. Nasze wieloletnie doświadczenie w różnych obszarach może pomóc Twojej marce jak najlepiej wykorzystać obecną sytuację.'
    }
    

  ];
  const items = servicesContent.map((item, key) =>
    <div className="services__item" key={item.title}>
      <img className="services__item--icon" src={item.icon} alt=""/>
      <h4 className="services__item--title">{item.title}</h4>
      <p>{item.text}</p>
    </div>
  );
  return (
    <>
    <MainHeading>rozwiązywanie problemów</MainHeading>
    <SubHeading>Z KREATYWNOŚCIĄ. TO CO ROBIMY.</SubHeading>
    <div className="services container">
      {items}
    </div>
    </> 
  );
}

export default Services;