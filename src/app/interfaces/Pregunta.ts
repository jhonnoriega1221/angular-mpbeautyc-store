export interface Pregunta {
    _id?: string;
    idUsuario: string;
    idProducto: string;
    preguntaUsuario:string;
    respuesta:string;
    createdAt: Date;
    updateAt: Date;
}
