(function () {
 
    var Window_Base_resetFontSettings = Window_Base.prototype.resetFontSettings;
    Window_Base.prototype.resetFontSettings = function() {
        Window_Base_resetFontSettings.call(this);
        this.contents.outlineWidth = 0;
    }
 
})();