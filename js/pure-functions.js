const users = [
    {
      name: "Alex",
      eyeColor: "blue",
      gender: "M",
      isActive: true,
      email: "alex12@gmail.com",
      age: 12
    },
    {
      name: "Lara",
      eyeColor: "green",
      gender: "W",
      isActive: true,
      email: "lara20@gmail.com",
      age: 20
    },
    {
      name: "Maxi",
      eyeColor: "blue",
      gender: "M",
      isActive: false,
      email: "maxi21@gmail.com",
      age: 21
    },
    {
      name: "Noah",
      eyeColor: "brown",
      gender: "M",
      isActive: true,
      email: "noah20@gmail.com",
      age: 20
    },
  ];

  const namesOfUsers = (users) => users.map((user) => user.name);
  console.log(namesOfUsers(users));

  const usersEyeColor = (users, eyeColor) =>
    users.filter((user) => user.eyeColor === eyeColor);
  console.log(usersEyeColor(users, "blue"));

  const usersGender = (users, gender) =>
    users.filter((user) => user.gender === gender);
  console.log(usersGender(users, "M"));

  const notActiveUsers = (users, isActive) =>
    users.filter((user) => user.isActive === isActive);
  console.log(notActiveUsers(users, false));

  const userEmail = (users, email) =>
    users.find((user) => user.email === email);
  console.log(userEmail(users, "lara20@gmail.com"));

  const userAge = (users, min, max) =>
    users.filter((user) => min < user.age && user.age < max);
  console.log(userAge(users, 18, 25));