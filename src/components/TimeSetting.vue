<template>
  <div id="main">
    <div class="header">
      <span>{{ text }}</span>
    </div>
    <div class="setting">
      <span v-on:click="decrement" class="timeChanger">-</span>
      <span>{{ time }}</span>
      <span v-on:click="increment" class="timeChanger">+</span>
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

  .header {
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .setting {
    display: grid;
    grid-template-columns: 15fr 1fr 15fr;  
  }

  .timeChanger:hover {
    font-size: 2.1em;
  }

  .timeChanger {
    cursor: pointer;
    transition-duration: 0.2s;
  }
</style>


