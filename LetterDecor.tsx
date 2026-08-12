// Subtle decorative elements around the open letter: tiny floating hearts,
// small sparkles, and a few paper-like particles. Kept sparse so the letter
// stays the focus.

type DecorType = 'heart' | 'sparkle' | 'paper';

interface DecorItem {
  id: number;
  type: DecorType;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
}

const HEART_COLORS = ['#e8879a', '#f3b8c4', '#c96a80'];
const SPARKLE_COLORS = ['#d4a373', '#f7d9a0', '#e8879a'];
const PAPER_COLORS = ['#f2e2cd', '#ecd7ba', '#e8dcc4'];

const ITEMS: DecorItem[] = Array.from({ length: 14 }, (_, i) => {
  const types: DecorType[] = ['heart', 'sparkle', 'paper'];
  const type = types[i % 3];
  // Scatter around the outer edges of the letter area.
  const left = 2 + Math.random() * 96;
  const top = 2 + Math.random() * 96;
  return {
    id: i,
    type,
    left,
    top,
    size: 8 + Math.random() * 10,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 4,
    drift: 8 + Math.random() * 16,
  };
});

const COLOR_FOR: Record<DecorType, string[]> = {
  heart: HEART_COLORS,
  sparkle: SPARKLE_COLORS,
  paper: PAPER_COLORS,
};

export default function LetterDecor() {
  return (
    <div className="letter-decor" aria-hidden="true">
      {ITEMS.map((item) => {
        const color = COLOR_FOR[item.type][item.id % COLOR_FOR[item.type].length];
        return (
          <span
            key={item.id}
            className={`letter-decor__item letter-decor__item--${item.type}`}
            style={
              {
                left: `${item.left}%`,
                top: `${item.top}%`,
                fontSize: item.size,
                color,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
                '--drift': `${item.drift}px`,
              } as React.CSSProperties
            }
          >
            {item.type === 'heart' ? '♥' : item.type === 'sparkle' ? '✦' : ''}
          </span>
        );
      })}
    </div>
  );
}
