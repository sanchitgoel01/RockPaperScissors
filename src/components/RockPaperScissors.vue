<template>
  <div>
    <h3 v-if="!userSelected">Choose rock, paper, or scissors!</h3>  
    <h4 v-else>You chose {{ choiceIndexMap[userSelection].name }}</h4>
    <img
      v-if="!userSelected || userSelection == ROCK_I"
      :src="choiceIndexMap[ROCK_I].src"
      @click="userSelect(ROCK_I)"
    />
    <img
      v-if="!userSelected || userSelection == PAPER_I"
      :src="choiceIndexMap[PAPER_I].src"
      @click="userSelect(PAPER_I)"
    />
    <img
      v-if="!userSelected || userSelection == SCISSORS_I"
      :src="choiceIndexMap[SCISSORS_I].src"
      @click="userSelect(SCISSORS_I)"
    />

    <div v-if="userSelected">
      <h4>The NPC chose {{ choiceIndexMap[npcSelection].name }}</h4>
      <img :src="choiceIndexMap[npcSelection].src" />
      <h4>You {{ userAgainstNPC() }} against the NPC!</h4>
      <button id="replay" type="button" @click="userSelected = false">Replay!</button>
    </div>
  </div>
</template>

<script>
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default {
  name: "RockPaperScissors",
  data: function () {
    return {
      userSelected: false,
      userSelection: 0,

      npcSelection: -1,

      ROCK_I: 0,
      PAPER_I: 1,
      SCISSORS_I: 2,
    

      choiceIndexMap: {
        0: {
          name: "Rock",
          src: "https://www.pngkit.com/png/full/55-558223_collection-of-transparent-background-high-quality-rock-clip.png",
          loseAgainst: 1,
        },
        1: {
          name: "Paper",
          src: "https://www.clker.com/cliparts/7/W/X/8/1/1/scroll-white-background.svg",
          loseAgainst: 2,
        },
        2: {
          name: "Scissors",
          src: "https://i.pinimg.com/originals/23/6b/24/236b24209a5856d9d14d222a52d97995.png",
          loseAgainst: 0,
        },
      },
    };
  },
  methods: {
    userSelect: function (index) {
      if (this.userSelected) return;

      this.userSelected = true;
      this.userSelection = index;

      this.npcSelection = generateRandomNumber(0, 3);
    },
    userAgainstNPC: function () {
      if (!this.userSelected || this.npcSelection == -1)
       return "";

      if (this.npcSelection == this.userSelection)
       return "tied";

      if (this.choiceIndexMap[this.userSelection].loseAgainst == this.npcSelection)
       return "lost";

      return "won";
    },
  },
};
</script>

<style scoped>
img {
  width: 300px;
  height: 215px;
}

#replay {
    scale: 1.25;
    background-color: #31b0d5;
    border-radius: 4px;
    margin-top: 1%;
    border: 1px solid #269abc;
    color: #fff
}

#replay.active {
    background-image: none;
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }
</style>