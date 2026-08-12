import { useState } from 'react';
import { SITE_CONTENT } from '@/content';

interface Scene1LetterProps {
  onOpen: () => void;
}

export default function Scene1Letter({ onOpen }: Scene1LetterProps) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    // Let the paper-opening animation play before moving to the next scene.
    window.setTimeout(onOpen, 650);
  };

  return (
    <section className="scene scene-letter">
      <h1 className="letter-title">{SITE_CONTENT.page1.greeting}</h1>

      <button
        type="button"
        className="envelope-button"
        onClick={handleClick}
        aria-label="Mektubu aç"
      >
        <div className={`envelope${opening ? ' envelope--opening' : ''}`}>
          <div className="envelope__back" />
          <div className="envelope__flap" />
          <div className="envelope__seal">♥</div>
        </div>
      </button>

      <p className="letter-subtitle">{SITE_CONTENT.page1.subtitle}</p>
    </section>
  );
}
