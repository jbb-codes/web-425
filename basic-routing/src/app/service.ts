/**
 * Service interface to define the structure of a service item.
 */
export interface ServiceItem {
  id: number;
  name: string;
}
export class Service {
  services: Array<ServiceItem>; // array of ServiceItem objects

  constructor() {
    // array of ServiceItem objects
    this.services = [
      {
        id: 1,
        name: 'Password Reset',
      },
      {
        id: 2,
        name: 'Spyware Removal',
      },
      {
        id: 3,
        name: 'RAM Upgrade',
      },
      {
        id: 4,
        name: 'Software Installation',
      },
      {
        id: 5,
        name: 'Tune-up',
      },
      {
        id: 6,
        name: 'Keyboard Cleaning',
      },
    ];
  }
  /**
   * @returns Returns an array of ServiceItem objects.
   */
  getServices(): Array<ServiceItem> {
    return this.services;
  }
  /**
* @param id It will be used to find a service by id.
* @returns If found, it will return a ServiceItem object otherwise it will throw an error
message.
*/
  getService(id: number): ServiceItem {
    console.log('getService function called with id: ', id);
    console.log('Type of id: ', typeof id);
    // find method is used to find a service by id
    const s = this.services.find((service) => service.id === Number(id));
    // if service is not found, throw an error message
    if (!s) {
      throw new Error(`Service ${id} not found`);
    }
    return s; // return the service
  }
}
