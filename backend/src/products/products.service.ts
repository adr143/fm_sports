import { Injectable } from '@nestjs/common';
import { supabase } from 'src/supabase';

@Injectable()
export class ProductsService {

  async getProductById(id: string) {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }

    return product ?? { message: 'Product not found' };
  }

  async getProducts() {
    let { data: products, error } = await supabase
      .from('products')
      .select();

    if (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }

    return products ?? [];
  }
}
