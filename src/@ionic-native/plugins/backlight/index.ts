import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';


/**
 * @beta
 * @name Backlight
 * @description
 * This plugin adds turning on/off the device backlight.
 *
 * @usage
 * ```
 * import { Backlight } from 'ionic-native';
 *
 * // Turn backlight on
 * Backlight.on().then(() => console.log('backlight on'));
 *
 * // Turn backlight off
 * Backlight.off().then(() => console.log('backlight off'));
 *
 * ```
 */
@Plugin({
  pluginName: 'Backlight',
  plugin: 'cordova-plugin-backlight',
  pluginRef: 'cordova.plugins.Backlight',
  repo: 'https://github.com/mebibou/cordova-plugin-backlight',
  platforms: ['Android']
})
@Injectable()
export class Backlight {

  /**
   * This function turns backlight on
   * @return {Promise<any>} Returns a promise that resolves when the backlight is on
   */
  @Cordova()
  on(): Promise<any> { return; }

  /**
   * This function turns backlight off
   * @return {Promise<any>} Returns a promise that resolves when the backlight is off
   */
  @Cordova()
  off(): Promise<any> { return; }

}
