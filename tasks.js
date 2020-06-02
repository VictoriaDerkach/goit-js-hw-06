import users from './users.js';

// Task - 1
console.log('Task-1');

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

// Task - 2
console.log('Task-2');

const getUsersWithEyeColor = (users, color) => {
  return getUserNames(users.filter(user => user.eyeColor === color));
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Task - 3
console.log('Task-3');

const getUsersWithGender = (users, gender) => {
  return getUserNames(users.filter(user => user.gender === gender));
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Task - 4
console.log('Task-4');

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Task - 5
console.log('Task-5');

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Task - 6
console.log('Task-6');

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age <= max && user.age >= min);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Task - 7
console.log('Task-7');

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916

// Task - 8
console.log('Task-8');

const getUsersWithFriend = (users, friendName) => {
  return getUserNames(users.filter(user => user.friends.includes(friendName)));
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task - 9
console.log('Task-9');

const getNamesSortedByFriendsCount = users => {
  return getUserNames(
    users.sort((a, b) => a.friends.length - b.friends.length),
  );
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Task - 10
console.log('Task-10');
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => {
      user.skills.forEach(element => {
        if (!allSkills.includes(element)) {
          allSkills.push(element);
        }
      });
      return allSkills;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
