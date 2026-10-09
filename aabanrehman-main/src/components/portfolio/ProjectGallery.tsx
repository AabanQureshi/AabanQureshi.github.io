import { useRef, useState } from 'react';
import type { ProjectMedia } from '@/content';

function MediaPreview({ item }: { item: ProjectMedia }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const [fullscreenError, setFullscreenError] = useState(false);

  return <>
    <div className="gallery-preview" ref={frame}>
      {failed ? <p role="status">This media could not load. Choose another preview.</p> : item.type === 'video' ?
        <video src={item.src} controls playsInline preload="none" poster={item.poster} aria-label={item.caption} onError={() => setFailed(true)}>
          {item.captions && <track kind="captions" src={item.captions} srcLang="en" label="English" default />}
          Your browser cannot play this video.
        </video> : <>
          {!loaded && <span className="gallery-loading" role="status">Loading image…</span>}
          <img src={item.src} alt={item.alt} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
        </>}
    </div>
    <div className="gallery-caption"><p>{item.caption || (item.type === 'image' ? item.alt : '')}</p>
      {!failed && item.type === 'image' && <button type="button" onClick={async () => {
        try { await frame.current?.requestFullscreen(); } catch { setFullscreenError(true); }
      }}>View fullscreen</button>}
    </div>
    {fullscreenError && <p role="status">Fullscreen is unavailable. <a href={item.src} target="_blank" rel="noopener noreferrer">Open the image</a></p>}
  </>;
}

export function ProjectGallery({ media }: { media: ProjectMedia[] }) {
  const [selected, setSelected] = useState(0);
  if (!media.length) return null;
  return <section className="project-gallery" aria-label="Project media">
    <MediaPreview key={`${selected}-${media[selected].src}`} item={media[selected]} />
    {media.length > 1 && <>
      <div className="gallery-navigation"><button type="button" disabled={selected === 0} onClick={() => setSelected(selected - 1)}>Previous</button>
        <span role="status">{selected + 1} of {media.length}</span>
        <button type="button" disabled={selected === media.length - 1} onClick={() => setSelected(selected + 1)}>Next</button></div>
      <div className="gallery-thumbnails" aria-label="Choose a preview" onKeyDown={event => {
        const index = Array.from(event.currentTarget.querySelectorAll('button')).indexOf(event.target as HTMLButtonElement);
        if (index < 0 || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? media.length - 1 : Math.max(0, Math.min(media.length - 1, index + (event.key === 'ArrowRight' ? 1 : -1)));
        setSelected(next);
        event.currentTarget.querySelectorAll('button')[next].focus();
      }}>{media.map((item, index) => <button key={`${index}-${item.src}`} type="button"
        aria-label={`${item.type === 'video' ? 'Play video' : 'View image'} ${index + 1}: ${item.caption || (item.type === 'image' ? item.alt : '')}`}
        aria-pressed={selected === index} onClick={() => setSelected(index)}>
        <img src={item.type === 'video' ? item.poster : item.src} alt="" loading="lazy" onError={event => { event.currentTarget.style.visibility = 'hidden'; }} />
        <span>{item.type === 'video' ? 'Video' : index + 1}</span>
      </button>)}</div>
    </>}
  </section>;
}
