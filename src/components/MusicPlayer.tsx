import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const VIDEO_ID = "oBxopeWP22w";

/** Muted YouTube audio autoplay with a play/pause + unmute control. */
export function MusicPlayer({ label }: { label: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(true);

  const post = (func: string, args: unknown[] = []) => {
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  };

  useEffect(() => {
    const t = setTimeout(() => post("playVideo"), 1200);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    if (playing) {
      post("pauseVideo");
      setPlaying(false);
    } else {
      post("unMute");
      post("setVolume", [55]);
      post("playVideo");
      setPlaying(true);
    }
  };

  return (
    <>
      <iframe
        ref={frameRef}
        title="Background music"
        className="pointer-events-none absolute h-px w-px opacity-0"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&mute=1&loop=1&controls=0&playlist=${VIDEO_ID}`}
        allow="autoplay; encrypted-media"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        className="glass-panel flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-foreground transition-transform hover:scale-105"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="hidden sm:inline">{label}</span>
      </button>
    </>
  );
}
