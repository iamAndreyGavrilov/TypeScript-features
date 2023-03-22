type CarBrand = 'BMW' | 'Lada' | 'Toyota';

interface CarBase {
    brand: CarBrand;
    year: number;
}

interface BMW extends CarBase {
    brand: 'BMW';
    climateControl: boolean;
}

interface Lada extends CarBase {
    brand: 'Lada';
    conditioner?: boolean;
}

interface Toyota extends CarBase {
    brand: 'Toyota';
    climateControl?: boolean;
}

type Car = BMW | Lada | Toyota;

// TODO Проверка на полноту обработки всех вариантов
function exhaustiveCheck(value: never): never {
    console.log(value)
    throw new Error(`Обработайте значение: ${value}`);
}

function getCar(brand: CarBrand, year: number): Car {
    switch (brand) {
        case 'BMW':
            return {
                brand,
                year,
                climateControl: true,
            };
        case 'Lada':
            return {
                brand,
                year,
                conditioner: true,
            };
        // case 'Toyota':
        //     return {
        //         brand,
        //         year,
        //         climateControl: true,
        //     }
        default: {
             exhaustiveCheck(brand);
        }
    }
}