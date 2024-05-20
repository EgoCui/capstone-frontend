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
    </div>
  <b-card
    no-body
    class="overflow-hidden"
    style="width: 100%; margin-top: 20px"
    v-for="item in items"
    :key="item.id"
  >
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img
          :src="item.image"
          alt="Image"
          class="rounded-0"
          style="width: 200px; height: 400px"
        ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body >
          <b-card-text>
            <a :href="item.url" target="_blank" style="color: inherit; text-decoration: none;">
            <h2>{{ item.title }}</h2> 
          </a>
            <p>{{ item.date }}</p>
          </b-card-text>
          <b-button href="https://ticketsearch.queue-fair.net/augenricqueue?target=https%3A%2F%2Fgenesian.sales.ticketsearch.com%2Fsales%2Fsalesevent%2F117362&qfuid=66365539" variant="primary">Book Now</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
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
      {
        id: 1,
        image: "https://www.genesiantheatre.com.au/s2024/4/images/poster.jpg",
        title: "Love Letters",
        date: "13th Jan to 28th Jan",
        url: "http://localhost:3000/previous/1"
      },
      {
        id: 2,
        image: "https://www.genesiantheatre.com.au/s2024/2/images/poster.jpg",
        title: "Plaza Suite",
        date: "3rd Feb to 2nd Mar",
        url: "http://localhost:3000/previous/2"
      },
      {
        id: 3,
        image: "https://www.genesiantheatre.com.au/s2024/3/images/poster.jpg",
        title: "Strangers on a Train",
        date: "16th Mar to 20th Apr",
        url: "http://localhost:3000/previous/3"
      },
      {
        id: 4,
        image: "https://www.genesiantheatre.com.au/s2024/4/images/poster.jpg",
        title: "Let's Kill Agatha Christie",
        date: "4th May to 8th Jun",
        url: "http://localhost:3000/previous/4"
      },
      {
        id: 5,
        image: "https://www.genesiantheatre.com.au/s2024/5/images/poster.jpg",
        title: "Hay Fever",
        date: "22nd Jun to 27th Jul",
        url: "http://localhost:3000/previous/89"
      },
  
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
      const res = await this.$axios.get(`/page/list`);
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
        `/page/mod?adminUid=${this.token.uid}`,
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
