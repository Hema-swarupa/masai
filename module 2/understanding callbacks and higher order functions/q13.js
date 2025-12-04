function groupAndSortCategories(categories) {
  const counts = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return { counts, sortedCategories };
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
console.log(groupAndSortCategories(input));
