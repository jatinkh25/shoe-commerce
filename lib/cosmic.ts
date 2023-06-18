import { COSMIC_BUCKET_SLUG, COSMIC_READ_KEY } from '@/utils/constants'
import { Category, Image, Product } from '@/utils/types'
import { createBucketClient } from '@cosmicjs/sdk'

// Create a CosmicJS bucket client
const cosmic = createBucketClient({
  bucketSlug: COSMIC_BUCKET_SLUG,
  readKey: COSMIC_READ_KEY,
})

export default cosmic

export async function getHeroBannerMedia() {
  try {
    // Get the images in hero-banner media folder
    const data: any = await Promise.resolve(
      cosmic.media.find({
        folder: 'hero-banner',
      })
    )

    const images: Image[] = await data.media
    return images
  } catch (error) {
    console.log('GHBM', error)
    return []
  }
}

// Retrieve all products from the CosmicJS bucket
export async function getAllProducts(props: string[]): Promise<Product[]> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'products',
        })
        .props(props)
    )
    const products: Product[] = await data.objects
    return Promise.resolve(products)
  } catch (error) {
    console.log('GAP', error)
  }
  return Promise.resolve([])
}

// Retrieve all categories from the CosmicJS bucket
export async function getAllCategories(props: string[]): Promise<Category[]> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'categories',
        })
        .props(props)
    )
    const categories: Category[] = await data.objects
    return Promise.resolve(categories)
  } catch (error) {
    console.log('GAC', error)
  }
  return Promise.resolve([])
}

// Retrieve products belonging to a specific category from the CosmicJS bucket
export async function getCategoryProducts(
  props: string[],
  categoryName: string
): Promise<Product[]> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'products',
          'metadata.categories.slug': {
            $in: categoryName,
          },
        })
        .props(props)
    )
    const products: Product[] = await data.objects
    return Promise.resolve(products)
  } catch (error) {
    console.log('GCP', error)
  }
  return Promise.resolve([])
}

// Retrieve a single product from the CosmicJS bucket based on its slug
export async function getProduct(props: string[], slug: string): Promise<Product> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'products',
          slug: slug,
        })
        .props(props)
    )
    const product: Product = await data.object
    return Promise.resolve(product)
  } catch (error) {
    console.log('GP', error)
  }
  return Promise.resolve({} as Product)
}

// Retrieve related products from the CosmicJS bucket by selecting products all products other than the selected product in that category
export async function getRelatedProducts(props: string[], slug: string): Promise<Product[]> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'products',
          slug: {
            $ne: slug,
          },
        })
        .props(props)
    )
    const products: Product[] = await data.objects
    return Promise.resolve(products)
  } catch (error) {
    console.log('GRP', error)
  }
  return Promise.resolve([])
}
