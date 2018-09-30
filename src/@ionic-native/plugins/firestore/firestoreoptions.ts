import { FirestoreConfig } from './firestoreconfig';

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
  config?: FirestoreConfig;
}
