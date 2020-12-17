<template>
    <div class="factory">

        <div class="factory__left">
            <img class="img" :src="minionIcon" />
            
            <div class="factory__content"> 
                <p class="factory__title">
                    Nazwa
                </p>

                <p class="factory__price">
                    15 złota
                </p>
            </div>
        </div>

        <div class="factory__right">
            4
        </div>
    </div>
</template>

<script>

import minion from "../../../assets/minion.png";

export default {
    data: function() {
        return {
            minionIcon: minion
        }
    }
}
</script>

<style lang="scss">

.factory {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    padding: 0 15px;
    background: #aeaeae;
    cursor: pointer;
    
    &__left {
        display:flex;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-self: center;
    }

    &__title {
        padding-bottom: 5px;
        margin: 0;
        font-size: 22px;
        font-weight: bold;
        color: #580909;
    }

    &__price {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
        color: #e8f739;
    }

    &__right {
        display:flex;
        align-items: center;    
        font-size: 43px;
    }
}

.img {
    width: 100px;
    height: 100px;
}
</style>