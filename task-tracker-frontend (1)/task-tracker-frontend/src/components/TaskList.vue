<template>
  <div class="task-list">
    <h1>Your Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task._id">{{ task.title }} - {{ task.description }}</li>
    </ul>
    <TaskForm @task-added="fetchTasks" />
    <div v-if="alertMessage" :class="['alert', alertClass]">{{ alertMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import TaskForm from './TaskForm.vue';

export default {
  name: 'TaskList',
  components: {
    TaskForm,
  },
  data() {
    return {
      tasks: [],
      alertMessage: '',
      alertClass: ''
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('/tasks', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        this.tasks = response.data;
      } catch (error) {
        this.alertMessage = 'Failed to fetch tasks. Please try again.';
        this.alertClass = 'error';
      }
    },
  },
};
</script>

<style scoped>
.task-list {
  background: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #333;
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

.alert {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
}

.success {
  background-color: #4caf50;
  color: white;
}

.error {
  background-color: #f44336;
  color: white;
}
</style>
