import { ProductModel } from './../models/product';
export class Mock_Product{
static ProductListMock:ProductModel[]=[
  {
    id:'0',
    nome:'latte',
    quantita:3,
    descrizione:'Un po di latte'
  },
  {
    id:'1',
    nome:'zucchero',
    quantita:3,
    descrizione:'Un po di latte'
  },
  {
    id:'2',
    nome:'farina',
    quantita:3,
    descrizione:'Un po di latte'
  },
  {
    id:'3',
    nome:'nutella',
    quantita:3,
    descrizione:'Un po di latte'
  }
];
}
