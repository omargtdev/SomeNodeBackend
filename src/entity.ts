export interface User {
    UserID: number,
    Username: string,
    Password: string
}

export interface Slider {
    SliderID: number,
    Image: string,
    Title: string,
    Description: string
}

export interface Category {
    CategoryID: number,
    Name: string,
    Description: string
}

export interface Product {
    ProductID: number,
    Name: string,
    Description: string,
    ImageUrl: string,
    Price: number,
    CategoryID: number
}