<template>
  <div id="main">
    <div class="header">
      <span>{{ text }}</span>
    </div>
    <div class="setting">
      <span @click="decrement" class="time-changer">-</span>
      <span>{{ time }}</span>
      <span @click="increment" class="time-changer">+</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'text',
    'time',
    'plus',
    'minus'
  ],
  methods: {
    decrement() {
      this.$emit(this.minus);
    },
    increment() {
      this.$emit(this.plus);
    }
  }
}
</script>

<style scoped>
  #main {
    display: grid;
    grid-template-rows: 3fr 2fr;  
  }

  span {
    min-width: 10%;
  }

  .header {
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .setting {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;  
  }

  .time-changer:hover {
    font-size: 2.1em;
  }

  .time-changer {
    cursor: pointer;
    transition-duration: 0.2s;
  }
</style>


