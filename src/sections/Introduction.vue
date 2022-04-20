<script setup lang="ts">
import { Power1, gsap } from 'gsap'
import { onMounted } from 'vue'
import ButtonRegular from '~/components/ButtonRegular.vue'

// TODO: Animations and background video

// When the page is rendered
onMounted(() => {
  const triggerClass = document.querySelectorAll<HTMLDivElement>('.introduction-section')!

  // Animate From
  Array.prototype.forEach.call(triggerClass, (el: HTMLElement, i: number) => {
    const h1 = gsap.utils.toArray('h1', el)
    const button = document.querySelector<HTMLAnchorElement>('#promo-btn')!

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        end: () => `+=${el.offsetHeight}`,
        scrub: 1,
      },
    })

    tl.from(h1, {
      color: 'rgb(0, 0, 0)',
      stagger: 0.2,
      ease: Power1.easeIn,
    })
  })
})

</script>

<template>
  <div id="placeholder-1" class="flex flex-col py-4em px-20em bg-black bg-opacity-40 relative overflow-hidden">
    <video preload="true" autoplay loop muted class="absolute top-0 left-0 w-screen -z-1">
      <source src="/assets/imgs/pexels-jack-sparrow-5977053.mp4" type="video/mp4">
    </video>
    <div class="introduction-section max-w-1920px mx-auto">
      <h1 style="color: white;">
        Easy-to-use,
      </h1>
      <h1 style="color: white;">
        resource-efficient, yet
      </h1>
      <h1 style="color: white;">
        powerful and flawless
      </h1>
      <h1 style="color: white;">
        app for enhancing your
      </h1>
      <h1 style="color: white;">
        sleeping habits
      </h1>
      <ButtonRegular id="promo-btn" text="Watch promo" :color="false" :icon="true" class="pt-4em pl-0 text-white" />
    </div>
  </div>
</template>
