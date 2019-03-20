/* eslint-disable no-restricted-syntax */
export default function sortBy(obj) {
  const result = [];
  let properties = [];
  // eslint-disable-next-line no-return-assign
  return (orderBy) => {
    for (const prop in obj) {
      if (!orderBy.includes(prop)) {
        properties.push(prop);
      }
    }
    properties.sort();
    properties = orderBy.concat(properties);
    for (const prop of properties) {
      result.push({ key: prop, value: obj[`${prop}`] });
    }
    return result;
  };
}
