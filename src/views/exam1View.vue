<template>
  <div id="app" class="container">
    <h1>Exam1</h1>
    <div class="box-container">
      <div v-for="(todo, index) in todos" :key="index" class="box">
        <table>
          <tr>
            <td>{{ todo.name }}</td>
          </tr>
        </table>
      </div>
    </div>

    <input type="text" v-model="name" />
    <button type="button" @click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  name: "exam1View",
  data() {
    return {
      todos: [
        { name: "zero" },
        { name: "one" },
        { name: "two" }
      ],
      name: ""
    };
  },
  methods: {
    addTodo() {
      if (this.name.trim() !== "") {
        this.todos.push({ name: this.name });
        this.name = "";
      }
    }
  }
};
</script>

<style scoped>
#app {
  padding: 30px;
  margin: 50px auto;
  width: 500px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}

h1 {
  border-bottom: 1px solid white;
  margin-bottom: 10px;
}

.box-container {
  display: flex;
  flex-wrap: nowrap; /* 수정된 부분 */
  justify-content: center; /* 가로 중앙 정렬 */
}

.box {
  padding: 10px;
  border: 1px solid white;
  box-shadow: 3px 3px 3px white;
  margin: 5px;
  width: calc(33.33% - 10px);
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  background-color: white;
  text-align: center;
}

td {
  border: 1px solid gray;
  padding: 6px;
}

input[type="text"] {
  padding: 5px;
  margin-right: 5px;
  width: 200px;
}

button {
  padding: 0.4em 1em;
  margin-right: 5px;
  cursor: pointer;
}
</style>
