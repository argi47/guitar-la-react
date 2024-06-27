// TYPE

export type Guitar = {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export type CartItem = Guitar & {
  quantity: number
}

// Con Pick seleccionamos los valores que queremos heredar

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//   quantity: number
// }

// Con Omit seleccionamos los valores que queremos omitir

// export type CartItem = Omit<Guitar, 'description' | 'image'> & {
//   quantity: number
// }

// INTERFACE

// export interface Guitar {
//   id: number
//   name: string
//   image: string
//   description: string
//   price: number
// }

// export interface CartItem extends Guitar {
//   quantity: number
// }