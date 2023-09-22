class Task {
    constructor(id, name, description, creationDate, completed) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.creationDate = creationDate;
      this.completed = completed;
    }
  }
  
  module.exports = Task;