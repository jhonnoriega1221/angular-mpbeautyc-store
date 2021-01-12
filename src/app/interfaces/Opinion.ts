export interface Opinion {
    _id?: string;
    idUsuario: string;
    idProducto: string;
    calificacion:number;
    titulo:string;
    opinionUsuario:string;
    createdAt: Date;
    updateAt: Date;
}
