<script setup lang="ts">
import { Power3, gsap } from 'gsap'
import { onMounted } from 'vue'
import ButtonPrimary from '~/components/ButtonPrimary.vue'

// When the page is rendered
onMounted(() => {
  const h1 = document.querySelector<HTMLHeadingElement>('.srun-download > h1')!
  const button = document.querySelector<HTMLHeadingElement>('.srun-download > .btnn')!
  const h3 = document.querySelector<HTMLHeadingElement>('.srun-download > h3')!

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.srun-download',
      end: 'bottom center',
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
    .from(button, {
      autoAlpha: 0,
      scale: 0,
      stagger: 0.2,
    })
    .from(h3, {
      autoAlpha: 0,
      y: 25,
      stagger: 0.2,
    })
})

</script>

<template>
  <div class="srun-download flex flex-col py-7.5em pt-28em justify-center items-center relative">
    <h1 class="text-center max-w-720px">
      And
      <span class="font-light">lastly</span>
    </h1>
    <ButtonPrimary text="Let's get started" class="transform scale-200 mt-7.5em mb-2.265em btnn" />
    <h3 class="max-w-420px text-center text-gray-500 mx-auto z-1">
      Available for Android and IOS
    </h3>
  </div>
</template>
