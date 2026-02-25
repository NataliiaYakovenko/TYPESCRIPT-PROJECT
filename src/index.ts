enum Accesslevel {
  Guest = "Guest",
  User = "User",
  Moderator = "Moderator",
  Admin = "Admin",
}

const currentLevel: Accesslevel = Accesslevel.Moderator;
console.log(currentLevel)