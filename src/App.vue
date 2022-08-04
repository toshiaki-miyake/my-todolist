<script setup>
  import AppHeader from './components/AppHeader.vue'
  import TodoList from './components/TodoList.vue'
  import { ref } from 'vue'

  const todosArr = ref([])
  const textAreaArr = ref([])
  const newTodo = ref('')
  const newText = ref('')
  let i = ref(0)

  const addTodo = (index) => {
    // input入力を保存
    if(newTodo.value.length > 0){
      todosArr.value.push(newTodo.value)
      newTodo.value = ''

      document.getElementById('detailTitle').innerHTML = todosArr.value[index]
      document.getElementsByClassName('detail')[0].style.display = "none"
    }
  }
  const removeTodo = (index) => {
    todosArr.value.splice(index, 1)
    document.getElementsByClassName('detail')[0].style.display = "none"
  }
  const openDetail = (index) => {
    document.getElementById('detailTitle').innerHTML = todosArr.value[index]
    
    // テキスト空の時対応
    if(textAreaArr.value[index] === undefined) {
      document.getElementById('detailText').value = ""
    } else {
      document.getElementById('detailText').value = textAreaArr.value[index]
    }
    
    i = index
    document.getElementsByClassName('detail')[0].style.display = "block";
  }
  const textAreaSave = (index) => {
    // 配列を上書き
    textAreaArr.value.splice(i, 1, document.getElementsByClassName('detail_text')[0].value)
  }
</script>

<template>
  <AppHeader color="yellow">My ToDo</AppHeader>
  <div class="input-wrap">
      <input type="text" size="30" id="inputText" v-model="newTodo">
      <button @click="addTodo()" style="cursor: pointer;">追加</button>
  </div>
  <TodoList :todosArr="todosArr" :textAreaArr="textAreaArr" @removeTodo="removeTodo" @openDetail="openDetail" @textAreaSave="textAreaSave" />
</template>