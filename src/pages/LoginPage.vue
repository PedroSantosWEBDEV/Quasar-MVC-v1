<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlerLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Email"
          type="email"
          v-model="form.email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Email is required']"
        />
        <q-input
          type="password"
          label="Password"
          v-model="form.password"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length >= 6) ||
              'Password is required and 6 characters',
          ]"
        />
        <div class="full-width q-pt-md">
          <q-btn
            class="full-width"
            label="Login"
            color="primary"
            rounded
            outlined
            type="submit"
          />
        </div>
        <div class="full-width q-gutter-y-sm">
          <q-btn
            class="full-width"
            label="Register"
            color="red"
            flat
            to="/register"
            size="sm"
          />
          <q-btn
            class="full-width"
            label="Forgot Password ?"
            color="primary"
            flat
            :to="{ name: 'forgot-password' }"
            size="sm"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import useAuthUser from "src/composables/UseAuthUser";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const router = useRouter();

    const { login, isLoggedIn } = useAuthUser();

    const { notifyError, notifySuccess } = useNotify();

    const form = ref({
      email: "",
      password: "",
    });

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: "me" });
      }
    });

    const handlerLogin = async () => {
      try {
        await login(form.value);
        notifySuccess("Login successfully!");
        router.push({ name: "me" });
      } catch (error) {
        // debugger;
        notifyError(error.message);
        // alert(error.message);
      }
    };

    return { form, handlerLogin };
  },
});
</script>
