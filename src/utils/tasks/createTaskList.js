function createTaskList(array) {
  const map = new Map();
  array.forEach((task) => {
    map.set(task.id, task);
  });
  return map;
}
module.exports = { createTaskList };
