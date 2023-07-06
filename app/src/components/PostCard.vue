<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ postedBy }}</h5>
      <p class="card-text">{{ text }}</p>
      <button class="btn btn-primary">like</button>
      <p class="card-text"> {{ like }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postedBy: null,
    text: null,
    like: 0,
  },
}
</script>