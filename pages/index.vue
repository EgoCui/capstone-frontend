<template>
  <my-slot class="home">
    <div class="t-con">
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
            <b-carousel-slide
              img-src="https://www.genesiantheatre.com.au/s2024/4/images/poster.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <div class="right">
          <h3>
            <router-link to="/previous/4" class="nav-link"
              >Let's Kill Agatha Christie</router-link
            >
          </h3>

          <p>Contect</p>
          <div>
            In an hilarious take on the murder mystery genre, an unsuccessful
            writer decides to secure her own place as a literary legend by
            staging her own murder. She invites her three worst enemies for a
            weekend and gives them all a good reason to kill her.
          </div>
          <p style="float: right; margin-top: 50px">
            <b-button
              href="https://genesian.sales.ticketsearch.com/sales/salesevent/118719"
              target="_blank"
              variant="outline-primary"
              >Book Now</b-button
            >
            <b-button
              variant="outline-primary"
              v-if="token?.roles == 1"
              @click="editModal = !editModal"
              >Edit</b-button
            >
          </p>
        </div>
      </div>
    </div>
    <div class="t-con">
      <h3>Reviews</h3>
      <p>
        Pull quote style paragraph section, automatically scrolling through (max
        4 entries)
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
          <b-button variant="outline-info" class="d-block ml-auto"
            >Learn More</b-button
          >

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
    <div class="t-con">
      <div class="content">
        <div class="left">
          <h3>Help us build our new home</h3>
          <p>
            In order to make our vision a reality, we cordially invite you to
            join us in supporting our projects by making a donation. Every
            donation you make is vital and will go directly to the construction
            of the new theatre, which will not only be a venue for performances,
            but also a centre for cultural exchange and artistic cultivation. We
            firmly believe that with your help, we can bring more artistic
            enjoyment and educational resources to the community.
          </p>

          <div>
            <router-link to="/fundraising" class="nav-link"
              >learn more</router-link
            >
          </div>
          <p style="text-align: left">
            <!-- Add CSS here -->
            <a
              href="https://donorbox.org/gtc-fundraising-campaign"
              target="_blank"
            >
              <b-button>Donate</b-button>
            </a>
            <b-button
              variant="outline-primary"
              v-if="token?.roles == 1"
              @click="editModal = !editModal"
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
            <b-carousel-slide
              img-src="data:image/png;base64,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"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aA39P8A9aNExQ2HCtUF_ycD-71Fpmpm6Vw&usqp=CAU"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://orphancare.org.my/wp-content/uploads/2021/07/Rectangle-221.png"
            ></b-carousel-slide>
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
          <b-form-file
            id="image"
            v-model="form.image"
            accept="image/*"
          ></b-form-file>
        </b-form-group>
        <b-form-group label="Blog:" label-for="blog">
          <b-form-textarea
            id="blog"
            v-model="form.blog"
            type=""
            required
            rows="3"
            max-rows="6"
            placeholder="Enter your blog"
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
        {
          id: 2,
          icon: require("~/static/img/product/product02.jpg"),
          title: "Season 2025",
          desc: [
            "Love Letters :13th Jan to 28th Jan",
            "Plaza Suite: 3rd Feb to 2nd Mar",
            "Strangers on a Train: 16th Mar to 20th Apr",
            "Let's Kill Agatha Christie:	4th May to 8th Jun",
          ],
        },
        {
          id: 3,
          icon: require("~/static/img/product/product03.jpg"),
          title: "Season 2026",
          desc: ["Love Letters :13th Jan to 28th Jan"],
        },
        {
          id: 4,
          icon: require("~/static/img/product/product04.jpg"),
          title: "Season 2027",
          desc: ["Love Letters :13th Jan to 28th Jan"],
        },
      ],
      modalShow: false,
      randomItem: {},
      editModal: false,
      pageList: [],
      form: {
        title: "",
        blog: "",
        image: [],
      },
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
      // const res = await this.$axios.post(`/api/send-mail`, {
      //   email: this.form.email,
      //   subject: this.form.subject,
      //   content: this.form.message,
      // });
      // console.log(res);
      // if (res) {
      //   this.$bvToast.toast(res.data, {
      //     title: "提交结果",
      //     variant: "info",
      //   });
      // }
    },
    async getPageList() {
      const res = await this.$axios.get(`/api/page/list`);
      this.pageList = res.data;
    },
  },
  mounted() {
    this.randomize();
  },
};
</script>

<style lang="scss" scoped>
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
