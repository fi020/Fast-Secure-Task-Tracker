<template>
  <div class="task-form">
    <form @submit.prevent="addTask">
      <input v-model="title" placeholder="Task Title" />
      <input v-model="description" placeholder="Task Description" />
      <button type="submit">Add Task</button>
    </form>
    <div v-if="alertMessage" :class="['alert', alertClass]">{{ alertMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TaskForm',
  data() {
    return {
      title: '',
      description: '',
      alertMessage: '',
      alertClass: ''
    };
  },
  methods: {
    async addTask() {
      try {
        await axios.post('/tasks', {
          title: this.title,
          description: this.description,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        this.alertMessage = 'Task added successfully!';
        this.alertClass = 'success';
        this.$emit('task-added');
        this.title = '';
        this.description = '';
      } catch (error) {
        this.alertMessage = 'Failed to add task. Please try again.';
        this.alertClass = 'error';
      }
    },
  },
};
</script>

<style scoped>
.task-form {
  background: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

input {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  width: 100%;
}

button {
  background-color: #444;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
}

button:hover {
  background-color: #555;
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
