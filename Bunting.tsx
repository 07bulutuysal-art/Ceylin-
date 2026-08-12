const FLAG_COLORS = ['#F3B8C4', '#F7D9A0', '#BFE1F0', '#BFEAD5', '#F6C9A0'];
const FLAG_COUNT = 13;

interface Flag {
  id: number;
  color: string;
  sag: number;
  delay: number;
}

// Builds a row of flags with a gentle sag toward the middle, like a real
// string of bunting hung between two points.
function buildFlags(): Flag[] {
  return Array.from({ length: FLAG_COUNT }, (_, i) => {
    const progress = i / (FLAG_COUNT - 1);
    const sag = Math.sin(progress * Math.PI) * 10;
    return {
      id: i,
      color: FLAG_COLORS[i % FLAG_COLORS.length],
      sag,
      delay: (i % 5) * 0.15,
    };
  });
}

const FLAGS = buildFlags();

export default function Bunting() {
  return (
    <div className="bunting" aria-hidden="true">
      <div className="bunting__string" />
      {FLAGS.map((flag) => (
        <span
          key={flag.id}
          className="bunting__flag"
          style={
            {
              backgroundColor: flag.color,
              '--sag': `${flag.sag}px`,
              animationDelay: `${flag.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
