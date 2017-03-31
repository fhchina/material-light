//todo: nota. probablemente no haya que usar host en el componente padre para poder encapsular los estilos y no 
// tener que usar viewencapsulation.none; sin embargo si puede ser util usar host en componentes hijos
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mlTooltipLib_1 = require("./mlTooltipLib");
var ml = require("../../lib/ml_lib");
var MlTooltip = (function () {
    function MlTooltip(ren) {
        this.ren = ren;
    }
    MlTooltip.prototype.ngAfterViewInit = function () {
        if (this.large === '')
            ml.setClass(this.spanTooltip, 'mdl-tooltip--large', this.ren);
        if (this.position === 'right')
            ml.setClass(this.spanTooltip, 'mdl-tooltip--right', this.ren);
        if (this.position === 'left')
            ml.setClass(this.spanTooltip, 'mdl-tooltip--left', this.ren);
        if (this.position === 'top')
            ml.setClass(this.spanTooltip, 'mdl-tooltip--top', this.ren);
        if (this.position === 'bottom')
            ml.setClass(this.spanTooltip, 'mdl-tooltip--bottom', this.ren);
        new mlTooltipLib_1.default(this.spanTooltip.nativeElement);
    };
    __decorate([
        core_1.ViewChild('spanTooltip'), 
        __metadata('design:type', core_1.ElementRef)
    ], MlTooltip.prototype, "spanTooltip", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTooltip.prototype, "for", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTooltip.prototype, "position", void 0);
    __decorate([
        // Position values: [right, left, top, bottom]
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlTooltip.prototype, "large", void 0);
    MlTooltip = __decorate([
        core_1.Component({
            selector: 'ml-tooltip',
            styleUrls: ['./mlTooltip.css'],
            template: '<span [attr.for]="for" class="mdl-tooltip" #spanTooltip><ng-content></ng-content></span>',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], MlTooltip);
    return MlTooltip;
}());
exports.MlTooltip = MlTooltip;
