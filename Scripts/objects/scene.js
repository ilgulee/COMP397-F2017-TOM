var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var object;
(function (object) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        //PRIVATE INSTACE VARIABLES
        //PUBLIC PROPERTIES
        //CONSTRUCTORS
        function Scene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        /**
         * Initialize Components here
         */
        //PUBLIC METHODS
        Scene.prototype.Start = function () {
        };
        /**
         * Update elements in the scene
         */
        Scene.prototype.Update = function () {
        };
        /**
         * Add elements in the main Method
         */
        Scene.prototype.Main = function () {
        };
        return Scene;
    }(createjs.Container));
    object.Scene = Scene;
})(object || (object = {}));
//# sourceMappingURL=scene.js.map