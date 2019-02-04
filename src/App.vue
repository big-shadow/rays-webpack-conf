<template>
  <div class="container"><router-view /></div>
</template>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.container {
  &:hover {
    background-color: $lightPurple;
  }
}
</style>
