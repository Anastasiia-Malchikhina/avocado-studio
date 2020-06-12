import React from 'react';
import './Three-column-text-block.scss';

const ThreeColumnTextBlock = () => {

  const aboutContent = [
    {
      title: 'Skórka',
      text: 'Nasza skórka - czyli dział obsługi klienta, jest twarda na zewnątrz, ale miękka w środku. Spajają nasz zespół razem i pomagają nam wszystkim skutecznie pracować, aby dostarczać kreatywne rozwiązania na najwyższym poziomie, a jednocześnie dbają bardzo o interesy klienta.'
    },
    {
      title: 'miąższ',
      text: 'Naszym ciałem - czyli działem kreatywnym, jest dobroć awokado, pełna składników odżywczych. Codziennie tryskają dobrocią graficzną. Z wieloletnim doświadczeniem bogatym w sztukę, artyzm i wyczucie smaku. Codziennie udowadniają nam swoje nieziemskie talenty.'
    },
    {
      title: 'Pestka',
      text: 'Nasz rdzeń - czyli zespół programistyczny. Przekształcają projekty działu kreatywnego w działające rozwiązania, mając na uwadze najnowsze trendy i nadążają za nowinkami technologicznymi. Zawsze patrzą w przyszłość i szukają odpowiedniego rozwiązania.'
    }
  ];
  const items = aboutContent.map((item, key) =>
    <div className="about__item" key={item.title}>
      <h4>{item.title}</h4>
      <p>{item.text}</p>
    </div>
  );

  return (   
    <div className="about container">{items}</div>
  );
}

export default ThreeColumnTextBlock;