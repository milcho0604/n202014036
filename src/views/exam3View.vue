<template>
    <div class="exam1">
      <h1>Exam3</h1>
      <div class="input-container">
        <input type="text" v-model="message" />
      </div>
      <MyMessage :message="message" />
    </div>
  </template>
  
  <script>
  import MyMessage from "@/components/MyMessage.vue";
  
  export default {
    name: "exam3View",
    data() {
      return {
        message: ""
      };
    },
    components: {
      MyMessage
    }
  };
  </script>
  
  <style scoped>
  .exam1 {
    padding: 30px;
    margin: 30px auto;
    width: 400px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #aaa;
    text-align: center;
  }
  
  .input-container {
    margin-bottom: 20px;
  }
  
  input {
    padding: 8px;
    width: 60%;
    margin-right: 10px;
  }
  </style>
  