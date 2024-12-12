<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h1>Login</h1>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <div v-if="alertMessage" :class="['alert', alertClass]">{{ alertMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      alertMessage: '',
      alertClass: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/auth/login', {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem('token', response.data.access_token);
        this.alertMessage = 'Login successful!';
        this.alertClass = 'success';
        this.$router.push('/tasks');
      } catch (error) {
        this.alertMessage = 'Login failed. Please try again.';
        this.alertClass = 'error';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
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
