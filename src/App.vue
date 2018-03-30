<template>
  <div id="app">
    <app-time-setting v-on:plusWork="plusWork" v-on:minusWork="minusWork" :time="workTime" :text="'Work Time'" :plus="'plusWork'" :minus="'minusWork'"></app-time-setting>
    <h1 class="colored">{{ text }}</h1>
    <div class="flex">
      <button class="start" v-on:click="begin">Start</button>
    </div>
    
    <app-time-setting v-on:plusRest="plusRest" v-on:minusRest="minusRest" :time="restTime" :text="'Rest Time'" :plus="'plusRest'" :minus="'minusRest'"></app-time-setting>
    <app-timer class="colored" :timeLeft="timeLeft"></app-timer>
    <div class="flex">
      <button class="reset" v-on:click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      restTime: 5,
      workTime: 25,
      text: 'Session',
      flag: true,
      timeLeft: 0,
      timer: ''
    }
  },
  methods: {
    begin() {
      document.querySelector('.start').disabled = true;
      this.startTimer();
    },
    startTimer() {
      if (this.flag) {
        this.timeLeft = this.workTime;
        this.text = 'Work';
        document.querySelectorAll('.colored').forEach(elem => {
          elem.style.color = '#ff0000';
        });
      } else {
        this.timeLeft = this.restTime;
        this.text = 'Rest';
        document.querySelectorAll('.colored').forEach(elem => {
            elem.style.color = 'rgb(175, 218, 49)';
        });
      }
      this.timeLeft *= 60;
      this.countDown();
    },
    countDown() {
      this.timer = setInterval(() => {
        this.timeLeft -= 1;
        if (this.timeLeft === 0) {
          clearInterval(this.timer);
          this.flag = !this.flag;
          this.startTimer();
        }
      }, 1000);
    },
    reset() {
      this.workTime = 25;
      this.restTime = 5;
      this.timeLeft = this.workTime * 60;
      this.text = 'Session';
      this.flag = true;
      document.querySelectorAll('h1').forEach(elem => {
        elem.style.color = 'blanchedalmond';
      });
      document.querySelector('.start').disabled = false;
      clearInterval(this.timer);
    },
    minusWork() {
      if (this.workTime - 1 > 0) {
        this.workTime -= 1;
      }
    },
    plusWork() {
      if (this.workTime + 1 <= 60) {
        this.workTime += 1;
      }
    },
    minusRest() {
      if (this.restTime - 1 > 0) {
        this.restTime -= 1;
      }
    },
    plusRest() {
      if (this.restTime + 1 <= 60) {
        this.restTime += 1;
      }
    }
  }
}
</script>

<style>
  body {
    font-family: monospace;
    color: blanchedalmond;
    background-color: rgb(7, 45, 68);
  }

  span {
    font-size: 180%;
    color: blanchedalmond;
    vertical-align: middle;
  }

  h1 {
    font-size: 5em;
  }

  button {
    color: black;
    padding: 8% 10%;
    text-decoration: none;
    font-size: 120%;
    transition-duration: 0.2s;
    cursor: pointer;
    border-radius: 1em;
  }

  button:focus {
    outline: 0;
  }

  #app {
    width: 50%;
    margin: auto;
    margin-top: 12%;
    padding: 20px;
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    grid-column-gap: 2em;
    text-align: center;
  }

  .flex {
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .start {
    background-color: blanchedalmond;
    border: 2px solid grey;
  }

  .start:hover {
    background-color: grey;
    color: blanchedalmond;
  }

  .reset {
    background-color: #ff6666;
    border: 2px solid #ff0000;
  }

  .reset:hover {
    background-color: #ff0000;
    color: blanchedalmond;
  }
</style>

