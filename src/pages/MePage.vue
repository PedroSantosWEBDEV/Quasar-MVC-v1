<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <div>Hello {{ user.email }}</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser';

export default defineComponent({
  name: 'MePage',
  setup() {
    const { user } = useAuthUser()

    console.log(user)
    return { user }
  }

})
</script>
