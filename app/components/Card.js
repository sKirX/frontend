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
      text: 'Face your fears in the darkest world of nightmares.',
      img: '/images/sliders/sliders-04.png',
      link: '/',
    },
    {
      title: 'Arcane',
      text: 'Dive into the world of Piltover and Zaun with mystery and tech.',
      img: '/images/sliders/sliders-02.png',
      link: '/',
    },
    {
      title: 'NieR Automata',
      text: 'Humanity’s fate lies in your hands — stylish and surreal.',
      img: '/images/sliders/sliders-03.png',
      link: '/',
    },
  ];

  return (
    <div style={styles.container}>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div style={styles.card}>
              <Image
                src={card.img}
                alt={`Card ${index + 1}`}
                width={500}
                height={300}
                layout="responsive"
                style={styles.image}
              />
              <div style={styles.cardBody}>
                <h5 style={styles.cardTitle}>{card.title}</h5>
                <p style={styles.cardText}>{card.text}</p>
                <a href={card.link} style={styles.button}>Explore</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0f172a',
    padding: '40px 20px',
    color: '#e0f2fe',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    boxShadow: '0 0 15px rgba(96, 165, 250, 0.3)', // ฟ้าเรืองแสง
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    border: '1px solid #3b82f6',
  },
  image: {
    objectFit: 'cover',
    borderBottom: '1px solid #3b82f6',
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    color: '#60a5fa',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardText: {
    color: '#cbd5e1',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 1.5,
  },
  button: {
    backgroundColor: '#3b82f6',
    color: '#f8fafc',
    padding: '10px 20px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 0 10px #3b82f6',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
};
