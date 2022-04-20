<script setup lang="ts">
import { Power3, gsap } from 'gsap'
import { onMounted } from 'vue'

// When the page is rendered
onMounted(() => {
  // const triggerClass = document.querySelectorAll<HTMLDivElement>('.srun-management > *')!
  const h1 = document.querySelector<HTMLHeadingElement>('.srun-management > h1')!
  const phoneImage = document.querySelector<HTMLHeadingElement>('.srun-management > img#phone1')!
  const sortBarImage = document.querySelector<HTMLHeadingElement>('.srun-management > img#phone1-1')!
  const h3 = document.querySelector<HTMLHeadingElement>('#text-1')!

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.first',
      end: 'bottom center',
      pin: '.srun-management',
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
      y: 25,
      stagger: 0.5,
    })
    .from(sortBarImage, {
      autoAlpha: 0,
      y: 20,
      stagger: 0.2,
    })

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.second',
      start: 'top center',
      end: 'bottom center',
      pin: '.srun-management',
      scrub: 1,
    },
    defaults: {
      ease: Power3.easeIn,
    },
  })

  tl2
    .to(sortBarImage, {
      scale: 1.75,
      top: '50%',
      stagger: 0.5,
    })
    .to(phoneImage, {
      y: 300,
      stagger: 0.2,
    })
    .to(phoneImage, {
      opacity: 0,
      display: 'none',
    })

  const tl3 = gsap.timeline({
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

  tl3.from(h3, {
    autoAlpha: 0,
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    stagger: 0.2,
  })
})

</script>

<template>
  <div class="srun-management flex flex-col py-7.5em justify-center items-center relative">
    <div class="first absolute top-0 left-0 h-150vh" />
    <h1 class="text-center max-w-720px h-screen">
      Manage your
      <span class="font-light">alarms</span>
      with ease
    </h1>
    <img id="phone1" class="phone-img" src="/assets/imgs/1.png" alt="Manage your alarms with ease">
    <img id="phone1-1" src="/assets/imgs/2.png" alt="Simply sort the alarms">
    <div class="second absolute top-150vh left-0 h-200vh" />
  </div>
  <div class="h-250vh" />
  <h3 id="text-1" class="max-w-420px text-center text-gray-500 pt-7.5em mx-auto z-1">
    Since picking the right alarm can be annoying and challenging, we take care of everything instead of you
  </h3>
</template>
