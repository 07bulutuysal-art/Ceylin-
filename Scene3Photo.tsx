import Bunting from '@/components/Bunting';
import LetterDecor from '@/components/LetterDecor';
import { SITE_CONTENT } from '@/content';

export default function Scene3Photo() {
  return (
    <section className="scene scene-photo">
      <Bunting />

      {/* Open paper letter — visually continues the envelope from page 1 */}
      <div className="open-letter-wrap">
        <LetterDecor />
        <article className="open-letter">
          <div className="open-letter__crease open-letter__crease--top" />
          <p className="open-letter__text">{SITE_CONTENT.page3.letter}</p>
          <div className="open-letter__crease open-letter__crease--bottom" />
        </article>
      </div>
    </section>
  );
}
