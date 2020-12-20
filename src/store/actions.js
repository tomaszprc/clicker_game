export default {
    click(context, payload) {
        context.commit("click", payload);
    },
    buyBonus(context, payload) {
        context.commit("buyBonus", payload);
    },
    sellBonus(context, payload) {
        context.commit("sellBonus", payload);
    },
    addBonusPoints(context, payload) {
        context.commit("addBonusPoints", payload);
    },
    changeStoreOption(context, payload) {
        context.commit("changeStoreOption", payload);
    }
}