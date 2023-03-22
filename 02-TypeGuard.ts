// type CarBrand = 'BMW' | 'Lada';
//
// interface CarBase {
//     year: number;
//     brand: CarBrand;
// }
//
// interface BMWBase extends CarBase {
//     brand: 'BMW';
//     climateControl: boolean;
//     model: 'X5' | 'X6';
// }
//
// interface BMWx5 extends BMWBase {
//     model: 'X5';
//     value: string;
// }
//
// interface BMWx6 extends BMWBase {
//     model: 'X6';
//     value: number;
// }
//
// type BMW = BMWx5 | BMWx6;
//
// interface LadaBase extends CarBase {
//     brand: 'Lada';
//     conditioner?: boolean;
//     model: 'Vesta' | 'Granta';
// }
//
// interface LadaVesta extends LadaBase {
//     model: 'Vesta';
//     conditioner?: boolean;
// }
//
// interface LadaGranta extends LadaBase {
//     model: 'Granta';
//     conditioner?: boolean;
// }
//
// type Lada = LadaVesta | LadaGranta;
//
//
// type Car = BMW | Lada;
//
// // TODO: добавляем Type Guard для BMWx5 и тд
// function isBMWx5(car: Car): car is BMWx5 {
//     return car.brand === 'BMW' && car.model === 'X5';
// }
//
// function isLadaVesta(car: Car): car is LadaVesta {
//     return car.brand === 'Lada' && car.model === 'Vesta';
// }
//
// // function fn(car: Car) {
// //     if (car.brand === 'BMW' && car.model === 'X5') {
// //         car.model; // 'X5'
// //     }
// // }
//
// function fn(car: Car) {
//     if (isBMWx5(car)) {
//         car.model; // 'X5'
//     } else if (isLadaVesta(car)) {
//         car.model; // 'Vesta'
//     }
// }