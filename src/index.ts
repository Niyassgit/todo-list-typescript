import { TodoItem, Priority } from "./todo";

let todos: TodoItem[] = [];
let nextId = 1;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form') as HTMLFormElement | null;
    const input = document.getElementById('ts_2do') as HTMLInputElement | null;
    const table = document.getElementById('table') as HTMLTableElement | null;

    // Check for the existence of necessary DOM elements
    if (!form || !input || !table) {
        console.error('Required DOM elements are missing.');
        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text === '') return;
        console.log(text);

        const priority = detectPriority(text);
        const todo: TodoItem = {
            id: nextId++,
            text: text.replace(/#\d/, '').trim(),
            priority,
            completed: false
        };

        todos.push(todo);
        renderTodos();  // Rendering after adding the new todo
        input.value = '';
    });

 function detectPriority(text: string): Priority {
    if (text.startsWith('1')) return Priority.High;    
    if (text.startsWith('2')) return Priority.Medium;  
    if (text.startsWith('3')) return Priority.Low;     
    return Priority.Low;  
}
    function renderTodos() {
        if (!table) return;  // Make sure table exists before updating

        table.innerHTML = todos.map(todo => `
            <tr class="${todo.completed ? 'done' : ''}">
                <td><input type="checkbox" data-id="${todo.id}" ${todo.completed ? 'checked' : ''}></td>
                <td>${todo.text} (Priority: ${Priority[todo.priority]})</td>
                <td><button data-id="${todo.id}" class="delete-btn">Delete</button></td>
            </tr>
        `).join('');

        attachEventListeners();  // Attaching event listeners after rendering
    }

    function attachEventListeners() {
        if (!table) return;  // Guard clause to ensure table exists

        table.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', (e) => {
                const id = Number((e.target as HTMLInputElement).dataset.id);
                toggleTodo(id);
            });
        });

        table.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = Number((e.target as HTMLButtonElement).dataset.id);
                deleteTodo(id);
            });
        });
    }

    function toggleTodo(id: number) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            renderTodos();  // Re-render todos after toggling completion
        }
    }

    function deleteTodo(id: number) {
        todos = todos.filter(t => t.id !== id);
        renderTodos();  // Re-render todos after deleting
    }
});
