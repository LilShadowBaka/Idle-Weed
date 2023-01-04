export {Weed};

class Weed {
    constructor(weedRate, harvest, cost, price, shopImg, farmImg, rarity, disc) {
        this.weedRate = weedRate; //how it fast it grows
        this.harvest = harvest; //how many blunts come from one harvest
        this.cost = cost; //How much it costs in shop
        this.price = price; //How much you get when sell
        this.shopImg = shopImg; //Pic in shop
        this.rarity = rarity; //How rare your strain is
        this.growth = 0; //Growth stages 1-10 (10 is fully grown)
    }
}