Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <div>
          <h3>Auditions</h3>
        </div>

        <div class="content">
          <div class="left">
            <img
              src="https://www.genesiantheatre.com.au/s2009/2/images/poster.jpg"
              alt=""
              style="width: 200px"
            />
          </div>
          <div class="right">
            <h4>
              <router-link to="/previous/89" class="nav-link"
                >Hay Fever</router-link
              >
            </h4>
            <div>
              Arguably Noel Coward's best comedy about the mad-cap Bliss family
              and the games they play on their unsuspecting guests. Set in the
              roaring twenties, Hay Fever is a delightful comedy of an elegant
              weekend in the country. With Coward's ever-witty dialogue, Hay
              Fever is sure to please.
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
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>
              <router-link to="/about" class="nav-link"
                >Member ship</router-link
              >
            </h3>
            <p>
              The Genesian Theatre Company came into being from a meeting of
              members of the Catholic Youth Organisation intent upon forming a
              full scale dramatic group. This meeting was held on 15th August,
              1944. Named for St Genesius, Patron Saint of Actors, The Genesian
              Theatre Company has developed into a strong theatre company over
              the years.
            </p>
            <p style="text-align: left">
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="editModal = !editModal"
                >Edit</b-button
              >
            </p>
          </div>
          <div class="right">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              style="width: 400px"
            />
          </div>
        </div>
      </div>
      <div class="t-con">
        <div style="display: flex; justify-content: space-between">
          <h3>Volunteer</h3>
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
            <div>Static copy to be supplied, manual input</div>
            <p style="text-align: right">
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
        <div class="content">
          <div class="left">
            <h3>Apply to Direct a show</h3>
            <p>Static copy to be supplied, manual input</p>
            <p style="text-align: left">
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="editModal = !editModal"
                >Edit</b-button
              >
            </p>
          </div>
          <div class="right">
            <img
              src="https://picsum.photos/1024/480/?image=10"
              alt=""
              style="width: 400px"
            />
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
      editModal: false,
      form: {
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
