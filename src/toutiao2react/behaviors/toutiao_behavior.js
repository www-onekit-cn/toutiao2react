/*
 * @Autor: YeWei Wang
 * @Date: 2020-12-14 16:35:53
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2020-12-14 18:05:12
 * @Version: 1.0
 * @FilePath: \toutiao2react\src\toutiao2react\behaviors\toutiao_behavior.js
 */
export default function toutiao_behavior(component) {
  component.prototype.ui_mousedown = function() {
   // this.$emit("Touchstart");
  }
  component.prototype.ui_mousemove= function() {
  //  this.$emit("Touchmove");
  }
  /*ui_mousecanvas() {
    this.$emit("Touchcancel");
  },*/
  component.prototype.ui_mouseup= function() {
  //  this.$emit("Touchend");
  }
  component.prototype.ui_click= function() {
  //  this.$emit("Tap");
  }
  /* ui_longPress() {
     this.$emit("Longpress");
   },*/
   component.prototype.ui_longclick= function() {
   // this.$emit("Longtap");
  }
}