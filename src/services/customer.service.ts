import { axiosInstance } from './axios.service'
import { IResponse } from 'types/response.types'
import { ICustomer } from 'types/customer.types'
import { CustomerEndpoints } from 'types/endpoints.types'

export const getAllCustomers = async (): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(CustomerEndpoints.CUSTOMER)

    return data.data
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    }
  }
}

export const getOneCustomer = async (fullName: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(CustomerEndpoints.CUSTOMER + fullName)

    return data.data
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    }
  }
}

export const updateCustomer = async (
  customerData: ICustomer,
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.put(
      CustomerEndpoints.CUSTOMER_UPDATE + customerData.id,
      customerData,
    )

    return data.data
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    }
  }
}

export const getAddress = async (
  phone: string,
  fullName: string,
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      CustomerEndpoints.CUSTOMER_ADDRESS + `${phone}/${fullName}`,
    )

    return data.data
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    }
  }
}
