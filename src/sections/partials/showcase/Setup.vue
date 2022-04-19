<script setup lang="ts">
import { Power3, gsap } from 'gsap'
import { onMounted } from 'vue'

// When the page is rendered
onMounted(() => {
  const h1 = document.querySelector<HTMLHeadingElement>('.srun-setup > h1')!
  const phoneImage = document.querySelector<HTMLHeadingElement>('.srun-setup > img')!
  const h3 = document.querySelector<HTMLHeadingElement>('#text-2')!

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.third',
      end: 'bottom center',
      pin: '.srun-setup',
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
      scale: 1.75,
      stagger: 0.2,
    })
    .to(phoneImage, {
      autoAlpha: 0,
      y: 50,
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

// TODO: VIKING: https://unsplash.com/photos/WKjn8Q-b2Ak

</script>

<template>
  <div class="srun-setup flex flex-col py-7.5em justify-center items-center relative">
    <div class="third absolute top-0 left-0 h-200vh" />
    <h1 class="text-center max-w-720px">
      Set up the
      <span class="font-light">alarm</span>
      in just a few clicks
    </h1>
    <img id="phone2" class="phone-img" src="/assets/imgs/3.png" alt="Set up the alarm in just a few clicks">
  </div>
  <div class="h-200vh" />
  <h3 id="text-2" class="max-w-420px text-center text-gray-500 pt-7.5em mx-auto z-1">
    Add alarm, search, edit, delete, repeat.
  </h3>
</template>
