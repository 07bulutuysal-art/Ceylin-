import { useCallback, useState } from 'react';
import Scene1Letter from '@/components/Scene1Letter';
import Scene2Card from '@/components/Scene2Card';
import Scene3Photo from '@/components/Scene3Photo';
import MusicToggle from '@/components/MusicToggle';

type SceneId = 1 | 2 | 3;
type Phase = 'enter' | 'idle' | 'exit';

// Matches the CSS scene-exit animation duration in scenes.css.
const EXIT_DURATION_MS = 550;

function App() {
  const [scene, setScene] = useState<SceneId>(1);
  const [phase, setPhase] = useState<Phase>('enter');

  const goToScene = useCallback((next: SceneId) => {
    setPhase('exit');
    window.setTimeout(() => {
      setScene(next);
      setPhase('enter');
      // Drop the enter class on the next tick so future re-entries replay it.
      window.setTimeout(() => setPhase('idle'), 30);
    }, EXIT_DURATION_MS);
  }, []);

  return (
    <div className="app-root">
      <MusicToggle />
      <div className={`scene-stage scene-stage--${phase}`}>
        {scene === 1 && <Scene1Letter onOpen={() => goToScene(2)} />}
        {scene === 2 && <Scene2Card onContinue={() => goToScene(3)} />}
        {scene === 3 && <Scene3Photo />}
      </div>
    </div>
  );
}

export default App;
