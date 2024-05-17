<template>
    <div class="output-container">
      <p v-if="message">{{ message }}</p>
      <p v-else> </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String
    }
  };
  </script>
  
  <style scoped>
  .output-container {
    background-color: yellow;
    padding: 15px;
    height: 30px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  p {
    margin: 0;
  }
  
  p:not(:last-child) {
    margin-bottom: 10px;
  }
  </style>
  