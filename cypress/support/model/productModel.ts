export interface ProductResponseBodyDto {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsDto;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Dto[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface DimensionsDto {
  width: number;
  height: number;
  depth: number;
}

export interface Dto {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
