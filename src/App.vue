<template>
  <div id="app">
    <app-time-setting @plusWork="plusWork" @minusWork="minusWork" :time="state.workTime" :text="'Work Time'" :plus="'plusWork'" :minus="'minusWork'"></app-time-setting>
    <h1 :class="{ red: state.isItWorkTime, green: !state.isItWorkTime, blanchedalmond: !state.isWorking }">{{ text }}</h1>
    <div class="flex">
      <button :disabled="state.isWorking" class="start" @click="begin">Start</button>
    </div>
    
    <app-time-setting @plusRest="plusRest" @minusRest="minusRest" :time="state.restTime" :text="'Rest Time'" :plus="'plusRest'" :minus="'minusRest'"></app-time-setting>
    <app-timer :class="{ red: state.isItWorkTime, green: !state.isItWorkTime, blanchedalmond: !state.isWorking }" :timeLeft="state.timeLeft"></app-timer>
    <div class="flex">
      <button :disabled="!state.isWorking" class="reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: {},
      initialState: {
        timeLeft: 0,
        restTime: 5,
        workTime: 25,
        isWorking: false,
        isItWorkTime: true
      },
      timer: '',
    }
  },
  created() {
    this.state = JSON.parse(JSON.stringify(this.initialState)); //is there a better way to do this without giving reference to this.initialState?
  },
  computed: {
    text() {
      if (this.state.isWorking) {
        if (this.state.isItWorkTime) {
          return 'Work';
        } else {
          return 'Rest';
        }
      } else {
        return 'Session';
      }
    }
  },
  methods: {
    begin() {
      this.state.isWorking = !this.state.isWorking;
      this.startTimer();
    },
    startTimer() {
      this.setTimeLeft();
      this.countDown();
    },
    setTimeLeft() {
      if (this.state.isItWorkTime) {
        this.state.timeLeft = this.state.workTime;
      } else {
        this.state.timeLeft = this.state.restTime;
      }
      this.state.timeLeft *= 60;
    },
    countDown() {
      this.timer = setInterval(() => {
        this.state.timeLeft -= 1;
        if (this.state.timeLeft === 0) {
          changeState();
          this.startTimer();
        }
      }, 1000);
    },
    changeState() {
      clearInterval(this.timer);
      this.state.isItWorkTime = !this.state.isItWorkTime;
    },
    reset() {
      this.state = JSON.parse(JSON.stringify(this.initialState));
      clearInterval(this.timer);
    },

    minusWork() {
      if (this.state.workTime - 1 > 0) {
        this.state.workTime -= 1;
      }
    },
    plusWork() {
      if (this.state.workTime + 1 <= 60) {
        this.state.workTime += 1;
      }
    },
    minusRest() {
      if (this.state.restTime - 1 > 0) {
        this.state.restTime -= 1;
      }
    },
    plusRest() {
      if (this.state.restTime + 1 <= 60) {
        this.state.restTime += 1;
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
    min-width: 300px;
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

  .red {
    color: #ff0000;
  }

  .green {
    color: rgb(175, 218, 49);
  }

  .blanchedalmond {
    color: blanchedalmond;
  }

  #app {
    width: 50%;
    margin: auto;
    margin-top: 12%;
    padding: 20px;
    display: grid;
    grid-template-columns: 3fr 8fr 3fr;
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

