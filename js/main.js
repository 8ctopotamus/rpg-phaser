var RPG = RPG || {};

var game = new Phaser.Game(640, 480, Phaser.CANVAS);

game.state.add("BootState", new RPG.BootState());
game.state.add("LoadingState", new RPG.LoadingState());
game.state.start("BootState", true, false, "assets/levels/town.json", "WorldState", {});