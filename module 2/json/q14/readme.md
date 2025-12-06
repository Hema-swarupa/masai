# Enhanced Todo List with localStorage and Search

## Features
- Add tasks to the list.
- Mark tasks as completed (strikethrough style).
- Delete tasks.
- Search tasks in real-time using the search bar.
- All tasks are saved in localStorage as a JSON array.
- Each task has:
  - Unique ID
  - Text
  - Completion status

## How It Works
- On page load, tasks are loaded from localStorage.
- When a new task is added, it is stored with a unique ID and saved again.
- Clicking a task toggles its “completed” status.
- The search bar filters tasks while typing.
- Deleting a task removes it from the array and localStorage.

## Files
- `index.html` → Contains the full Todo App.
- `README.md` → This instructions file.

## How to Use
1. Type a task in the input box and click **Add Task**.
2. Click a task to mark it **completed**.
3. Click **Delete** to remove a task.
4. Use the **search bar** to filter tasks.
5. Refresh the page — your tasks stay saved!

