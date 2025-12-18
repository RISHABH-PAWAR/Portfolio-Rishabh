"use client";

import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------------------------------- */
/* Canvas Reveal Effect Wrapper        */
/* ---------------------------------- */

export function CanvasRevealEffect({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) {
  return (
    <div className={cn("relative h-full w-full bg-white", containerClassName)}>
      <DotMatrix
        colors={colors}
        dotSize={dotSize}
        opacities={opacities}
        shader={`
          float animation_speed_factor = ${animationSpeed.toFixed(1)};
          float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2)
            * 0.01 + (random(st2) * 0.15);
          opacity *= step(intro_offset, u_time * animation_speed_factor);
          opacity *= clamp(
            (1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25,
            1.0,
            1.25
          );
        `}
        center={["x", "y"]}
      />

      {showGradient && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Dot Matrix                          */
/* ---------------------------------- */

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

function DotMatrix({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}: DotMatrixProps) {
  const uniforms = useMemo(() => {
    const palette =
      colors.length === 1
        ? Array(6).fill(colors[0])
        : colors.length === 2
        ? [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]]
        : [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];

    return {
      u_colors: {
        value: palette.map(([r, g, b]) => [r / 255, g / 255, b / 255]),
        type: "uniform3fv",
      },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Shader
      uniforms={uniforms}
      source={`
        precision mediump float;
        in vec2 fragCoord;

        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;

        out vec4 fragColor;

        float PHI = 1.61803398875;

        float random(vec2 xy) {
          return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }

        void main() {
          vec2 st = fragCoord.xy;

          ${
            center.includes("x")
              ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));"
              : ""
          }
          ${
            center.includes("y")
              ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));"
              : ""
          }

          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));

          float opacity = step(0.0, st.x) * step(0.0, st.y);

          float freq = 5.0;
          float offset = random(st2);
          float rand = random(st2 * floor((u_time / freq) + offset + freq) + 1.0);

          opacity *= u_opacities[int(rand * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

          vec3 color = u_colors[int(offset * 6.0)];

          ${shader}

          fragColor = vec4(color * opacity, opacity);
        }
      `}
    />
  );
}

/* ---------------------------------- */
/* Shader Core                         */
/* ---------------------------------- */

function Shader({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}) {
  return (
    <Canvas className="absolute inset-0 h-full w-full" dpr={[1, 2]}>
      <ShaderPlane source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
}

type Uniforms = Record<
  string,
  { value: number | number[] | number[][]; type: string }
>;

function ShaderPlane({
  source,
  uniforms,
  maxFps,
}: {
  source: string;
  uniforms: Uniforms;
  maxFps: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const lastFrame = useRef(0);

  const material = useMemo(() => {
    const prepared: any = {};

    Object.entries(uniforms).forEach(([key, u]) => {
      if (u.type === "uniform1f") prepared[key] = { value: u.value };
      if (u.type === "uniform1fv") prepared[key] = { value: u.value };
      if (u.type === "uniform3fv")
        prepared[key] = {
          value: (u.value as number[][]).map(
            (v) => new THREE.Vector3(v[0], v[1], v[2])
          ),
        };
    });

    prepared.u_time = { value: 0 };
    prepared.u_resolution = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
    };

    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        out vec2 fragCoord;
        uniform vec2 u_resolution;

        void main() {
          gl_Position = vec4(position, 1.0);
          fragCoord = (position.xy + 1.0) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: prepared,
      glslVersion: THREE.GLSL3,
      transparent: true,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [size.width, size.height, source, uniforms]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const now = clock.getElapsedTime();
    if (now - lastFrame.current < 1 / maxFps) return;

    lastFrame.current = now;
    (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value =
      now;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
