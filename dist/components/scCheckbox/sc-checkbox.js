"use strict";Component({properties:{value:{type:null},checked:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},color:{type:String},label:{type:String}},data:{checked:!1,clicked:!1},ready:function(){this.setData({checked:this.properties.checked})},relations:{"../scCheckboxGroup/sc-checkbox-group":{type:"parent"}},externalClasses:["sc-class"],methods:{_longPress:function(e){this._addRipple(e,!0)},_changeCheck:function(e){this.setData({checked:!this.data.checked,clicked:!0}),this.triggerEvent("checkChange",{checked:this.data.checked,value:this.properties.value},{bubbles:!0,composed:!0})},_animationend:function(){this.setData({clicked:!1})}}});