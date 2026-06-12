import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 3000;
const listeners = new Set<() => void>();
let syncedIndex = 0;
let timerStarted = false;

function startGlobalTimer() {
  if (timerStarted) return;
  timerStarted = true;
  setInterval(() => {
    syncedIndex = (syncedIndex + 1) % 3;
    listeners.forEach((listener) => listener());
  }, SLIDE_INTERVAL_MS);
}

/** Keeps every product card on the same color slide at the same time. */
export function useSyncedSlideshowIndex(length: number): number {
  const [, setTick] = useState(0);

  useEffect(() => {
    startGlobalTimer();
    const listener = () => setTick((value) => value + 1);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  if (length <= 0) return 0;
  return syncedIndex % length;
}

export { SLIDE_INTERVAL_MS };
