//=============================================================================
// SkipTitleScreen.js
//=============================================================================

/*:
 * @plugindesc Skips the Title Screen!
 * Pretty cool, right?
 * @author SumRndmDde
 *
 * @help This plugin doesn't need any commands.
 * All you do is add the plugin and let it do the rest!
 * Don't worry about anything!
 */

Scene_Boot.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SoundManager.preloadImportantSounds();
    if (DataManager.isBattleTest()) {
        DataManager.setupBattleTest();
        SceneManager.goto(Scene_Battle);
    } else if (DataManager.isEventTest()) {
        DataManager.setupEventTest();
        SceneManager.goto(Scene_Map);
    } else {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
    }
    this.updateDocumentTitle();
};

Scene_GameEnd.prototype.commandToTitle = function() {
    this.fadeOutAll();
    //SceneManager.goto(Scene_Title);
    DataManager.setupNewGame();
    SceneManager.goto(Scene_Map);
}