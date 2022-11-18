export interface ProductModel {
  id?: string;
  nome: string;
  quantita: number;
  descrizione: string;
}

export class ProductClass {
  id?: string;
  nome: string='';
  quantita: number= 0;
  descrizione: string ='';

  constructor(id: string, descrizione: string, nome?: string, quantita?: number) {
    id = id;
    nome = nome;
    quantita = quantita;
    descrizione = descrizione;
  }
}
