<template>
  <my-slot class="home">
    <div class="container">
      <b-form inline @submit="onSubmit" @reset="onReset">
        <label class="mr-sm-2" for="inline-form-input-year">Year</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            id="inline-form-input-year"
            placeholder="Year"
            v-model="form.year"
          ></b-input>
        </b-input-group>

        <b-button type="submit" variant="primary" style="margin: 0 5px"
          >Search</b-button
        >
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <p></p>
      <b-list-group>
        <b-list-group-item
          v-for="(ite, index) in items"
          :key="index"
          :href="`/share/${ite.year}`"
          >{{ ite.year }}</b-list-group-item
        >
      </b-list-group>
    </div>
  </my-slot>
</template>

<script>
import MySlot from "@/components/slot/index";
export default {
  components: {
    MySlot,
  },
  data() {
    return {
      items: [
        { year: "2021", link: "" },
        { year: "2022", link: "" },
        { year: "2023", link: "" },
        { year: "2024", link: "" },
      ],
      form: {
        year: "",
        name: "",
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.year = "";
      this.form.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100% - 382px);
}
</style>
