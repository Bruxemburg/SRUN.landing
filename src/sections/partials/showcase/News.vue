<script setup lang="ts">
import { Power3, gsap } from 'gsap'
import { onMounted } from 'vue'

// When the page is rendered
onMounted(() => {
  const h1 = document.querySelector<HTMLHeadingElement>('.srun-news > h1')!
  const phoneImage = document.querySelector<HTMLHeadingElement>('.srun-news > img')!
  const h3 = document.querySelector<HTMLHeadingElement>('#text-3')!

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.fourth',
      end: 'bottom center',
      pin: '.srun-news',
      scrub: 1,
    },
    defaults: {
      ease: Power3.easeIn,
    },
  })

  tl
    .from(h1, {
      autoAlpha: 0,
      y: 25,
      stagger: 0.2,
    })
    .from(phoneImage, {
      autoAlpha: 0,
      stagger: 0.2,
    })

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: h3,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
    },
    defaults: {
      ease: Power3.easeIn,
    },
  })

  tl2.from(h3, {
    autoAlpha: 0,
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    stagger: 0.2,
  })
})
</script>

<template>
  <div class="srun-news flex flex-col py-7.5em justify-center items-center relative">
    <div class="fourth absolute top-0 left-0 h-100vh" />
    <h1 class="text-center max-w-720px h-screen">
      Get
      <span class="font-light">tips and tricks</span>
      from professionals
    </h1>
    <img height="10em" src="/assets/imgs/4.png" alt="Tips and tricks" class="absolute top-1/3 left-1/2 transform -translate-x-1/2">
    <h3 id="text-3" class="max-w-420px text-center text-gray-500 pt-7.5em mx-auto z-1">
      Find out how to reduce your sleepiness and be more effective
    </h3>
  </div>
</template>
