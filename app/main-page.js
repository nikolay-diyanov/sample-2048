var createViewModel = require("./main-view-model").createViewModel;
var view = require("ui/core/view");
var gestures = require("ui/gestures");
var gridModule = require("ui/layouts/grid-layout");
var labelModule = require("ui/label");
var buttonModule = require("ui/button");
var enums = require("ui/enums");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = createViewModel();

    var gridview = view.getViewById(page, "grid");
    var labelview = view.getViewById(page, "v01");
    
    var labelview21 = view.getViewById(page, "v21");
    
    var movingLabel = new labelModule.Label();
    gridModule.GridLayout.setColumn(movingLabel, 0);
    gridModule.GridLayout.setRow(movingLabel, 0);
    movingLabel.text = "8";
    movingLabel.cssClass = "tile";
    labelview21.addChild(movingLabel);

    gridview.on(gestures.GestureTypes.swipe, function (args) {
        console.log("Swipe Grd");
        
        var label = new labelModule.Label();
        gridModule.GridLayout.setColumn(label, 0);
        gridModule.GridLayout.setRow(label, 0);
        label.text = "8";
        label.cssClass = "tile";
        labelview.addChild(label);
        
        movingLabel.animate({
            translate: { x: 0, y: 100},    
            duration: 1000,
            curve: enums.AnimationCurve.easeIn
        });
    });
}

exports.pageLoaded = pageLoaded;