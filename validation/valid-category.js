const categories = ["Salary", "Food", "Transport", "House", "Other"];

const validCategory = str => {
  return categories.includes(str);
}

module.exports = validCategory;