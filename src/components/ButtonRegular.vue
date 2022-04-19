<script setup lang="ts">
import Caret from '~icons/srun/caret'

const props = defineProps<{
  text: string
  // true - black, false - white
  color: boolean
  icon?: boolean
  href?: string
}>()

// TODO: Hover

</script>

<template>
  <a class="px-1.5em py-0.75em cursor-pointer flex flex-row items-center" href="#">
    <p class="button" :class="props.color ? 'text-black' : 'text-white'">
      {{ text }}
    </p>
    <Caret v-if="props.icon" />
  </a>
</template>
