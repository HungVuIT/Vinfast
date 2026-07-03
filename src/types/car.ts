export interface CarSpec {
  label: string;
  value: string;
}

export interface CarDescriptionSection {
  heading: string;
  text: string;
}

export interface Car {
  slug: string;
  name: string;
  price: string;
  priceExtra: string;
  promoBullets: string[];
  specs: CarSpec[];
  description: CarDescriptionSection[];
  image: string;
  gallery: string[];
}
// frfr