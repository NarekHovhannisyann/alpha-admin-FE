export enum UserEndpoints {
  LOGIN = 'users/login',
  REGISTER = 'users/register',
  GET_USER = 'users/',
  UPDATE_USER = 'users/',
  SUBSCRIBE_FOR_NEWS = 'email/subscribe/',
}

export enum OrderEndpoints {
  GET_ORDERS = 'orders/',
  GET_ORDERS_HISTORY = 'orders/history/',
  GET_ORDER_BY_ID = 'orders/',
  PLACE_ORDER = 'orders/create',
  DELETE_ORDER = 'orders/',
}

export enum ProductEndpoints {
  PRODUCTS = 'products/',
  CREATE_PRODUCT = 'products/create',
  GET_PRODUCTS_HISTORY = 'products/history/',
}

export enum DriverEndpoints {
  DRIVERS = 'drivers/',
  CREATE_DRIVER = 'drivers/create',
  UPDATE_DRIVER = 'drivers/',
  DELETE_DRIVER = 'drivers/',
}

export enum StorageEndpoints {
  STORAGE_IMPORTS = 'storages/',
  ADD_STORAGE_IMPORTS = 'storages/create',
  UPDATE_STORAGE_IMPORT = 'storages/',
  DELETE_STORAGE_IMPORTS = 'storages/',
}
