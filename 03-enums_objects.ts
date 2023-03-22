// const enum UserRole {
//     USER = "user",
//     ADMIN = "admin",
// }
// enum UserRoles{
//     USER = "user",
//     ADMIN = "admin",
// }
//
// // const enum - нельзя инициализировать объектом и к примеру пройтись по ключам, а обычный enum можно
// for (const role in UserRole) {
//     console.log(role);
// }

// ===================================

// enum попадает в сборку и может выстрелить в ногу
// такой подход удобен для тестов, сторибуков.

// as const - не дает изменять значения
const UserRole = {
    ADMIN: "admin",
    USER: "user",
} as const;

// через keyof получаем типы ключей
type UserRole = typeof UserRole[keyof typeof UserRole];

function checkRole(role: UserRole) {
    console.log(role);
}

checkRole(UserRole.USER)

