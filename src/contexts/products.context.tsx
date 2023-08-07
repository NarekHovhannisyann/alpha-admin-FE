import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from 'react'
import { IProduct, IProductsContext } from 'types/product.types'
import { getAllProducts } from 'services/products.service'

// Create a ProductsContext
export const ProductsContext = createContext<IProductsContext>({
  products: [],
  isLoading: false,
  pagination: { count: 20, skip: 0, take: 10 },
  getProducts: () => {},
  filters: {},
  setFilters: () => {},
})

// Custom hook to access the ProductsContext
export const useProducts = () => useContext(ProductsContext)

// ProductsProvider component that wraps your app
// ... (imports remain the same)

// ProductsProvider component that wraps your app
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState<{
    count: number
    skip: number
    take: number
  }>({ count: 20, skip: 0, take: 10 })
  const [filters, setFilters] = useState<{
    [param: string]: string | string[] | number[]
  }>({})

  // Use an AbortController to cancel previous requests
  const abortControllerRef = useRef<AbortController | null>(null)

  const getProducts = async () => {
    if (abortControllerRef.current) {
      // If there's an existing request, abort it before making a new one
      abortControllerRef.current.abort()
    }

    setIsLoading(true)
    const abortController = new AbortController()
    abortControllerRef.current = abortController

    const data = await getAllProducts(filters, abortController)

    if (data.success) {
      setProducts(data.data)
      setPagination(data.pagination || pagination)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getProducts()

    // Cleanup function to abort the request if the component unmounts or the filters change
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [filters])

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        filters,
        pagination,
        getProducts,
        setFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
