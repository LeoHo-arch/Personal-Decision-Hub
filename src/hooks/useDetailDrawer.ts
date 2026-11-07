import { useCallback, useState } from "react";

export function useDetailDrawer<T>() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<T | null>(null);

  const openWith = useCallback((item: T) => {
    setCurrent(item);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return { open, current, openWith, close };
}
