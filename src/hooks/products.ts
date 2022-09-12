import React, {useState, useEffect} from "react"
import axios, {AxiosError} from 'axios'
import { Iproduct } from '../models';

export function useProducts() {
    
  const [products, setProducts] = useState<Iproduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: Iproduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    try { 
      setError('')
      setLoading(true)
      const responce = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(responce.data)
      setLoading(false)
    }
    catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
   
    
  }
  useEffect( () => {
    fetchProducts()
  }, [])

  return {products, error, loading, addProduct}
}