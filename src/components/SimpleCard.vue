<script setup lang="ts">
import ButtonPrimary from './ButtonPrimary.vue'
import ButtonSecondary from './ButtonSecondary.vue'

</script>

<template>
  <div class="max-w-824px mx-auto w-full px-5.25em py-7.5em bg-gray-100 rounded-2em flex flex-col">
    <h2 class="text-center">
      Sounds remarkable?
    </h2>
    <div class="flex flex-row items-center justify-center pt-2em">
      <ButtonPrimary text="Download app" class="w-10em mr-1em" />
      <ButtonSecondary text="Try web app" :color="true" class="w-10em" />
    </div>
  </div>
</template>
