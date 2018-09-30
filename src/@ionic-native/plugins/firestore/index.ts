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

import { FirestoreConfig } from './firestoreconfig';
import { FirestoreOptions } from './firestoreoptions';
export { FirestoreConfig } from './firestoreconfig';
export { FirestoreOptions } from './firestoreoptions';

import { CollectionReference } from './collectionreference';
export { CollectionReference } from './collectionreference';

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
        resolve(new FirestoreDatabase(db));
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
        resolve(new FirestoreDatabase(db));
      });
    });
  }
}

export class FirestoreDatabase {

  private _objectInstance: any;

  datePrefix = '__DATE:';
  geopointPrefix = '__GEOPOINT:';
  fieldValueDelete = '__DELETE:';
  fieldValueServerTimestamp = '__SERVERTIMESTAMP:';
  persist: boolean;
  timestampsInSnapshots: boolean;

  constructor(db: any) {
    this._objectInstance = db;
    this.datePrefix = db.datePrefix || this.datePrefix;
    this.geopointPrefix = db.geopointPrefix || this.geopointPrefix;
    this.fieldValueDelete = db.fieldValueDelete || this.fieldValueDelete;
    this.fieldValueServerTimestamp = db.fieldValueServerTimestamp || this.fieldValueServerTimestamp;
    this.persist = db.persist;
    this.timestampsInSnapshots = db.timestampsInSnapshots;
  }

  collection(path: string): CollectionReference {
    const collectionRef: any = this._objectInstance.collection(path);

    return new CollectionReference(collectionRef);
  }

}
