import { useRef, useState } from 'react';
import { Music, Music2 } from 'lucide-react';
import { SITE_CONTENT } from '@/content';

// Music never autoplays (mobile browsers block it anyway) — the visitor
// must tap to start it. If the file is missing, the tap silently no-ops.
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SITE_CONTENT.assets.music} loop preload="none" />
      <button
        type="button"
        className={`music-toggle${playing ? ' music-toggle--playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Müziği durdur' : 'Müziği çal'}
        aria-pressed={playing}
      >
        {playing ? <Music2 size={19} /> : <Music size={19} />}
      </button>
    </>
  );
}
