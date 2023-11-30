let todoList = [
  {
    id: "todo-1",
    title: "Meeting with Disha",
    body: "I have to join a meeting today at 7:00 P.M to brain storming",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Work",
    completed: false,
    archived: false,
  },
  {
    id: "todo-2",
    title: "Slicing Admission Menu",
    body: "Link Design Figma : https://lorem",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Work",
    completed: false,
    archived: false,
  },
  {
    id: "todo-3",
    title: "Meeting with Reza",
    body: "I have to join a meeting today at 10:00 A.M to brain storming",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Intern",
    completed: false,
    archived: false,
  },
  {
    id: "todo-4",
    title: "Meeting with Disha",
    body: "I have to join a meeting today at 7:00 P.M to brain storming",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Work",
    completed: false,
    archived: false,
  },
  {
    id: "todo-5",
    title: "Slicing Admission Menu",
    body: "Link Design Figma : https://lorem",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Work",
    completed: false,
    archived: false,
  },
  {
    id: "todo-6",
    title: "Meeting with Reza",
    body: "I have to join a meeting today at 10:00 A.M to brain storming",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Intern",
    completed: false,
    archived: false,
  },
  {
    id: "todo-7",
    title: "Meeting with Disha",
    body: "I have to join a meeting today at 7:00 P.M to brain storming",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Work",
    completed: false,
    archived: false,
  },
  {
    id: "todo-8",
    title: "Slicing Admission Menu",
    body: "Link Design Figma : https://lorem",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Work",
    completed: false,
    archived: false,
  },
  {
    id: "todo-9",
    title: "Meeting with Reza",
    body: "I have to join a meeting today at 10:00 A.M to brain storming",
    createdAt: "2022-04-14T04:27:34.572Z",
    reminderAt: "2022-04-14T04:27:34.572Z",
    category: "Intern",
    completed: false,
    archived: false,
  },
];

function getAllTodoList() {
  return todoList;
}

function getTodo(id) {
  const foundedTodo = todoList.find((todo) => todo.id === id);
  return foundedTodo;
}

function getUncompletedTodo() {
  const uncompletedTodo = todoList.filter((todo) => !todo.completed);
  return uncompletedTodo;
}

function getCompletedTodo() {
  const completedTodo = todoList.filter((todo) => todo.completed);
  return completedTodo;
}

function getActiveTodo() {
  const activeTodo = todoList.filter((todo) => !todo.archived);
  return activeTodo;
}

function getArchivedTodo() {
  const archivedTodo = todoList.filter((todo) => todo.archived);
  return archivedTodo;
}

function addTodo({ title, body, reminderAt, category }) {
  notes = [
    ...notes,
    {
      id: `todo-${+new Date()}`,
      title: title || "(untitled)",
      body,
      createdAt: new Date().toISOString(),
      reminderAt: reminderAt.toISOString(),
      category: category,
      completed: false,
      archived: false,
    },
  ];
}

function deleteTodo(id) {
  todos = todoList.filter((todo) => todo.id !== id);
}

// function archiveTodo(id) {
//   todos = todoList.map((todo) => {
//     if (todo.id === id) {
//       return { ...todo, archived: true };
//     }
//     return todo;
//   });
// }

// function unarchiveNote(id) {
//   notes = notes.map((note) => {
//     if (note.id === id) {
//       return { ...note, archived: false };
//     }

//     return note;
//   });
// }

// function editNote({ id, title, body }) {
//   const noteToEdit = notes.find((note) => note.id === id);
//   noteToEdit.title = title;
//   noteToEdit.body = body;

//   notes = notes.map((note) => {
//     if (note.id === id) {
//       return note;
//     }
//     return note;
//   });
// }

export { getAllTodoList };
