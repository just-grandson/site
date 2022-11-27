<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="card" type="button" @click="emit('click')">
    <div class="card-body">
      <slot />
      
    </div>
    <div class="card-cover">
      <!-- <svg viewBox="0 0 256 256"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><path d="m 16,64 224.93778,0.09256"/><path d="M 48,16 H 207.91114 C 225.62929,16 240,30.281849 240,48 v 160 c 0,17.71816 -14.28185,32 -32,32 H 48 C 30.281848,240 16.069099,225.73073 16.06221,208.01257 L 16,48 C 15.993112,30.281851 30.281848,16 48,16 Z"/><path d="M 191.96444,64.092555 192,16"/></g></svg> -->
    </div>
  </button>
</template>

<style scoped lang="scss">
.card {
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  
  isolation: isolate;
  border-radius: 16px;
  border: none;
  background-color: transparent;

  text-align: left;
  color: var(--color-text);
  
  cursor: pointer;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    content: "";
    width: 100%;
    height: 100%;

    background: #1D1E1F;
    box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.1);
    border-radius: inherit;

    opacity: 0;
    transform: scaleY(0.1) scaleX(1);
    transition: opacity 0.1s linear, transform 0.35s ease;
    will-change: transform, opacity;
  }

  &:hover {
    &:before {
      opacity: 1;
      transform: scaleY(1) scaleX(1);
    }
  }

  .card-cover {
    position: relative;
    z-index: 2;

    flex-shrink: 0;
    display: block;
    width: 48px;
    height: 48px;

    // background-color: hsl(0, 0%, 15%);
    // border: 1px solid hsl(0, 0%, 15%);
    border-radius: 11px;
    padding: 12px;
  }

  
  .card-body {
    position: relative;
    z-index: 2;

    flex-grow: 1;
    display: grid;
    grid-template-columns: 100%;
    place-items: stretch;
    row-gap: 8px;
    max-width: 100%;

    & :first-child {
      color: var(--color-title);
    }
  }
}
</style>