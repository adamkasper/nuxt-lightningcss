<template>
  <div class="a">
    <p>test 1</p>

    <div>
      <LazySomeComponent />
    </div>
  </div>
</template>

<style scoped>
.a p {
  color: blue;
}

.a :deep(.b .c) {
  color: red;
}
</style>
