<template>
    <div>

        <div class="game-info">
            <p class="game-info__score">Wynik: {{ Math.round(game.score) }} węgla</p>
            <p class="game-info__bonus">Na sekundę dostajesz {{ game.bonus.toFixed(1) }} węgla.</p>
        </div>

        <div class="game-info__choose"> 
            <p :class="['game-info__choose-text', {'active': game.buyOption}]" v-on:click="changeStoreOption($event,'buy')">KUP</p>
            <p :class="['game-info__choose-text', {'active': !game.buyOption}]" v-on:click="changeStoreOption($event,'sell')">SPRZEDAJ</p>
        </div>
        
        <gold-factory-component v-for="(store, index) in game.stores"
        :id="store.id"
        :key="index"
        :buildName="store.buildName"
        :image="store.image"
        :price="store.price"
        :level="store.level"
        :bonus="store.bonus"
        :increaseBonus="store.increaseBonus"
        />
    </div>
</template>


<script>
import GoldFactory from "./components/GoldFactory";

export default {
    components: {
        'gold-factory-component': GoldFactory
    },
    computed: {
        game() {
            return this.$store.state
        },
    },
    methods: {
        changeStoreOption: function(e, type) {
            this.$store.dispatch("changeStoreOption", {
                type
            })
        }
    }, 
}
</script>

<style lang="scss">
.game-info {
    text-align: center;

    &__score {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    }

    &__bonus {
        margin: 0;
        padding-top: 5px;
        font-size: 17px;
        font-weight:bold;
    }

    &__choose {
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
    }

    &__choose-text {
        margin: 0;
        padding: 5px 15px;
        font-weight: bold;
        color: white;
        background: black;
        border-radius: 8px;
        cursor: pointer;

        &.active {
            background: red;
        }
    }
}
</style>