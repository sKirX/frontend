'use client';
import { useEffect } from "react";
import Image from "next/image";

export default function Card() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const cardData = [
    {
      title: 'Little Nightmares 2',
      text: 'This is the content for the first card.',
      img: '/images/sliders/sliders-04.png',
      link: '/',
    },
    {
      title: 'Arcane',
      text: 'This is the content for the second card.',
      img: '/images/sliders/sliders-02.png',
      link: '/',
    },
    {
      title: 'NieR Automata',
      text: 'This is the content for the third card.',
      img: '/images/sliders/sliders-03.png',
      link: '/',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <Image
                src={card.img}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
