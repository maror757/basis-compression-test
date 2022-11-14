import { useEffect, useRef } from "react";
import "./App.css";
import * as pc from "playcanvas";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initializeScene = (canvas: HTMLCanvasElement) => {
    const app = new pc.Application(canvas, {
      assetPrefix: "playcanvas/",
    });

    app.configure("playcanvas/config.json", (error) => {
      if (error) {
        console.error(error);
        return;
      }

      app.preload(() => {
        app.scenes.loadScene("1557517.json", (err, scene) => {
          if (err) {
            console.error(err);
            return;
          }

          app.start();
        });

        app.start();
        canvas.style.width = "";
        canvas.style.height = "";
      });
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      initializeScene(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <canvas
        className="Canvas"
        width={1000}
        height={700}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}

export default App;
