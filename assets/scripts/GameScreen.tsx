import { useEffect, useRef } from "react";
import { Application } from "pixi.js";

export function GameScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const app = new Application();

    let destroyed = false;

    async function initialize() {
      await app.init({
        resizeTo: containerRef.current!,
        background: "#1b6ca8",
        antialias: true,
      });

      if (destroyed) {
        app.destroy(true);
        return;
      }

      containerRef.current!.appendChild(app.canvas);
    }

    initialize();

    return () => {
      destroyed = true;
      app.destroy(true);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
}