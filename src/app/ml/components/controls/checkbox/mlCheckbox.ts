// [attr.id]= "id+'mdl'" => adds sufix 'mdl' to avoid colision width <mdl-checkbox id> attribute

// Options groups checkboxes not supported?

//todo: una forma de arreglar lo de no cargar varias veces 'ml_ripple.css' es poniendo los estilos mdl-ripple en
//      el fichero general 'material.css' pero puede haber problemas con la encapsulacion

//todo: otra forma: si el attributo de entrada RIPPLE esta definido, cargar la hoja de estilos 'ml_ripple.css'

import {Component, ElementRef, ViewChild, Input, forwardRef, ViewEncapsulation} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import MdlCheckbox from './mlCheckboxLib';

@Component({
selector: 'ml-checkbox',
styleUrls: ['./mlCheckbox.css'],
encapsulation: ViewEncapsulation.None,
// moduleId: module.id.toString(),
providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MlCheckbox), multi: true}],
template:`

<label #label [attr.for]="id+'mdl'" class="mdl-checkbox" [ngClass]="{'is-checked': isChecked()}">
  <input type="checkbox" [attr.id]="id+'mdl'" class="mdl-checkbox__input" [(ngModel)]="model" [disabled]="disabled">
  <span class="mdl-checkbox__label"><ng-content></ng-content></span>
  <span class="mdl-checkbox__ripple-container mdl-ripple--center">
    <span class="mdl-ripple is-animating"></span>
  </span>
</label>

`//template
})

export class MlCheckbox implements ControlValueAccessor {

  @ViewChild('label') label: ElementRef;
  @Input() id: string;
  @Input() disabled: string;

  _model: any; 
  mdlCheckbox: MdlCheckbox;
  isRippleDefined: boolean;
  onTouch = () => {};
  onChange = (_: any) => {};

  ngOnInit(){
    this.mdlCheckbox = new MdlCheckbox(this.label.nativeElement);
    if (this.disabled && (this.disabled.toLowerCase() == 'true'))
      this.mdlCheckbox.disable();
  }

  get model() {
    return this._model;
  }

  set model(value: any) {
    this._model = value;
    this.onChange(value);
  }
  
  writeValue(value: any): void { this.model = value }
  registerOnChange(fn: any): void { this.onChange = fn }
  registerOnTouched(fn: any): void { this.onTouch = fn }
  isChecked(){ return this._model == true }
}