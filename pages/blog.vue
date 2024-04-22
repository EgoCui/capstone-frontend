<template>
  <my-slot class="home">
    <div class="container">
      <div style="display: flex">
        <h3 style="margin-right: 100px">What’s on at the Genesian</h3>
        <b-button @click.stop="modalShow = !modalShow">View Calendar</b-button>
      </div>

      <b-modal v-model="modalShow" hide-footer centered title="Calender">
        <b-calendar
          v-model="value"
          @context="onContext"
          locale="en-US"
          width="470px"
        ></b-calendar>
      </b-modal>
      <div style="margin-top: 20px">
        <b-card
          no-body
          class="overflow-hidden"
          style="width: 100%; margin-top: 20px"
          v-for="item in 3"
          :key="item"
        >
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/200/200/?image=20"
                alt="Image"
                class="rounded-0"
                style="width: 400px; height: 200px"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Name of show">
                <b-card-text>
                  <p>Excerpt goes here</p>
                  Synopsis of show taken from first paragraph of post with a
                  click more/expand option
                </b-card-text>
                <b-button href="#" variant="primary">Book Now</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
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
      modalShow: false,
      value: "",
      context: null,
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
    onContext(ctx) {
      this.context = ctx;
    },
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
}
</style>
