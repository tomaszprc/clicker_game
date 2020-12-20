<template>
    <div class="factory" v-on:click="factoryClick($event, id)">

        <div v-if="game.buyOption">
            <div v-if="game.score < price" class="factory__disabled"></div>
        </div>

        <div v-else>
            <div v-if="!(level > 0)" class="factory__disabled"></div>
        </div>

        <div class="factory__container">
            <div class="factory__left">
                <img :src="require(`@/assets/${image}`)" />
                
                <div class="factory__content"> 
                    <p class="factory__title">
                        {{buildName}}
                    
                    </p>
                    
                    <p v-if="game.buyOption" class="factory__price">
                        {{price.toFixed(0)}} węgla / {{bonus.toFixed(2)}} węgla na 1 sec.
                    </p>

                    <p v-else-if="level > 0" class="factory__price">
                        Sprzedaj bonus za {{ ((price.toFixed(0) / increaseBonus) / 2).toFixed(0)  }} węgla
                    </p>
                </div>
            </div>

            <div class="factory__right">
                {{ level }}
            </div>
        </div>
    </div>
</template>

<script>

import minion from "../../../assets/minion.png";

export default {
    data: function() {
        return {
            minionIcon: minion,
            buildPrice: this.price,
            buildLevel: this.level
        }
    },
    methods: {
        factoryClick: function(e, type) {
            if (this.game.buyOption && this.game.score >= this.buildPrice)
            {
                this.$store.dispatch("buyBonus", {
                    type
                })
            }
            else if (!this.game.buyOption)
            {
                this.$store.dispatch("sellBonus", {
                    type
                })
            }
        }
    },
    computed: {
        game() {
            return this.$store.state
        }
    },
    props: ["buildName", "image", "price", "level", "id", "bonus", "increaseBonus"]
}
</script>

<style lang="scss">

.button {
    background: red;
    font-size: 15px;
    font-weight: bold;

    &--black {
        background: black;
    }
}

.factory {
    position: relative;
    margin: 15px 0;
    background: #aeaeae;
    cursor: pointer;
    
    &__container {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }

    &__left {
        display:flex;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-self: center;
        padding-left: 15px;
    }

    &__title {
        padding-bottom: 5px;
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        color: #580909;
    }

    &__price {
        margin: 0;
        font-size: 14px;
        font-weight: bold;
        color: #e8f739;
    }

    &__right {
        display:flex;
        align-items: center;    
        font-size: 43px;
    }

    &__disabled-buy {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: not-allowed;
    }

    &__disabled-sell {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: not-allowed;
    }

      &__disabled {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: not-allowed;
    }
}
</style>