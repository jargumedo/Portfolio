"use client";

import { useEffect, useRef, ElementType, ComponentPropsWithoutRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = el.getBoundingClientRect();
    if (prefersReduced || rect.top < window.innerHeight - 40) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  stagger?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "stagger">;

export function Reveal<T extends ElementType = "div">({
  as,
  className = "",
  stagger = false,
  children,
  ...rest
}: RevealProps<T>) {
  const ref = useReveal();
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      ref={ref}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
