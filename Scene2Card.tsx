import { SITE_CONTENT } from '@/content';

interface Scene2CardProps {
  onContinue: () => void;
}

export default function Scene2Card({ onContinue }: Scene2CardProps) {
  const { from, to, label, message } = SITE_CONTENT.page2;

  return (
    <section className="scene scene-card-wrap">
      <div className="message-card">
        <p className="card-line card-line--from">{from}</p>
        <p className="card-line card-line--to">{to}</p>

        <p className="card-label">{label}</p>
        <p className="card-message">{message}</p>

        <div className="card-button-row">
          <button
            type="button"
            className="arrow-button"
            onClick={onContinue}
            aria-label="Devam et"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
