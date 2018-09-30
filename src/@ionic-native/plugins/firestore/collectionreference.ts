import { CordovaInstance } from '@ionic-native/core';

export class CollectionReference {

  private _objectInstance: any;

  constructor(collectionRef: any) {
    this._objectInstance = collectionRef;
  }

  add(data: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this._objectInstance.add(data)
          .then((docRef: any) => {
            console.log(docRef);
            resolve(docRef);
          })
          .catch(reject);
    });
  }
}
