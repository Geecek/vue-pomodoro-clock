<template>
  <h1>
      {{ minutes }}:{{ seconds }}
  </h1>
</template>

<script>
export default {
  props: ['timeLeft'],
  computed: {
      minutes() {
        const time = parseInt(this.timeLeft / 60);
        return time < 10 ? '0' + time : time;
      },
      seconds() {
        const time = parseInt(this.timeLeft % 60);
        return time < 10 ? '0' + time : time;
      }
  }
}
</script>

