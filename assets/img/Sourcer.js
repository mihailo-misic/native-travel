const IMAGES = {
  'cities/belgrade@x2.jpg': require('./cities/belgrade@x2.jpg'),
  'cities/novi-sad@x2.jpg': require('./cities/novi-sad@x2.jpg'),
  'cities/nis@x2.jpg': require('./cities/nis@x2.jpg'),
  'cities/cacak@x2.jpg': require('./cities/cacak@x2.jpg'),

  'regions/vojvodina@x2.jpg': require('./regions/vojvodina@x2.jpg'),
  'regions/belgrade@x2.jpg': require('./regions/belgrade@x2.jpg'),
  'regions/sumadija@x2.jpg': require('./regions/sumadija@x2.jpg'),

  'nat-parks/derdap@x2.jpg': require('./nat-parks/derdap@x2.jpg'),
  'nat-parks/kopaonik@x2.jpg': require('./nat-parks/kopaonik@x2.jpg'),
  'nat-parks/sar-mountain@x2.jpg': require('./nat-parks/sar-mountain@x2.jpg'),
  'nat-parks/tara@x2.jpg': require('./nat-parks/tara@x2.jpg'),
};

export default class Sourcer {
  static getImage(name: string) {
    return IMAGES[name]
  }
}