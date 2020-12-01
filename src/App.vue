<template>
  <div id="app">
    <h1>Rock Paper Scissors!</h1>
    <RockPaperScissors />
  </div>
</template>

<script>
import RockPaperScissors from "./components/RockPaperScissors";

export default {
  name: 'App',
  components: {
    RockPaperScissors
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
