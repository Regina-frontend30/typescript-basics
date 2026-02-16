interface Car {
    model: string;
    price: number;
    dynamic_1: Record<string, string>;
    dynamic_2: { [key: string]: string };
    turple: [string, number, string]; 
}