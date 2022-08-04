<script setup>
  // Propsで親コンの変数が使える
  defineProps(['todosArr', 'textAreaArr'])
  const emit = defineEmits(['removeTodo', 'openDetail', 'bar'])
  const clickRemove = (i) => emit('removeTodo', i)
  const clickDetail = (i) => emit('openDetail', i)
  const barTextAreaSave = () => emit('textAreaSave')
</script>

<template>
  <ul v-if="todosArr.length> 0" id="elemUl">
    <li v-for="(todo, i) in todosArr" v-bind:key="i"><span class="title" @click="clickDetail(i)">{{ todo }}</span><span class="close" @click="clickRemove(i)">x</span></li>
  </ul>
  <p v-else class="notice">※ ToDoを追加してください</p>

  <div class="detail">
    <p class="detail_title" id="detailTitle"></p>
    <textarea @blur="barTextAreaSave()" name="" class="detail_text" id="detailText" cols="30" rows="10"></textarea>
  </div>
</template>