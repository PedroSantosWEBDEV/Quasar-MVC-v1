<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlerRegister">
      <p class="col-12 text-h5 text-center">Register</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Name"
          v-model="form.name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Name is required']"
        />
        <q-input
          type="email"
          label="Email"
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
        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            class="full-width"
            label="Register"
            color="red"
            rounded
            outlined
            type="submit"
          />
          <q-btn
            class="full-width"
            label="Back"
            color="dark"
            rounded
            flat
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import useNotify from "src/composables/UseNotify";

export default defineComponent({
  name: "RegisterPage",

  setup() {
    const router = useRouter();

    const { register } = useAuthUser();

    const { notifyError, notifySuccess } = useNotify();

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handlerRegister = async () => {
      try {
        await register(form.value);
        notifySuccess();
        router.push({
          name: "email-confirmation",
          query: { email: form.value.email },
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    return { form, handlerRegister };
  },
});
</script>
