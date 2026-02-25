var Accesslevel;
(function (Accesslevel) {
    Accesslevel["Guest"] = "Guest";
    Accesslevel["User"] = "User";
    Accesslevel["Moderator"] = "Moderator";
    Accesslevel["Admin"] = "Admin";
})(Accesslevel || (Accesslevel = {}));
const currentLevel = Accesslevel.Moderator;
console.log(currentLevel);
