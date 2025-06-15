import React from "react";
import { cn } from "@/lib/utils";

export function OrbitingCircles({
  className,
  children,
  radius = 100,
  iconSize = 30,
  duration = 20,
  speed = 1,
  reverse = false,
  path = true,
  ...props
}) {
  const total = React.Children.count(children);
  const orbitSpeed = duration / speed;

  return (
    <div className={cn("absolute inset-0", className)} {...props}>
      {path && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
            className="rounded-full border  dark:border-white/20"
          />
        </div>
      )}

      <div
        className={cn(
          "absolute left-1/2 top-1/2",
          reverse ? "animate-orbit-reverse" : "animate-orbit"
        )}
        style={{
          width: 0,
          height: 0,
          animationDuration: `${orbitSpeed}s`,
        }}
      >
{
  React.Children.map(children, (child, index) => {
    const angle = (2 * Math.PI * index) / total
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return (
      <div
        key={index}
        className="absolute flex items-center justify-center"
        style={{
          transform: `translate(${x - iconSize / 2}px, ${y - iconSize / 2}px)`,
          width: `${iconSize}px`,
          height: `${iconSize}px`
        }}
      >
        {child}
      </div>
    )
  })
}

      </div>
    </div>
  );
}
