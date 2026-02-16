interface CarUtility {
    model: "bmw";
    dynamic_1: boolean;
    tuple: [number, number];
    optionalFeature?: string;
}


type PickDynamic1 = Pick<CarUtility, "dynamic_1">;


type OmitTuple = Omit<CarUtility, "tuple">;


type AllRequired = Required<CarUtility>;


type UpperModel = Uppercase<CarUtility["model"]>;


type PartialCar = Partial<CarUtility>;


const car: CarUtility = {
    model: "bmw",
    dynamic_1: true,
    tuple: [1, 2],
};


const dynamicOnly: PickDynamic1 = {
    dynamic_1: car.dynamic_1,
};


const withoutTuple: OmitTuple = {
    model: car.model,
    dynamic_1: car.dynamic_1,
};


const requiredCar: AllRequired = {
    model: "bmw",
    dynamic_1: true,
    tuple: [3, 4],
    optionalFeature: "GPS",
};


const upperModel: UpperModel = "BMW";


const partialCar: PartialCar = {
    model: "bmw",
};
