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
          width="100px"
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

                <b-button
                  variant="outline-primary"
                  v-if="token?.roles == 1"
                  @click="editModal = !editModal"
                  >Edit</b-button
                >

                <b-button href="#" variant="primary">Book Now</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <b-modal v-model="editModal" centered title="Edit">
      <b-form @submit="onSubmit1">
        <b-form-group label="Title:" label-for="title">
          <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            required
            placeholder="Enter your title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="image:" label-for="image">
          <b-form-input
            id="image"
            v-model="form.image"
            type="text"
            required
            placeholder="Enter your image"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="contents:" label-for="contents">
          <b-form-textarea
            id="contents"
            v-model="form.contents"
            type=""
            required
            rows="3"
            max-rows="6"
            placeholder="Enter your contents"
          ></b-form-textarea>
        </b-form-group>
        <p style="text-align: center">
          <b-button type="submit" block variant="primary">Submit</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </p>
      </b-form>
      <template v-slot:modal-footer>
        <div class="w-100"></div>
      </template>
    </b-modal>
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
      editModal: false,
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
        title: "",
        contents: "",
        image: "",
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
  computed: {
    token() {
      // const token = nuxtStorage.localStorage.localStorage.getData("token");
      return this.$store.state.oauth;
    },
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
    async getPageList() {
      const res = await this.$axios.get(`/api/page/list`);
      this.trainingList = res.data.data.filter(
        (item) => item.pgname == "training"
      );
    },
    handleEdit(item) {
      this.form.title = item.title;
      this.form.contents = item.contents;
      this.form.image = item.image;
      this.form.pgid = item.pgid;
      this.editModal = !this.editModal;
    },
    async onSubmit1(evt) {
      evt.preventDefault();
      console.log(this.form);
      const res = await this.$axios.post(
        `/api/page/mod?adminUid=${this.token.uid}`,
        {
          pgid: this.form.pgid,
          title: this.form.title,
          contents: this.form.contents,
          image: this.form.image,
        }
      );
      console.log(res);
      if (res) {
        this.getPageList();
        this.editModal = false;
        this.$bvToast.toast(res.data.msg, {
          title: "提交结果",
          variant: "info",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
