export interface IPoster {
    title1:string,
    title2:string,
    subtitle:string,
    button:string
}

export interface IWarning {
    text:string
}

export interface IGallery {
    title:string,
    subtitle:string,
    dumpsters:IDumpster[],
    moreInfo:string
}

export interface IDumpster {
    model: string,
    price: string,
}

export interface IAbout {
    title: string,
    text: string
}

export interface IContact {
    title:string,
    name:string,
    phone:string,
    mail:string,
    button:string,
}

export interface INavabar {
    home:string,
    about:string,
    gallery:string,
    contact:string
}