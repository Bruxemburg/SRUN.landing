<script setup lang="ts">

const props = defineProps<{
  text: string
  // true - black, false - white
  color: boolean
  href?: string
}>()

// TODO: Hover

</script>

<template>
  <a
    class="px-1.5em py-0.75em rounded-full border cursor-pointer"
    :class="props.color ? 'border-black' : 'border-white'" href="#"
  >
    <p class="button" :class="props.color ? 'text-black' : 'text-white'">
      {{ text }}
    </p>
  </a>
</template>
