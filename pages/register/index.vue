<template>
  <a-card>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Name">
        <a-input
          v-decorator="[
            'name',
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </a-form-item>
      <a-form-item label="Last name">
        <a-input
          v-decorator="[
            'lastname',
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </a-form-item>

      <a-form-item label="E-mail">
        <a-input
          v-decorator="[
            'email',
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </a-form-item>

      <a-form-item label="Password">
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit"> Submit </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
};
</script>

<style></style>
