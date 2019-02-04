<template>
  <div class="container center-content"><router-view /></div>
</template>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.container {
  &:hover {
    background-color: $lightPurple;
  }
}
</style>
