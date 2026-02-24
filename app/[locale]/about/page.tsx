'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { Briefcase, User, Globe, GraduationCap, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';

const DEFAULT_COLOR = '#ffffff';

const hexToRgb = (hex: string): number[] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const getAnchorAndDir = (origin: string, w: number, h: number) => {
  const outside = 0.2;
  switch (origin) {
    case 'top-left':
      return { anchor: [0, -outside * h], dir: [0, 1] };
    case 'top-right':
      return { anchor: [w, -outside * h], dir: [0, 1] };
    case 'left':
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case 'right':
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case 'bottom-left':
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-center':
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-right':
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default: // "top-center"
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

interface LightRaysProps {
  raysOrigin?: string;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniformsRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationIdRef = useRef<number | null>(null);
  const meshRef = useRef<any>(null);
  const cleanupFunctionRef = useRef<(() => void) | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    if (cleanupFunctionRef.current) {
      cleanupFunctionRef.current();
      cleanupFunctionRef.current = null;
    }

    const initializeWebGL = async () => {
      if (!containerRef.current) return;

      await new Promise(resolve => setTimeout(resolve, 10));

      if (!containerRef.current) return;

      const renderer = new Renderer({
        dpr: Math.min(window.devicePixelRatio, 2),
        alpha: true
      });
      rendererRef.current = renderer;

      const gl = renderer.gl;
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';

      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(gl.canvas);

      const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

      const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  
  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`;

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },

        rayPos: { value: [0, 0] },
        rayDir: { value: [0, 1] },

        raysColor: { value: hexToRgb(raysColor) },
        raysSpeed: { value: raysSpeed },
        lightSpread: { value: lightSpread },
        rayLength: { value: rayLength },
        pulsating: { value: pulsating ? 1.0 : 0.0 },
        fadeDistance: { value: fadeDistance },
        saturation: { value: saturation },
        mousePos: { value: [0.5, 0.5] },
        mouseInfluence: { value: mouseInfluence },
        noiseAmount: { value: noiseAmount },
        distortion: { value: distortion }
      };
      uniformsRef.current = uniforms;

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms
      });
      const mesh = new Mesh(gl, { geometry, program });
      meshRef.current = mesh;

      const updatePlacement = () => {
        if (!containerRef.current || !renderer) return;

        renderer.dpr = Math.min(window.devicePixelRatio, 2);

        const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
        renderer.setSize(wCSS, hCSS);

        const dpr = renderer.dpr;
        const w = wCSS * dpr;
        const h = hCSS * dpr;

        uniforms.iResolution.value = [w, h];

        const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
        uniforms.rayPos.value = anchor;
        uniforms.rayDir.value = dir;
      };

      const loop = (t: number) => {
        if (!rendererRef.current || !uniformsRef.current || !meshRef.current) {
          return;
        }

        uniforms.iTime.value = t * 0.001;

        if (followMouse && mouseInfluence > 0.0) {
          const smoothing = 0.92;

          smoothMouseRef.current.x = smoothMouseRef.current.x * smoothing + mouseRef.current.x * (1 - smoothing);
          smoothMouseRef.current.y = smoothMouseRef.current.y * smoothing + mouseRef.current.y * (1 - smoothing);

          uniforms.mousePos.value = [smoothMouseRef.current.x, smoothMouseRef.current.y];
        }

        try {
          renderer.render({ scene: mesh });
          animationIdRef.current = requestAnimationFrame(loop);
        } catch (error) {
          console.warn('WebGL rendering error:', error);
          return;
        }
      };

      window.addEventListener('resize', updatePlacement);
      updatePlacement();
      animationIdRef.current = requestAnimationFrame(loop);

      cleanupFunctionRef.current = () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }

        window.removeEventListener('resize', updatePlacement);

        if (renderer) {
          try {
            const canvas = renderer.gl.canvas;
            const loseContextExt = renderer.gl.getExtension('WEBGL_lose_context');
            if (loseContextExt) {
              loseContextExt.loseContext();
            }

            if (canvas && canvas.parentNode) {
              canvas.parentNode.removeChild(canvas);
            }
          } catch (error) {
            console.warn('Error during WebGL cleanup:', error);
          }
        }

        rendererRef.current = null;
        uniformsRef.current = null;
        meshRef.current = null;
      };
    };

    initializeWebGL();

    return () => {
      if (cleanupFunctionRef.current) {
        cleanupFunctionRef.current();
        cleanupFunctionRef.current = null;
      }
    };
  }, [
    isVisible,
    raysOrigin,
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    followMouse,
    mouseInfluence,
    noiseAmount,
    distortion
  ]);

  useEffect(() => {
    if (!uniformsRef.current || !containerRef.current || !rendererRef.current) return;

    const u = uniformsRef.current;
    const renderer = rendererRef.current;

    u.raysColor.value = hexToRgb(raysColor);
    u.raysSpeed.value = raysSpeed;
    u.lightSpread.value = lightSpread;
    u.rayLength.value = rayLength;
    u.pulsating.value = pulsating ? 1.0 : 0.0;
    u.fadeDistance.value = fadeDistance;
    u.saturation.value = saturation;
    u.mouseInfluence.value = mouseInfluence;
    u.noiseAmount.value = noiseAmount;
    u.distortion.value = distortion;

    const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
    const dpr = renderer.dpr;
    const { anchor, dir } = getAnchorAndDir(raysOrigin, wCSS * dpr, hCSS * dpr);
    u.rayPos.value = anchor;
    u.rayDir.value = dir;
  }, [
    raysColor,
    raysSpeed,
    lightSpread,
    raysOrigin,
    rayLength,
    pulsating,
    fadeDistance,
    saturation,
    mouseInfluence,
    noiseAmount,
    distortion
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !rendererRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [followMouse]);

  return <div ref={containerRef} className={`light-rays-container ${className}`.trim()} />;
};

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const lightRaysCSS = `
  .light-rays-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }
`;

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Animations keyframes */}
            <style>{fadeInUp + lightRaysCSS}</style>

            {/* Hero Section - Card Style */}
            <section className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto" style={{
                backgroundImage: 'url(/bg-new-in-sweden.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '289px',
                maxWidth: '1500px',
                width: '100%',
                margin: '160px auto 0'
            }}>
                {/* Overlay - Dark with #141A21 at 88% opacity */}
                <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>

                <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
                        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                            {/* Left Content */}
                            <div>
                                <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                                    About Us
                                </h1>
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-300 leading-[1.5] mb-2 font-medium">
                                    Your Trusted Nordic Relocation Partner Since 2015
                                </p>
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-12 font-normal">
                                    We transform complex relocations into seamless journeys. From visa processing to finding your perfect home, from business setup to cultural integration—we handle every detail so you can focus on your new beginning in the Nordic region.
                                </p>
                            </div>

                            {/* Right - Illustration */}
                            <div className="relative w-full flex justify-center lg:justify-end">
                                <Image
                                    src="/service-illustration.svg"
                                    alt="About Sweden Relocators illustration"
                                    width={300}
                                    height={250}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-16 sm:py-20 lg:py-28 mt-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left - Content Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] order-2 lg:order-1"
                        >
                            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
                                Who We Are
                            </p>
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-6">
                                Your Trusted <span className="text-blue-600">Relocation</span> Partner
                            </h2>
                            <div className="space-y-5 text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed">
                                <p>
                                    Founded in 2015, Sweden Relocators AB specializes in providing tailored relocation and mobility solutions for individuals and organizations moving to Nordic countries. We simplify the process of settling into a new country by offering comprehensive services that cater to both employers and employees.
                                </p>
                                <p>
                                    Whether you're relocating for work, education, or investment opportunities, we ensure a seamless transition with services like Destination Assistance, Global Mobility Solutions, Immigration Support, Move Management, and Property Management.
                                </p>
                                <p>
                                    Our web- and app-based portal provides an innovative solution for managing relocations. Employers can oversee the progress of employee transfers, while employees can track applications, explore housing and schools, and manage expenses efficiently—all in one place.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 px-8 py-3.5 bg-[#1a2332] text-white text-[15px] font-semibold rounded-lg hover:bg-[#2a3442] transition-colors duration-300 shadow-md"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Right - Illustration with Decorative Elements */}
                        <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2 h-[500px]">
                            {/* Orange decorative shape - bottom left */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-tl-[80px] rounded-br-[80px] -z-10"
                                style={{ transform: 'rotate(-15deg)' }}
                            />

                            {/* Orange decorative shape - top right */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500 to-orange-700 rounded-tl-[60px] rounded-br-[60px] -z-10"
                                style={{ transform: 'rotate(15deg)' }}
                            />

                            {/* Floating Stats Card - Top Left */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-8 left-4 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-8deg)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl font-bold text-blue-600">2015</div>
                                    <div className="text-xs text-gray-600 leading-tight">Founded<br/>Since</div>
                                </div>
                            </motion.div>

                            {/* Floating Trust Badge - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-24 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(5deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-xs font-semibold text-gray-700">Trusted</div>
                                </div>
                            </motion.div>

                            {/* Floating Services Badge - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                className="absolute top-12 right-8 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full shadow-xl z-10"
                            >
                                <Globe size={24} className="text-white" />
                            </motion.div>

                            {/* Main Illustration - No Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/c1.svg"
                                    alt="Sweden Relocators services illustration"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solutions Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    
                    {/* Employer Solutions */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-24">
                        {/* Left - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full flex items-center justify-center lg:justify-center order-2 lg:order-1"
                        >
                            {/* Yellow decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Blue decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-8deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <Briefcase size={20} className="text-blue-600" />
                                    <div className="text-sm font-bold text-gray-800">Global Mobility</div>
                                </div>
                            </motion.div>

                            {/* Floating Check Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 left-12 bg-white p-3 rounded-xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(5deg)' }}
                            >
                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>

                            {/* Main Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/employer-solution.svg"
                                    alt="Employer Solutions"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-4">
                                Employer Solutions
                            </h2>
                            <p className="text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed mb-6">
                                We assist employers in managing the complexities of relocating their workforce. Our comprehensive services ensure smooth transitions for your entire team.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Global Mobility Program Design: Tailored strategies for organization-wide compliance.",
                                    "Visa and Work Permit Assistance: Expert support for streamlined immigration processes.",
                                    "Move Coordination: Handling logistics, household goods shipment, and housing for employees and their families.",
                                    "Cultural Integration Programs: Workshops and training to help employees adapt smoothly."
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-[#5f6c7b]"
                                    >
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Employee Solutions */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-24">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-4">
                                Employee Solutions
                            </h2>
                            <p className="text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed mb-6">
                                For individuals and their families, we provide end-to-end support to ease their transition into their new Nordic home.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Immigration Services: Assistance with visa applications and residence permits.",
                                    "Housing and School Search: Access to housing options and schools based on lifestyle, budget, and preferences.",
                                    "Orientation and Settling-In Support: Language courses and cultural orientation training.",
                                    "Digital Relocation Tools: Real-time updates and financial management through our app and portal."
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-[#5f6c7b]"
                                    >
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full flex items-center justify-center lg:justify-center order-1 lg:order-2"
                        >
                            {/* Pink decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Green decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Home Icon Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-12 right-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(8deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <User size={20} className="text-blue-600" />
                                    <div className="text-sm font-bold text-gray-800">Personal Support</div>
                                </div>
                            </motion.div>

                            {/* Floating Check Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 right-12 bg-white p-3 rounded-xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-5deg)' }}
                            >
                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>

                            {/* Main Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/employee-solution.svg"
                                    alt="Employee Solutions"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Nordic Relocators - Denmark */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                        {/* Left - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full flex items-center justify-center lg:justify-center order-2 lg:order-1"
                        >
                            {/* Purple decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Orange decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Denmark Flag Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4}}
                                className="absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-8deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <Globe size={20} className="text-blue-600" />
                                    <div className="text-sm font-bold text-gray-800">Nordic Expert</div>
                                </div>
                            </motion.div>

                            {/* Floating Check Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 left-12 bg-white p-3 rounded-xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(5deg)' }}
                            >
                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>

                            {/* Main Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/relocators-denmark.svg"
                                    alt="Nordic Relocators Denmark"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-4">
                                Nordic Relocators - Denmark
                            </h2>
                            <div className="space-y-5 text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed mb-6">
                                <p>
                                    Expanding our expertise across the Nordic region, Nordic Relocators offers specialized services for moving to Denmark. Whether you're relocating an entire team or a single employee, we provide tailored solutions to address Denmark's specific requirements.
                                </p>
                                <p>
                                    From visa applications to housing and cultural integration, our services are designed to ensure a successful move. At Sweden Relocators AB and Nordic Relocators, we're committed to making every relocation efficient, stress-free, and rewarding, helping both employers and employees thrive in their new Nordic environment.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Specializations Section */}
            <section className="pb-16 sm:pb-20 lg:pb-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    {/* Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="bg-blue-50 rounded-lg border-l-4 border-blue-500 px-4 sm:px-5 py-3 sm:py-4">
                            <div className="w-full text-center px-4 sm:px-6 lg:px-8 xl:px-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
                                    Specializations
                                </h2>
                                <p className="text-base sm:text-lg text-blue-600 font-semibold">
                                    What we do best
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 overflow-visible">
                        {/* Student Admission Services */}
                        <motion.div
                            initial={{ opacity: 1, x: 190, y: -12, rotate: -8, scale: 0.94 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                            transition={{ 
                                duration: 1.2, 
                                delay: 0.25, 
                                ease: [0.16, 1, 0.3, 1],
                                type: "spring",
                                stiffness: 60,
                                damping: 20
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white rounded-2xl border border-gray-100 border-b-4 border-b-blue-500 min-h-[360px] lg:min-h-[390px] xl:min-h-[430px] shadow-[0_10px_28px_rgba(15,23,42,0.08),0_4px_10px_rgba(59,130,246,0.10)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.14),0_8px_16px_rgba(59,130,246,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                <div className="w-full h-40 sm:h-44 md:h-48 bg-[#FAFBFC] flex items-center justify-center rounded-t-2xl relative" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
                                    <LightRays
                                        raysOrigin="top-center"
                                        raysColor="#3b82f6"
                                        raysSpeed={1}
                                        lightSpread={0.4}
                                        rayLength={3}
                                        followMouse={true}
                                        mouseInfluence={0.12}
                                        noiseAmount={0}
                                        distortion={0}
                                        pulsating={false}
                                        fadeDistance={1}
                                        saturation={1}
                                    />
                                    <div className="flex items-center justify-center relative z-10">
                                        <Image
                                            src="/s4.svg"
                                            alt="Student Admission Services"
                                            width={140}
                                            height={140}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-8 xl:p-5 2xl:p-6">
                                    <h3 className="text-xl xl:text-lg 2xl:text-xl font-bold text-gray-900 mb-3 leading-tight">Student Admission Services</h3>
                                <p className="text-gray-600 text-[15px] xl:text-[14px] 2xl:text-[15px] leading-relaxed break-words">
                                    Assistance in choosing the right degree program and residence permit processing for international students.
                                </p>
                            </div>
                            </div>
                        </motion.div>

                        {/* Work & Business */}
                        <motion.div
                            initial={{ opacity: 1, x: 70, y: -28, rotate: -3, scale: 0.98 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                            transition={{ 
                                duration: 1.2, 
                                delay: 0.35, 
                                ease: [0.16, 1, 0.3, 1],
                                type: "spring",
                                stiffness: 60,
                                damping: 20
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white rounded-2xl border border-gray-100 border-b-4 border-b-blue-500 min-h-[360px] lg:min-h-[390px] xl:min-h-[430px] shadow-[0_10px_28px_rgba(15,23,42,0.08),0_4px_10px_rgba(59,130,246,0.10)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.14),0_8px_16px_rgba(59,130,246,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                <div className="w-full h-40 sm:h-44 md:h-48 bg-[#FAFBFC] flex items-center justify-center rounded-t-2xl relative" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
                                    <LightRays
                                        raysOrigin="top-center"
                                        raysColor="#3b82f6"
                                        raysSpeed={1}
                                        lightSpread={0.4}
                                        rayLength={3}
                                        followMouse={true}
                                        mouseInfluence={0.12}
                                        noiseAmount={0}
                                        distortion={0}
                                        pulsating={false}
                                        fadeDistance={1}
                                        saturation={1}
                                    />
                                    <div className="flex items-center justify-center relative z-10">
                                        <Image
                                            src="/s3.svg"
                                            alt="Work & Business"
                                            width={140}
                                            height={140}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-8 xl:p-5 2xl:p-6">
                                    <h3 className="text-xl xl:text-lg 2xl:text-xl font-bold text-gray-900 mb-3 leading-tight">Work & Business</h3>
                                <p className="text-gray-600 text-[15px] xl:text-[14px] 2xl:text-[15px] leading-relaxed break-words">
                                    Assistance in registering a business, buying a new business, and preparing work permit applications for employees and employers.
                                </p>
                            </div>
                            </div>
                        </motion.div>

                        {/* Family Relocation */}
                        <motion.div
                            initial={{ opacity: 1, x: -70, y: -28, rotate: 3, scale: 0.98 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                            transition={{ 
                                duration: 1.2, 
                                delay: 0.45, 
                                ease: [0.16, 1, 0.3, 1],
                                type: "spring",
                                stiffness: 60,
                                damping: 20
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white rounded-2xl border border-gray-100 border-b-4 border-b-blue-500 min-h-[360px] lg:min-h-[390px] xl:min-h-[430px] shadow-[0_10px_28px_rgba(15,23,42,0.08),0_4px_10px_rgba(59,130,246,0.10)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.14),0_8px_16px_rgba(59,130,246,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                <div className="w-full h-40 sm:h-44 md:h-48 bg-[#FAFBFC] flex items-center justify-center rounded-t-2xl relative" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
                                    <LightRays
                                        raysOrigin="top-center"
                                        raysColor="#3b82f6"
                                        raysSpeed={1}
                                        lightSpread={0.4}
                                        rayLength={3}
                                        followMouse={true}
                                        mouseInfluence={0.12}
                                        noiseAmount={0}
                                        distortion={0}
                                        pulsating={false}
                                        fadeDistance={1}
                                        saturation={1}
                                    />
                                    <div className="flex items-center justify-center relative z-10">
                                        <Image
                                            src="/s6.svg"
                                            alt="Family Relocation"
                                            width={140}
                                            height={140}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-8 xl:p-5 2xl:p-6">
                                    <h3 className="text-xl xl:text-lg 2xl:text-xl font-bold text-gray-900 mb-3 leading-tight">Family Relocation</h3>
                                <p className="text-gray-600 text-[15px] xl:text-[14px] 2xl:text-[15px] leading-relaxed break-words">
                                    We provide assistance in your family visa processing including your dependent parents and other family members.
                                </p>
                            </div>
                            </div>
                         </motion.div>

                        {/* Investment Solutions */}
                        <motion.div
                            initial={{ opacity: 1, x: -190, y: -12, rotate: 8, scale: 0.94 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                            transition={{ 
                                duration: 1.2, 
                                delay: 0.55, 
                                ease: [0.16, 1, 0.3, 1],
                                type: "spring",
                                stiffness: 60,
                                damping: 20
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-white rounded-2xl border border-gray-100 border-b-4 border-b-blue-500 min-h-[360px] lg:min-h-[390px] xl:min-h-[430px] shadow-[0_10px_28px_rgba(15,23,42,0.08),0_4px_10px_rgba(59,130,246,0.10)] hover:shadow-[0_18px_38px_rgba(15,23,42,0.14),0_8px_16px_rgba(59,130,246,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                <div className="w-full h-40 sm:h-44 md:h-48 bg-[#FAFBFC] flex items-center justify-center rounded-t-2xl relative" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
                                    <LightRays
                                        raysOrigin="top-center"
                                        raysColor="#3b82f6"
                                        raysSpeed={1}
                                        lightSpread={0.4}
                                        rayLength={3}
                                        followMouse={true}
                                        mouseInfluence={0.12}
                                        noiseAmount={0}
                                        distortion={0}
                                        pulsating={false}
                                        fadeDistance={1}
                                        saturation={1}
                                    />
                                    <div className="flex items-center justify-center relative z-10">
                                        <Image
                                            src="/s7.svg"
                                            alt="Investment Solutions"
                                            width={140}
                                            height={140}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-8 xl:p-5 2xl:p-6">
                                    <h3 className="text-xl xl:text-lg 2xl:text-xl font-bold text-gray-900 mb-3 leading-tight">Investment Solutions</h3>
                                <p className="text-gray-600 text-[15px] xl:text-[14px] 2xl:text-[15px] leading-relaxed break-words">
                                    There are various opportunities for business ventures, look for the best opportunity to build your future.
                                </p>
                            </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
