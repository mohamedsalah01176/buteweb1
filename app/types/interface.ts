export interface Client{
    imageUrl:string,
    alt: string,
}
export interface Card{
    imageUrl:string,
    title:string,
    description:string,
}

export interface PartFeature extends Card{
    isreverse:boolean,
}

export interface Pricing{
    title:string,
    description:string,
    priceM:number,
    priceY:number,
    array:string[],
    isMostPopular:boolean
}

export interface Testimonail extends Card{
    review:string
}