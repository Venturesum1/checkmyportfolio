'use client'

import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
      <section className="relative min-h-screen w-full overflow-hidden bg-blue-800">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-[2]" />

      {/* Mobile 3D Scene - Behind content on mobile */}
      <div className="absolute inset-0 lg:hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="h-full w-full"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="!h-full !w-full object-cover scale-[1.8] sm:scale-150 translate-x-[20%] translate-y-[15%] sm:translate-y-[10%]"
          />
        </motion.div>
        {/* Extra overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center px-5 sm:px-8 py-24 sm:py-28 lg:px-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
             <span className="text-gradient">Hi, I am </span>
                
              <span className="text-gradient">Creative</span>
              <br />
              <span className="text-foreground">Developer Soumyasis </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              I craft immersive digital experiences that blend creativity with cutting-edge technology. 
              Specializing in interactive 3D, motion design, and modern web development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button variant="default" size="default" className="group text-sm sm:text-base" asChild>
                <Link to="/about">
                  About Me
                  <ArrowDown className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </Button>
              <a href='#combinedsedction'>
              <Button 
                variant="outline" 
                size="default" 
                className="text-sm sm:text-base"
                onClick={() => document.getElementById('combined-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 sm:mt-12 flex items-center gap-3 sm:gap-4"
            >
              <a
                href="https://github.com/Venturesum1"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/soumyasis-d-714609224/"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="soumyasisdas8@gmail.com"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - 3D Scene (Desktop only) */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="h-full w-full"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="!h-full !w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

    </section>
  )
}