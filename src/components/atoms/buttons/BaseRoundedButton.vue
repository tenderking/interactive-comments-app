
<script setup lang="ts">
import { ref } from 'vue';
const btnText = ref("Reply")




</script>
<template>
<div class="container">
    <div class="btn-btn" >
        <h4 :btnText="btnText"> {{btnText}}</h4>
    </div>
</div>
</template>

<style lang="scss">

.btn-btn{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 20px;
background-color: var(--active-color,--primary-300);
border-radius: 8px;
width: fit-content;
&:hover{
    background-color: var(--hover-color,--primary-500);
}
h4{
    text-transform: uppercase;
    color: var(--white);
    font-weight: var(--weight-700);
}
}
</style>