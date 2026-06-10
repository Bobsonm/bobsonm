import { useEffect, useRef } from "react";

interface Hero3DProps {
  /** Normalized 0..1 progress through the hero scrub container */
  progress: React.MutableRefObject<number>;
}

/**
 * Cinematic 4-scene hero, pure Canvas 2D. Scenes morph based on progress:
 *  0.00 — 0.25 → Golden billiard ball (№8) on velvet
 *  0.25 — 0.50 → Hookah ember + rising smoke
 *  0.50 — 0.75 → Playing cards drifting
 *  0.75 — 1.00 → Plated dish silhouette
 * Perf: DPR cap, particle count adapts to viewport, pauses when offscreen,
 * respects prefers-reduced-motion.
 */
export function Hero3D({ progress }: Hero3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    // Adaptive particle counts
    const isSmall = window.innerWidth < 768;
    const SMOKE = isSmall ? 12 : 22;
    const SPARK = isSmall ? 24 : 48;
    const CARD_COUNT = 5;

    const smoke = Array.from({ length: SMOKE }, (_, i) => ({
      seed: Math.random() * 1000,
      ox: (Math.random() - 0.5) * 0.4,
      size: 80 + Math.random() * 120,
      speed: 0.3 + Math.random() * 0.6,
    }));
    const sparks = Array.from({ length: SPARK }, () => ({
      a: Math.random() * Math.PI * 2,
      r: Math.random(),
      s: Math.random() * 0.4 + 0.2,
      o: Math.random(),
    }));
    const cards = Array.from({ length: CARD_COUNT }, (_, i) => ({
      ox: (i - (CARD_COUNT - 1) / 2) * 0.18,
      rot: (Math.random() - 0.5) * 0.6,
      d: i * 0.06,
    }));

    const start = performance.now();

    // Easing helpers
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const easeInOut = (x: number) =>
      x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const sceneWeight = (p: number, center: number, half = 0.18) => {
      const d = Math.abs(p - center);
      return clamp(1 - d / half);
    };

    const drawBall = (
      cx: number,
      cy: number,
      r: number,
      alpha: number,
      t: number,
    ) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;

      // Velvet glow under ball
      const glow = ctx.createRadialGradient(cx, cy + r * 0.6, r * 0.2, cx, cy + r * 0.6, r * 2.2);
      glow.addColorStop(0, "rgba(200,160,80,0.35)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy + r * 0.6, r * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Ball body (dark)
      const rotate = t * 0.4;
      const lightX = cx - r * 0.4 + Math.cos(rotate) * r * 0.05;
      const lightY = cy - r * 0.4;
      const body = ctx.createRadialGradient(lightX, lightY, r * 0.1, cx, cy, r * 1.15);
      body.addColorStop(0, "#3a3a3a");
      body.addColorStop(0.35, "#161616");
      body.addColorStop(1, "#000");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      // Gold circle with 8
      const circR = r * 0.42;
      const cg = ctx.createRadialGradient(cx - r * 0.1, cy - r * 0.1, circR * 0.1, cx, cy, circR);
      cg.addColorStop(0, "#fff3c4");
      cg.addColorStop(0.5, "#d4a84a");
      cg.addColorStop(1, "#7a5a1c");
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(cx, cy, circR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#0a0a0a";
      ctx.font = `700 ${Math.floor(r * 0.55)}px 'Cormorant Garamond', serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("8", cx, cy + r * 0.02);

      // Specular highlight
      const sp = ctx.createRadialGradient(lightX, lightY, 0, lightX, lightY, r * 0.45);
      sp.addColorStop(0, "rgba(255,255,255,0.45)");
      sp.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = sp;
      ctx.beginPath();
      ctx.arc(lightX, lightY, r * 0.45, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawHookah = (
      cx: number,
      cy: number,
      r: number,
      alpha: number,
      t: number,
    ) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;

      // Ember
      const ember = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.55);
      ember.addColorStop(0, "rgba(255,220,140,0.95)");
      ember.addColorStop(0.4, "rgba(230,140,40,0.7)");
      ember.addColorStop(1, "rgba(120,40,0,0)");
      ctx.fillStyle = ember;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
      ctx.fill();

      // Sparks
      sparks.forEach((s) => {
        const life = (t * s.s + s.o) % 1;
        const rr = r * 0.2 + life * r * 0.9;
        const px = cx + Math.cos(s.a) * rr;
        const py = cy + Math.sin(s.a) * rr - life * r * 0.4;
        ctx.fillStyle = `rgba(255,${180 - life * 80},80,${(1 - life) * 0.7})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Rising smoke columns
      smoke.forEach((b) => {
        const life = ((t * 0.05 * b.speed) + b.seed * 0.001) % 1;
        const yy = cy - life * h * 0.85;
        const xx = cx + Math.sin(life * 4 + b.seed) * 60 + b.ox * 120;
        const sz = b.size * (0.6 + life * 1.1);
        const op = (1 - life) * 0.18;
        const g = ctx.createRadialGradient(xx, yy, 0, xx, yy, sz);
        g.addColorStop(0, `rgba(220,200,160,${op})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(xx, yy, sz, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const drawCards = (cx: number, cy: number, r: number, alpha: number, t: number) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      const cw = r * 1.05;
      const ch = r * 1.55;
      cards.forEach((c, i) => {
        const drift = Math.sin(t * 0.6 + c.d * 10) * 12;
        const x = cx + c.ox * r * 3.4;
        const y = cy + drift + (i - 2) * 4;
        const rot = c.rot + Math.sin(t * 0.4 + i) * 0.05;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        // Card back (noir w/ gold border)
        ctx.fillStyle = "#0c0c0c";
        roundRect(ctx, -cw / 2, -ch / 2, cw, ch, 10);
        ctx.fill();
        ctx.strokeStyle = "rgba(212,168,74,0.65)";
        ctx.lineWidth = 1.2;
        roundRect(ctx, -cw / 2 + 4, -ch / 2 + 4, cw - 8, ch - 8, 8);
        ctx.stroke();
        // Center ornament
        ctx.fillStyle = "rgba(212,168,74,0.9)";
        ctx.font = `400 ${Math.floor(cw * 0.5)}px 'Cormorant Garamond', serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("♠", 0, 4);
        ctx.restore();
      });
      ctx.restore();
    };

    const drawDish = (cx: number, cy: number, r: number, alpha: number, t: number) => {
      if (alpha <= 0.01) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      // Plate (elliptical)
      const pw = r * 2.4;
      const ph = r * 0.8;
      const plate = ctx.createRadialGradient(cx, cy, 0, cx, cy, pw / 2);
      plate.addColorStop(0, "#222");
      plate.addColorStop(0.6, "#111");
      plate.addColorStop(1, "#000");
      ctx.fillStyle = plate;
      ctx.beginPath();
      ctx.ellipse(cx, cy + r * 0.2, pw / 2, ph / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      // Gold rim
      ctx.strokeStyle = "rgba(212,168,74,0.85)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy + r * 0.2, pw / 2 - 4, ph / 2 - 4, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Food blobs
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2 + t * 0.05;
        const xx = cx + Math.cos(a) * r * 0.35;
        const yy = cy + r * 0.15 + Math.sin(a) * r * 0.1;
        const g = ctx.createRadialGradient(xx, yy, 0, xx, yy, r * 0.35);
        g.addColorStop(0, "rgba(212,168,74,0.55)");
        g.addColorStop(1, "rgba(60,30,10,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(xx, yy, r * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }
      // Steam wisps
      for (let i = 0; i < 3; i++) {
        const life = ((t * 0.15) + i * 0.33) % 1;
        const yy = cy - life * r * 2.2;
        const xx = cx + Math.sin(life * 5 + i) * 30;
        const sz = 70 + life * 90;
        const g = ctx.createRadialGradient(xx, yy, 0, xx, yy, sz);
        g.addColorStop(0, `rgba(230,220,200,${(1 - life) * 0.18})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(xx, yy, sz, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    function roundRect(c: CanvasRenderingContext2D, x: number, y: number, ww: number, hh: number, rr: number) {
      c.beginPath();
      c.moveTo(x + rr, y);
      c.arcTo(x + ww, y, x + ww, y + hh, rr);
      c.arcTo(x + ww, y + hh, x, y + hh, rr);
      c.arcTo(x, y + hh, x, y, rr);
      c.arcTo(x, y, x + ww, y, rr);
      c.closePath();
    }

    // Frame throttling for mid-tier devices
    let last = 0;
    const minDelta = 1000 / 50; // ~50fps cap

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      if (now - last < minDelta) return;
      last = now;

      const t = (now - start) / 1000;
      const p = clamp(progress.current);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h * 0.5;
      const baseR = Math.min(w, h) * 0.18;

      // Scene weights
      const wBall = sceneWeight(p, 0.0, 0.22);
      const wHookah = sceneWeight(p, 0.33, 0.22);
      const wCards = sceneWeight(p, 0.66, 0.22);
      const wDish = sceneWeight(p, 1.0, 0.25);

      // Slight vertical drift driven by progress
      const drift = easeInOut(p) * -40;

      drawBall(cx, cy + drift, baseR, wBall, reduced ? 0 : t);
      drawHookah(cx, cy + drift + baseR * 0.2, baseR * 0.9, wHookah, reduced ? 0 : t);
      drawCards(cx, cy + drift, baseR * 0.9, wCards, reduced ? 0 : t);
      drawDish(cx, cy + drift, baseR, wDish, reduced ? 0 : t);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
