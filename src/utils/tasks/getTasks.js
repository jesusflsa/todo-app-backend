function getTasks(map) {
  const tasks = [];
  map.forEach((value, key, map) => {
    const { id, content, done } = value;
    tasks.push({ id, content, done });
  });
  return tasks;
}

module.exports = { getTasks };
