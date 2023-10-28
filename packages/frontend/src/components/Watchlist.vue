<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const accounts = ref([])

onMounted(async () => {
    const response = await axios.get('https://algotestapi-e00d0799d4d9.herokuapp.com/api/watchlist');
    accounts.value = response.data;
})
</script>

<template>
    <div>
        <h1>Watchlist</h1>
        <ul>
            <li v-for="account in accounts">
                {{ account }}
            </li>
        </ul>
        <form>
            <input type="text" placeholder="Add a new account" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>