import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const Blackhole = forwardRef((props, ref) => {
  const containerRef = (useRef < HTMLDivElement) | (null > null);

  useImperativeHandle(ref, () => ({
    getContainer: () => containerRef.current,
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const centerx = cw / 2;
    const centery = ch / 2;
    const maxorbit = 255;

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    const context = canvas.getContext("2d");
    if (!context) return;

    const scaleFactor = 192 / 96;
    canvas.width = Math.ceil(container.clientWidth * scaleFactor);
    canvas.height = Math.ceil(container.clientHeight * scaleFactor);
    context.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
    context.globalCompositeOperation = "multiply";

    let currentTime = 0;
    const startTime = Date.now();
    const stars = [];

    function rotate(cx, cy, x, y, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const nx = cos * (x - cx) + sin * (y - cy) + cx;
      const ny = cos * (y - cy) - sin * (x - cx) + cy;
      return [nx, ny];
    }

    class Star {
      constructor() {
        const rands = [
          Math.random() * (maxorbit / 2) + 1,
          Math.random() * (maxorbit / 2) + maxorbit,
        ];
        this.orbital = (rands[0] + rands[1]) / 2;

        this.x = centerx;
        this.y = centery + this.orbital;
        this.yOrigin = this.y;
        this.originalY = this.y;

        this.speed = ((Math.random() * 2.5 + 1.5) * Math.PI) / 180;
        this.rotation = 0;
        this.startRotation = Math.random() * 2 * Math.PI;
        this.id = stars.length;

        this.collapseBonus = Math.max(this.orbital - maxorbit * 0.7, 0);
        this.color = `rgba(255,255,255,${1 - this.orbital / 255})`;

        this.hoverPos = centery + maxorbit / 2 + this.collapseBonus;
        this.expansePos =
          centery + (this.id % 100) * -10 + (Math.random() * 20 + 1);

        this.prevX = this.x;
        this.prevY = this.y;
        this.prevR = this.startRotation;

        stars.push(this);
      }

      draw() {
        this.rotation = this.startRotation + currentTime * this.speed;
        this.y +=
          this.y < this.yOrigin - 4 ? (this.yOrigin - this.y) / 10 : -2.5;

        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const oldPos = rotate(
          centerx,
          centery,
          this.prevX,
          this.prevY,
          -this.prevR
        );
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerx, centery);
        context.rotate(this.rotation);
        context.translate(-centerx, -centery);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.restore();

        this.prevX = this.x;
        this.prevY = this.y;
        this.prevR = this.rotation;
      }
    }

    for (let i = 0; i < 1500; i++) new Star();

    const loop = () => {
      currentTime = (Date.now() - startTime) / 50;
      context.fillStyle = "rgba(25,25,25,0.2)";
      context.fillRect(0, 0, cw, ch);
      stars.forEach((star) => star.draw());
      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      container.removeChild(canvas);
    };
  }, []);

  return (
    <div className="back-hole">
      <div
        ref={containerRef}
        className="relative w-full h-[500px] bg-black overflow-hidden"
      >
        {props.children}
      </div>
    </div>
  );
});

export default Blackhole;
