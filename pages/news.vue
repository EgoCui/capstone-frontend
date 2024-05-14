<template>
  <my-slot class="home">
    <div class="container">
      <b-button block @click.stop="modalShow = !modalShow">Subscribe to our Newsletter</b-button>
      <!-- Newsletter Section -->
      <b-modal v-model="modalShow" centered title="Subscribe to our Newsletter">
        <p>
          We send out an email newsletter about once a month letting you know
          about our upcoming productions and any special news. Subscribe to our
          newsletter below.
        </p>
        <b-form @submit="onSubmit" inline>
          <label class="sr-only" for="inline-form-input-email">email</label>
          <b-form-input
            id="inline-form-input-email"
            v-model="form.email"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Email address *"
          ></b-form-input>

          <label class="sr-only" for="inline-form-input-address">address</label>
          <b-form-input
            id="inline-form-input-address"
            v-model="form.address"
            placeholder="Confirm your email address *"
          ></b-form-input>

          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="form.checkbox"
            >I prefer to receive emails in HTML format</b-form-checkbox
          >
          <br />
          <br />
          <b-button type="submit" block variant="success">Subscribe</b-button>
        </b-form>
        <template v-slot:modal-footer>
          <div class="w-100"></div>
        </template>
      </b-modal>
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
      <!-- Publicity/Reviews Section -->
      <div class="t-con publicity-reviews">
        <div class="left">
          <h3>{{ newList[0]?.title }}</h3>
          <p>
            {{ newList[0]?.contents }}
          </p>
          <p style="text-align: left">
            <b-button
              variant="outline-primary"
              v-if="token?.roles == 1"
              @click="handleEdit(newList[0])"
              >Edit</b-button
            >
          </p>
        </div>
        <div class="right">
          <img :src="newList[0]?.image" alt="" class="responsive-image" />
        </div>
      </div>

      <!-- Social Media Links Section -->
      <div class="t-con social-media">
        <h3>Follow us on our socials:</h3>
        <div class="social-links">
          <a href="https://www.facebook.com/GenesianTheatre" target="_blank">
            <b-avatar
              size="3rem"
              src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=464"
            ></b-avatar>
          </a>
          <a href="https://twitter.com/genesians" target="_blank">
            <b-avatar
              size="3rem"
              src="https://th.bing.com/th/id/OIP._Nlqv4LX_KauLZI5Oe56lgHaFG?rs=1&pid=ImgDetMain"
            ></b-avatar>
          </a>
          <a href="https://www.instagram.com/genesiantheatre/" target="_blank">
            <b-avatar
              size="3rem"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            ></b-avatar>
          </a>
          <a href="https://www.youtube.com/genesiantheatre" target="_blank">
            <b-avatar
              size="3rem"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/640px-YouTube_social_white_square_%282017%29.svg.png"
            ></b-avatar>
          </a>
          <a href="https://www.tiktok.com/@genesiantheatre" target="_blank">
            <b-avatar
              size="3rem"
              src="https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/01/tech-guide_header-image-tiktok.webp"
            ></b-avatar>
          </a>
        </div>
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
      newList: [],
      modalShow: false,
      editModal: false,
      form: {
        address: "",
        email: "",
        checkbox: "",
        title: "",
        blog: "",
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
  mounted() {
    this.getPageList();
  },
  methods: {
    handleEdit(item) {
      this.form.title = item.title;
      this.form.contents = item.contents;
      this.form.image = item.image;
      this.form.pgid = item.pgid;
      this.editModal = !this.editModal;
    },
    async getPageList() {
      const res = await this.$axios.get(`/api/page/list`);
      this.newList = res.data.data.filter((item) => item.pgname == "News");
    },
    async onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form);
      const res = await this.$axios.post(`/api/send-mail`, {
        email: this.form.email,
        // subject: this.form.subject,
        content: this.form.address,
      });
      if (res) {
        this.$bvToast.toast(res.data, {
          title: "提交结果",
          variant: "info",
        });
      }
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
    background: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .newsletter-section {
    form {
      display: flex;
      flex-direction: column;
    }
    .form-group input[type="email"] {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .format-choice {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .btn-primary {
      background-color: #0056b3;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: darken(#0056b3, 10%);
      }
    }
  }
  .publicity-reviews,
  .social-media {
    display: flex;
    align-items: center;
    .left,
    .right {
      flex: 1;
    }
    .responsive-image {
      max-width: 100%;
      height: auto;
    }
  }
  .social-links {
    margin-left: 10px;
    a {
      margin-right: 4rem;
    }
  }
}
</style>
