function addFilters(env) {
  // Custom filter to filter pages by a dynamic attribute and value
  env.addFilter(
    "filterAttribute",
    (collection, attributeName, attributeValue) => {
      return collection.filter((item) => {
        // Access the attribute by name and compare it to the desired value
        return item.data[attributeName] === attributeValue;
      });
    }
  );
}

module.exports = { addFilters };
