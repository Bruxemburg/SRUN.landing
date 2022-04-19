<script setup lang="ts">
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonRegular from '~/components/ButtonRegular.vue'

</script>

<template>
  <div id="hero" class="w-full flex flex-col items-center justify-end py-7.5em">
    <h3 class="text-center text-gray-500">
      Fall asleep calmly and
    </h3>
    <div class="flex flex-col items-center text-center pt-1em">
      <h1>
        Never miss your
      </h1>
      <h1 class="font-light">
        morning train
      </h1>
      <h1>
        stop again.
      </h1>
    </div>
    <div class="flex flex-row pt-2.265em">
      <ButtonPrimary text="Download app" />
      <ButtonRegular text="Discover our story" :color="true" />
    </div>
  </div>
</template>
