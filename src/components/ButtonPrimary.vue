<script setup lang="ts">

const props = defineProps<{
  text: string
  href?: string
}>()

// TODO: Hover

</script>

<template>
  <a class="px-1.5em py-0.75em bg-blue rounded-full cursor-pointer" href="#">
    <p class="button text-white">
      {{ text }}
    </p>
  </a>
</template>
