<script setup lang="ts">
import { supabase } from "../supabase"
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const userName = ref('')
onMounted(async () => {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
        console.error('Supabase getUser error:', error.message);
    } else if (data) {
        console.log(data.user.user_metadata.userName);
        console.log(data.user);

        userName.value = data.user.user_metadata.userName
    }    
})

const signout = async () => {
    console.log('sign out called!');
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Sign out error:', error.message);
    } else {
        console.log('Sign out successful!');
        router.push({
            name: 'SignIn',
            query: { signout: 'true' }
        });
    }
}

</script>
<template>
    <div>
        これはホーム
        {{ userName }}
        <button @click="signout"
            class="bg-cyan-300 py-2 px-4 rounded-md font-bold hover:bg-cyan-200 transition-all duration-200">signout</button>
    </div>
</template>