<template>
  <div id="app" class="app">
    <div class="app__container"> 

      <gold-mine-component/>

      <div class="app__panel">
        <gold-store-component/>
      </div>
    </div>
  </div>
</template>

<script>
import GoldMine from "./components/GoldMine/GoldMine";
import GoldStore from "./components/GoldStore/GoldStore";

export default {
  name: 'App',
  components: {
    'gold-mine-component': GoldMine,
    'gold-store-component': GoldStore
  },
  methods: {
    getBonusGame: function() {
       return this.$store.state.bonus
    },
  },
  mounted: function() {
    setInterval( () => {
      this.$store.dispatch("addBonusPoints");  
    }, 1000)
  }
}
</script>

<style lang="scss">
  .app {
    width: 853px;
    max-height: 480px;
    margin: 0 auto;

    &__container {
      display: flex;
      padding: 0 15px;
    }

    &__panel {
      align-self: center;
      width: 100%;
      padding-left: 50px;
    }
  }
</style>