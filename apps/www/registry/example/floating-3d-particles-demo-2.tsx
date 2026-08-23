"use client"

import { Floating3DParticles } from "@/registry/magicui/floating-3d-particles"

export default function Component() {
  return (
    <div className="bg-background relative h-[500px] w-full overflow-hidden rounded-lg border">
      <Floating3DParticles depth={0.8} quantity={1000} />
    </div>
  )
}
