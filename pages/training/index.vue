Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <div>
          <h3>Training</h3>
        </div>

        <div class="content">
          <div class="left">
            <img
              src="https://picsum.photos/1024/480/?image=10"
              alt=""
              style="width: 400px"
            />
          </div>
          <div class="right">
            <h4>Name of show</h4>
            <div>
              Synopsis of show taken from first paragraph of post with a click
              more/expand option
            </div>
            <p style="float: right; margin-top: 50px">
              <b-button>Apply now</b-button>
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="editModal = !editModal"
                >Edit</b-button
              >
            </p>
          </div>
        </div>
        <div class="content">
          <div class="left">
            <img
              src="https://picsum.photos/1024/480/?image=10"
              alt=""
              style="width: 400px"
            />
          </div>
          <div class="right">
            <h4>Name of show</h4>
            <div>
              Synopsis of show taken from first paragraph of post with a click
              more/expand option
            </div>

            <p style="float: right; margin-top: 50px">
              <b-button>Apply now</b-button>
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
      form: {
        title: "",
        blog: "",
        image: "",
      },
      editModal: false,
    };
  },
  computed: {
    token() {
      // const token = nuxtStorage.localStorage.localStorage.getData("token");
      return this.$store.state.oauth;
    },
  },
  methods: {
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
