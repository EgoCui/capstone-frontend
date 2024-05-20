<template>
  <my-slot class="home">
    <div class="t-con" v-for="item in stage" :key="item.pgid">
      <h3>On stage now</h3>
      <div class="content">
        <div class="left">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000; width: 200px"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide :img-src="item.image"></b-carousel-slide>
          </b-carousel>
        </div>
        <div class="right" style="margin-left: 50px">
          <h3>
            <router-link to="/previous/4" class="nav-link" style="margin-left: -30px">{{
              item.title
            }}</router-link>
          </h3>

          <p>Contect</p>
          <div>
            {{ item.contents }}
          </div>
          <p style="float: right; margin-top: 50px; ">
            <b-button
              href="https://genesian.sales.ticketsearch.com/sales/salesevent/118719"
              target="_blank"
              variant="outline-primary"
              >Book Now</b-button
            >
            <b-button
              variant="outline-primary"
              v-if="token?.roles == 1"
              @click="handleEdit(item)"
              >Edit</b-button
            >
          </p>
        </div>
      </div>
    </div>
    <div class="t-con">
      <hr>
      <h3>Reviews</h3>
      <p>
       
      </p>
      <div class="card-scroll">
        <b-card class="mb-3">
          <!-- <b-card-img src="@/assets/img/product/product01.jpg"></b-card-img> -->
          <b-card-title>{{ randomItem.title }}</b-card-title>
          <b-card-text class="text-muted">
            <li v-for="(item, index) in randomItem.desc" :key="index">
              {{ item }}
            </li>
          </b-card-text>
<!--          <b-button variant="outline-info" class="d-block ml-auto"-->
<!--            >Learn More</b-button-->
<!--          >-->

          <b-button
            style="float: right; margin-top: 50px"
            variant="outline-primary"
            v-if="token?.roles == 1"
            @click="editModal = !editModal"
            >Edit</b-button
          >
        </b-card>
      </div>
    </div>
    <hr />
    <div class="t-con">
      <h3 class="center">What’s on</h3>
      <br />
      <div>
        <router-link to="/blog" class="nav-link"
          >View full calendar</router-link
        >
      </div>

      <br />
      <div class="img-detail">
        <div v-for="(show, index) in shows" :key="index" class="item">
          <img :src="show.url" alt="show.name" style="width: 200px" />
          <p>
            <router-link :to="show.route" class="nav-link">{{
              show.name
            }}</router-link>
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="t-con" v-for="item in fundraising" :key="item.pgid">
      <div class="content">
        <div class="left">
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.contents }}
          </p>

          <div>
            <router-link to="/fundraising" class="nav-link">Learn more</router-link>
          </div>
          <p style="text-align: left">
            <!-- Add CSS here -->
            <a href="https://genesian.sales.ticketsearch.com/sales/salesdonation/452" target="_blank">
  <b-button style="background-color: yellow; color: red;">Donate</b-button>
</a>

            <b-button
              variant="outline-primary"
              v-if="token?.roles == 1"
              @click="handleEdit(item)"
              >Edit</b-button
            >
          </p>
        </div>

        <div class="right">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000; width: 400px"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide :img-src="item.image"></b-carousel-slide>
          </b-carousel>
        </div>
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
            placeholder="Enter your title"
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
    <div></div>
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
      shows: [
        {
          url: "https://www.genesiantheatre.com.au/s2024/1/images/poster.jpg",
          name: "Love Letters",
          route: "previous/1",
        },
        {
          url: "https://www.genesiantheatre.com.au/s2024/2/images/poster.jpg",
          name: "Plaza Suite",
          route: "previous/2",
        },
        {
          url: "https://www.genesiantheatre.com.au/s2024/3/images/poster.jpg",
          name: "Stranger on a train",
          route: "previous/3",
        },
        {
          url: "https://www.genesiantheatre.com.au/s2024/4/images/poster.jpg",
          name: "Let's Kill Agatha Christie",
          route: "previous/4",
        },
      ],
      list: [
        {
          id: 1,
          icon: require("~/static/img/product/product01.jpg"),
          title: "Season 2024",
          desc: [
            "Love Letters :13th Jan to 28th Jan",
            "Plaza Suite: 3rd Feb to 2nd Mar",
            "Strangers on a Train: 16th Mar to 20th Apr",
            "Let's Kill Agatha Christie:	4th May to 8th Jun",
          ],
        },
        // {
        //   id: 2,
        //   icon: require("~/static/img/product/product02.jpg"),
        //   title: "Season 2025",
        //   desc: [
        //     "Love Letters :13th Jan to 28th Jan",
        //     "Plaza Suite: 3rd Feb to 2nd Mar",
        //     "Strangers on a Train: 16th Mar to 20th Apr",
        //     "Let's Kill Agatha Christie:	4th May to 8th Jun",
        //   ],
        // },
        // {
        //   id: 3,
        //   icon: require("~/static/img/product/product03.jpg"),
        //   title: "Season 2026",
        //   desc: ["Love Letters :13th Jan to 28th Jan" +
        //   "Very beautiful opera, unforgettable!"],
        // },
        // {
        //   id: 4,
        //   icon: require("~/static/img/product/product04.jpg"),
        //   title: "Season 2027",
        //   desc: ["Love Letters :13th Jan to 28th Jan"],
        // },
      ],
      modalShow: false,
      randomItem: {},
      editModal: false,
      stage: [],
      fundraising: [],
      form: {
        title: "",
        contents: "",
        image: "",
      },
      activeItem: {},
    };
  },
  computed: {
    token() {
      // const token = nuxtStorage.localStorage.localStorage.getData("token");
      return this.$store.state.oauth;
    },
  },
  methods: {
    randomize() {
      const randomIndex = Math.floor(Math.random() * this.list.length);
      this.randomItem = this.list[randomIndex];
    },
    async onSubmit1(evt) {
      evt.preventDefault();
      console.log(this.form);
      const res = await this.$axios.post(
        `/page/mod?adminUid=${this.token.uid}`,
        {
          ...this.form,
          pgname: undefined,
        }
      );
      console.log(res);
      if (res) {
        this.getPageList();
        this.editModal = false;
        this.$bvToast.toast(res.data.msg, {
          title: "Submit result",
          variant: "info",
        });
      }
    },
    handleEdit(item) {
      this.form = item;
      console.log(item, "--form");
      this.editModal = !this.editModal;
    },
    async getPageList() {
      const res = await this.$axios.get(`/page/list`);
      this.stage = res.data.data.filter(
        (item) => item.pgname == "home/On stage now"
      );
      this.fundraising = res.data.data.filter(
        (item) => item.pgname == "home/fundraising"
      );
    },
  },
  mounted() {
    this.randomize();
    this.getPageList();
  },
};
</script>

<style lang="scss" scoped>
.yellow-button {
  background-color: #fdae37; // 设置背景色为黄色
  color: #880a0c;
  border-color: #fdae37;
}

.home {
  .t-con {
    margin-bottom: 20px;
    .card-scroll {
      height: 230px;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: hidden;
      overflow-y: auto;
    }
    .img-detail {
      display: flex;
      justify-content: space-between;
      .item {
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    .right {
      .fl-b {
        margin-top: 20px;
        float: right;
      }
    }
  }
}
</style>
