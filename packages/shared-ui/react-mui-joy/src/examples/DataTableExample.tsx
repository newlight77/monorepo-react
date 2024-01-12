import React, { useEffect, useState } from 'react';
import { type DataTableColumnDef, type DataTableSearchCriteria, DataTable } from '../organisms/DataTable';

type Product = {
    id: string,
    name: string,
    price: number,
    category: string,
    quantity: string,
    rating: string
}

const createProducts = (id: string, name: string, price: number) => (
    {
        id: id,
        name: `${name} ${id}`,
        price: price,
        category: "smartphone",
        quantity: "7",
        rating: "5",
    }
)

class ProductService {
    async getProductsSmall() {
        return allProducts;
    }
}

const allProducts: Product[] = [
    createProducts('-11', 'Apple Iphone 11', 1290), createProducts('-12', 'Samsung Galaxy 22', 560),
    createProducts('-21', 'Apple Iphone 11', 1290), createProducts('-22', 'Samsung Galaxy 22', 560),
    createProducts('-31', 'Apple Iphone 11', 1290), createProducts('-32', 'Samsung Galaxy 22', 560),
    createProducts('-41', 'Apple Iphone 11', 1290), createProducts('-42', 'Samsung Galaxy 22', 560),
    createProducts('-51', 'Apple Iphone 11', 1290), createProducts('-52', 'Samsung Galaxy 22', 560),
    createProducts('-61', 'Apple Iphone 11', 1290), createProducts('-62', 'Samsung Galaxy 22', 560),
    createProducts('-71', 'Apple Iphone 11', 1290), createProducts('-72', 'Samsung Galaxy 22', 560),
    createProducts('-81', 'Apple Iphone 11', 1290), createProducts('-82', 'Samsung Galaxy 22', 560),
    createProducts('-91', 'Apple Iphone 11', 1290), createProducts('-92', 'Samsung Galaxy 22', 560),
    createProducts('-13', 'Apple Iphone 13', 1290), createProducts('-14', 'Samsung Galaxy 22', 560),
    createProducts('-23', 'Apple Iphone 13', 1290), createProducts('-24', 'Samsung Galaxy 22', 560),
    createProducts('-33', 'Apple Iphone 13', 1290), createProducts('-34', 'Samsung Galaxy 22', 560),
    createProducts('-43', 'Apple Iphone 13', 1290), createProducts('-44', 'Samsung Galaxy 22', 560),
    createProducts('-53', 'Apple Iphone 13', 1290), createProducts('-54', 'Samsung Galaxy 22', 560),
    createProducts('-63', 'Apple Iphone 13', 1290), createProducts('-64', 'Samsung Galaxy 22', 560),
    createProducts('-73', 'Apple Iphone 13', 1290), createProducts('-74', 'Samsung Galaxy 22', 560),
    createProducts('-83', 'Apple Iphone 13', 1290), createProducts('-84', 'Samsung Galaxy 22', 560),
    createProducts('-93', 'Apple Iphone 13', 1290), createProducts('-94', 'Samsung Galaxy 22', 560),
    createProducts('-15', 'Apple Iphone 15', 1290), createProducts('-16', 'Samsung Galaxy 22', 560),
    createProducts('-25', 'Apple Iphone 15', 1290), createProducts('-26', 'Samsung Galaxy 22', 560),
    createProducts('-35', 'Apple Iphone 15', 1290), createProducts('-36', 'Samsung Galaxy 22', 560),
    createProducts('-45', 'Apple Iphone 15', 1290), createProducts('-46', 'Samsung Galaxy 22', 560),
    createProducts('-55', 'Apple Iphone 15', 1290), createProducts('-56', 'Samsung Galaxy 22', 560),
    createProducts('-65', 'Apple Iphone 15', 1290), createProducts('-66', 'Samsung Galaxy 22', 560),
    createProducts('-75', 'Apple Iphone 15', 1290), createProducts('-76', 'Samsung Galaxy 22', 560),
    createProducts('-85', 'Apple Iphone 15', 1290), createProducts('-86', 'Samsung Galaxy 22', 560),
    createProducts('-95', 'Apple Iphone 15', 1290), createProducts('-96', 'Samsung Galaxy 22', 560),
];

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const priceBodyTemplate = (rowData: any): React.ReactElement => {
    return <div>{formatCurrency(rowData.price)}</div>;
}

const ratingBodyTemplate = (rowData: any): React.ReactElement => {
    return <div>{rowData.rating}</div>;
}

const columnsDef: DataTableColumnDef[] = [
    {field: 'name', headerName: 'Name'},
    {field: 'category', headerName: 'Category'},
    {field: 'price', headerName: 'Price', body: priceBodyTemplate},
    {field: 'quantity', headerName: 'Quantity'},
    {field: 'rating', headerName: 'Rating', body: ratingBodyTemplate},
];

export const DataTableExample: React.FC = () => {

    const initProducts: Product[] = [];

    const [products, setProducts] = useState(initProducts);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((data:any) => setProducts(data));
    }, []);

    const getRows = (filter: DataTableSearchCriteria): any[] => {
        return products.filter(i => i.name.includes(filter.keyword));
    };


    return (
        <div>
            <DataTable
                header={<h1 className="header">Products</h1>}
                nbPerPage={10}
                columnsDef={columnsDef}
                rowsDataSource={getRows}
            >
            </DataTable>
        </div>
    );
}
