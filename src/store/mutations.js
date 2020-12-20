export default {
    click(state) {
       state.score += 1;
    },
    buyBonus(state, payload) {
        const buildObject = state.stores.find(build => build.id == payload.type);
        const buildPrice = buildObject.price;
        const buildBonus = buildObject.bonus;
        
        if (state.score >= buildPrice)
        {
            state.bonus += buildBonus;
            state.score -= buildPrice;
            buildObject.price = buildObject.price * buildObject.increaseBonus;
            buildObject.level += 1;
            buildObject.bonus = parseFloat((buildObject.bonus * buildObject.increaseBonus).toFixed(2));
        }
    },
    sellBonus(state,payload)
    {
        const buildObject = state.stores.find(build => build.id == payload.type);

        if (buildObject.level > 0)
        {
            state.score += ((buildObject.price / buildObject.increaseBonus) / 2);
            buildObject.bonus = parseFloat((buildObject.bonus / buildObject.increaseBonus).toFixed(2));
            state.bonus -= buildObject.bonus;
            buildObject.price = buildObject.price / buildObject.increaseBonus;
            buildObject.level -= 1;
        }
    },
    addBonusPoints(state) {
      state.score += state.bonus;
    },
    changeStoreOption(state, payload) {
        if(payload.type == "buy")
        {
            state.buyOption = true;
        }
        else if (payload.type == "sell")
        {
            state.buyOption = false;
        }
    },
};