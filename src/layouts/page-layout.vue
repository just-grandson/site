<template>
  <main class="default-layout">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.default-layout {
  padding: 60px 40px;
  display: grid;
  grid-template-columns: 100%;
  place-items: stretch;
  row-gap: 60px;
}
</style>