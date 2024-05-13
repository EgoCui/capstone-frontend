Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <h3>Building a new home for the Genesian</h3>
        <br />
        <h5>We need your generous support</h5>

        <p>
          In order to make our vision a reality, we cordially invite you to join
          us in supporting our projects by making a donation. Every donation you
          make is vital and will go directly to the construction of the new
          theatre, which will not only be a venue for performances, but also a
          centre for cultural exchange and artistic cultivation. We firmly
          believe that with your help, we can bring more artistic enjoyment and
          educational resources to the community.
        </p>
        <p style="text-align: right">
          <!-- Add CSS here -->

          <b-button
            variant="outline-primary"
            v-if="token?.roles == 1"
            @click="editModal = !editModal"
            >Edit</b-button
          >

          <a
            href="https://donorbox.org/gtc-fundraising-campaign"
            target="_blank"
          >
            <b-button>Donate</b-button>
          </a>
        </p>
      </div>
      <hr />
      <div class="t-con">
        <h3>Fundraising events</h3>
        <img
          src="https://www.genesiantheatre.com.au/images/banner/72.jpg"
          alt=""
        />
        <p>Name of show</p>
        <p>Excerpt goes here</p>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>Help us build our new home</h3>
            <p>Paragraph section - body text</p>
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
                caption="First Slide"
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <div class="t-con">
        <h3>More ways to help</h3>
        <b-card
          img-src="https://www.genesiantheatre.com.au/images/banner/72.jpg"
          img-alt="Card image"
          img-left
          class="mb-3"
          v-for="item in 3"
          :key="item"
        >
          <b-card-text> Paragraph section - body text </b-card-text>
        </b-card>
      </div>
      <b-button block variant="primary">Subscribe for updates</b-button>
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
      editModal: false,
      form: {
        title: "",
        contents: "",
        image: "",
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
    async getPageList() {
      const res = await this.$axios.get(`/api/page/list`);
      this.trainingList = res.data.data.filter(
        (item) => item.pgname == "training"
      );
    },
    handleEdit(item) {
      this.form = item;
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
  .t-con {
    margin-top: 20px;
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
