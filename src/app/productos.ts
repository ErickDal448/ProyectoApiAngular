export interface Productos {
    id: Int16Array,
    category: string,
    description: string,
    image: string,
    price: Float32Array,
    rating:{count:Int16Array, rate: Float32Array},
    title:string
}
