import { useEffect, useRef } from "react";

interface Hero3DProps {
  scrollY: React.MutableRefObject<number>;
}

/**
 * Premium animated hero scene — pure Canvas 2D, no react-three-fiber.
 * Renders: a glowing morphing orb, orbiting particle field, soft volumetric smoke.
 * Reacts to scroll via the shared scrollY ref.
 */
export function Hero3D({ scrollY }: Hero3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle field
    const PARTICLE_COUNT = 180;
    type P = { x: number; y: number; z: number; r: number; s: number };
    const particles: P[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
      r: Math.random() * 1.2 + 0.3,
      s: Math.random() * 0.5 + 0.2,
    }));

    // Smoke blobs
    const SMOKE_COUNT = 7;
    const smoke = Array.from({ length: SMOKE_COUNT }, (_, i) => ({
      angle: (i / SMOKE_COUNT) * Math.PI * 2,
      radius: 180 + i * 40,
      size: 220 + i * 30,
      hue: i % 2 === 0 ? "79, 70, 229" : "124, 117, 255",
    }));

    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const s = scrollY.current;
      const scrollFactor = Math.min(s * 0.0008, 0.6);

      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2 - s * 0.15;

      // Smoke blobs
      smoke.forEach((b, i) => {
        const ang = b.angle + t * 0.1 + i * 0.2;
        const x = cx + Math.cos(ang) * b.radius * (1 + scrollFactor * 0.5);
        const y = cy + Math.sin(ang) * b.radius * 0.6;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, b.size);
        grad.addColorStop(0, `rgba(${b.hue}, 0.18)`);
        grad.addColorStop(0.5, `rgba(${b.hue}, 0.06)`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, b.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Central orb — morphing glow
      const orbScale = 1 - scrollFactor * 0.4;
      const orbR = Math.min(w, h) * 0.18 * orbScale;
      const pulse = 1 + Math.sin(t * 1.2) * 0.04;
      const r = orbR * pulse;

      // Outer halo
      const halo = ctx.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 3.5);
      halo.addColorStop(0, "rgba(124, 117, 255, 0.5)");
      halo.addColorStop(0.3, "rgba(79, 70, 229, 0.2)");
      halo.addColorStop(1, "rgba(10, 10, 26, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Orb core with morph distortion
      ctx.beginPath();
      const segs = 64;
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        const distort =
          1 +
          Math.sin(a * 3 + t * 1.5) * 0.08 +
          Math.cos(a * 5 - t * 0.8) * 0.06;
        const rr = r * distort;
        const px = cx + Math.cos(a) * rr;
        const py = cy + Math.sin(a) * rr;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      const core = ctx.createRadialGradient(
        cx - r * 0.3,
        cy - r * 0.3,
        r * 0.1,
        cx,
        cy,
        r * 1.2,
      );
      core.addColorStop(0, "rgba(180, 175, 255, 0.95)");
      core.addColorStop(0.4, "rgba(79, 70, 229, 0.85)");
      core.addColorStop(1, "rgba(30, 30, 90, 0.6)");
      ctx.fillStyle = core;
      ctx.fill();

      // Inner highlight
      ctx.beginPath();
      ctx.arc(cx - r * 0.35, cy - r * 0.35, r * 0.3, 0, Math.PI * 2);
      const hl = ctx.createRadialGradient(
        cx - r * 0.35,
        cy - r * 0.35,
        0,
        cx - r * 0.35,
        cy - r * 0.35,
        r * 0.3,
      );
      hl.addColorStop(0, "rgba(255, 255, 255, 0.4)");
      hl.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = hl;
      ctx.fill();

      // Particles (orbiting)
      particles.forEach((p) => {
        const ang = t * p.s * 0.3;
        const ca = Math.cos(ang);
        const sa = Math.sin(ang);
        const x3 = p.x * ca - p.z * sa;
        const z3 = p.x * sa + p.z * ca;
        const persp = 1 / (2 - z3);
        const px = cx + x3 * Math.min(w, h) * 0.6 * persp;
        const py = cy + p.y * Math.min(w, h) * 0.6 * persp;
        const size = p.r * persp * 1.6;
        const alpha = 0.3 + persp * 0.5;
        ctx.fillStyle = `rgba(180, 175, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
