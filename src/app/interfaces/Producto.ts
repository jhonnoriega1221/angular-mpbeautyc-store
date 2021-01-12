export interface Producto{
	_id?: string;
	name: string;
	status: string;
	category: string;
	brand: string;
	actualPrice: number;
	originalPrice: number;
	discount: number;
	rating: number;
	opinionQuantity: number;
	stockSize: number;
	description: string;
	soldTimes: number;
	imgUrl: string;
    createdAt: Date;
    updateAt: Date;
    colors: string;
}