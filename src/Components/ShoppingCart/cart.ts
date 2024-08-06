export interface IProducts {
    id: string,
    name: string,
    flavors: string[],
    dip: string[],
    topping: string[],
}

export const products: IProducts[] = [
    {
        id: 'jajahag8236jaa',
        name: 'Pote 1/2 kg',
        flavors: [
            'banana',
            'chocolate',
            'frutilla',
        ],
        dip: [
            'chocolate'
        ],
        topping: [
            'mogul',
            'roclets'
        ],

    }
]
