<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="window">
    <div class="window-inner">
      <div class="window-header">
        <div class="window-controls">
          <button class="window-button-close" type="button" @click="emit('close')"></button>
        </div>
        <div class="window-title">Title of window</div>
      </div>
      <div class="window-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.window {
  position: relative;
  top: 95px;
  
  isolation: isolate;
  border-radius: 22px;
  
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    content: "";
    width: 100%;
    height: 100%;

    background-color: var(--color-window-background);
    box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.1);
    border-radius: inherit;
  }

  .window-inner {
    position: relative;
    z-index: 2;

    padding: 32px 38px;
  }

  .window-header {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }

  .window-controls {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 12px;
    margin-right: 32px;

    &:before,
    &:after {
      content: "";
      display: block;
      width: 14px;
      height: 14px;
      padding: 0;

      background-color: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 50%;
    }
  }


  .window-button-close {
    order: -1;
    display: block;
    width: 14px;
    height: 14px;
    padding: 0;

    background-color: #EC655A;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .window-body {
    // width: 764px;
    // height: 320px;
    padding: 32px;

    background: #18191A;
    border-radius: 16px;
  }
}
</style>