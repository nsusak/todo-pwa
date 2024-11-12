<template>
    <div class="p-4 max-w-md mx-auto">
        <h1 class="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <div class="flex items-center mb-4">
            <input v-model="newTask" type="text" placeholder="Add a new task" class="flex-grow p-2 border rounded" />
            <button @click="addTask" class="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                Add
            </button>
        </div>
        <ul>
            <li v-for="(task, index) in tasks" :key="index"
                class="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
                <span>{{ task }}</span>
                <button @click="removeTask(index)" class="text-red-500">
                    Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: '',
            tasks: JSON.parse(localStorage.getItem('tasks')) || []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push(this.newTask.trim());
                this.newTask = '';
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }
};

</script>

<style scoped></style>