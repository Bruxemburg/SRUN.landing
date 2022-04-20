<script setup lang="ts">
import SimpleCard from '~/components/SimpleCard.vue'
// px-8.75em
</script>

<template>
  <div class="w-full flex flex-col items-center justify-end py-7.5em">
    <h1 class="text-center max-w-720px">
      What <span class="font-light">we are</span> trying to accomplish?
    </h1>
    <div id="img-place-2" class="w-full bg-gray-100 my-4em">
      <img src="" alt="">
    </div>
    <div class="flex flex-col px-8.75em max-w-1920px mx-auto">
      <div class="flex flex-row px-4em items-baseline">
        <h2 class="w-1/3">
          Our mission
        </h2>
        <h3 class="w-2/3">
          We are committed to making you happier by helping you to improve your sleep by analyzing your sleeping patterns and habits as well as by guiding you in getting somewhere in time at all times.
        </h3>
      </div>
      <div class="flex flex-row-reverse px-4em items-baseline pt-4em">
        <h2 class="w-1/3">
          The problems
        </h2>
        <h3 class="w-2/3">
          Fancy that you've woke up in 5AM and now you're commuting to work by train. It's dark and cold outside but inside the train is warm and comfy. You feel sleepy. You're dozing off. You fell asleep. Suddenly, you hear a piercing sound. You wake up and realise that you've already passed your station. What are you feeling right now?
        </h3>
      </div>
      <SimpleCard class="mt-7.5em" />
    </div>
  </div>
</template>
