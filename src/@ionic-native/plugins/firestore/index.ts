/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface FirestoreOptions {

  /**
   * When initialising the plugin you can set up a prefix that is applied to a string value which is used to identify it as a date. The default prefix is __DATE:
   */
  datePrefix?: string;

  /**
   * When initialising the plugin you can set up a prefix that is applied to a string value which is used to identify it as a deleted fieldValue. The default prefix is __DELETE:
   */
  fieldValueDelete?: string;

  /**
   * When initialising the plugin you can set up a prefix that is applied to a string value which is used to identify it as a server timstamp. The default prefix is __SERVERTIMESTAMP:
   */
  fieldValueServerTimestamp?: string;

  /**
   * When initialising the plugin you can set up a prefix that is applied to a string value which is used to identify it as a geopoint. The default prefix is __GEOPOINT:
   */
  geopointPrefix?: string;

  /**
   * Attempts to enable persistent storage, if possible. (default: true)
   */
  persist?: boolean;

  /**
   * Use `Timestamp`s instead of Dates. (default: true)
   */
  timestampsInSnapshots?: boolean;

  /**
   * Additional options
   */
  config?: any;
}

/**
 * @name Firestore
 * @description
 * Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
 * This plugin is a wrapper plugin of [cordova-plugin-firestore](https://github.com/ReallySmallSoftware/cordova-plugin-firestore)
 *
 * @usage
 * ```typescript
 * import { Firestore } from '@ionic-native/firestore';
 *
 *
 * constructor(private firestore: Firestore) { }
 *
 * ...
 *
 *
 * this.firestore.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Firestore',
  plugin: 'cordova-plugin-firestore', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Firestore', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/ReallySmallSoftware/cordova-plugin-firestore', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS', 'Browser'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Firestore extends IonicNativePlugin {

  /**
   * Retrieve an instance of Firestore DB.
   * The original developer(@ReallySmallSoftware) is from the UK.
   * That's why he named initialise() with an 's'
   * @param options {FirestoreOptions} options for initialization
   * @return {Promise<FirestoreInstance>} Returns a promise that resolves when FireBase pluin is initialized.
   */
  initialise(options: FirestoreOptions): Promise<any> {
    return new Promise<any>((resolve) => {
      Firestore.getPlugin().initialise(options).then((db: any) => {
        console.log(db);
        resolve(db);
      });
    });
  }

  /**
   * Retrieve an instance of Firestore DB.
   * Alias for `initialise` method to cover common usage.
   * @param options {FirestoreOptions} options for initialization
   * @return {Promise<FirestoreInstance>} Returns a promise that resolves when FireBase pluin is initialized.
   */
  initialize(options: FirestoreOptions): Promise<any> {
    return new Promise<any>((resolve) => {
      Firestore.getPlugin().initialise(options).then((db: any) => {
        console.log(db);
        resolve(db);
      });
    });
  }
}
