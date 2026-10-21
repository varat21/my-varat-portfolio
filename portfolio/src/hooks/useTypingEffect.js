import { useEffect, useState } from 'react';

/** True when the user has asked for reduced motion at the OS level. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (e) => setReduced(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Typewriter effect that cycles through `words`, typing then deleting each.
 * Respects prefers-reduced-motion by showing the first word statically.
 */
export function useTypingEffect(words, { typeSpeed = 90, deleteSpeed = 45, pauseTime = 1800 } = {}) {
  const reducedMotion = usePrefersReducedMotion();
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || !words?.length) {
      setText(words?.[0] ?? '');
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (!isDeleting && text === currentWord) {
      // Finished typing — pause, then start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Finished deleting — move to the next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeoutId = setTimeout(() => {
        setText((prev) =>
          isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
        );
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime, reducedMotion]);

  return text;
}
