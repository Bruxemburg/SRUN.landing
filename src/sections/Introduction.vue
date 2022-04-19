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
      color: 'rgb(209, 213, 219)',
      stagger: 0.2,
      ease: Power1.easeIn,
    })
  })
})

</script>

<template>
  <div class="flex flex-col py-4em px-20em bg-gray-400">
    <div class="introduction-section max-w-1920px mx-auto">
      <h1>Easy-to-use,</h1>
      <h1>resource-efficient, yet</h1>
      <h1>powerful and flawless</h1>
      <h1>app for enhancing your </h1>
      <h1>sleeping habits</h1>
      <ButtonRegular id="promo-btn" text="Watch promo" :color="true" :icon="true" class="pt-4em pl-0" />
    </div>
  </div>
</template>
