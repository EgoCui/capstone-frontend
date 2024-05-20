Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <div>
          <h3>{{ workList[0]?.title }}</h3>
        </div>

        <div class="content">
          <div class="left">
            <img :src="workList[0]?.image" alt="" style="width: 200px" />
          </div>
          <div class="right">
            <h4>
              <router-link to="/previous/89" class="nav-link"
                >Hay Fever</router-link
              >
            </h4>
            <div>
              {{ workList[0]?.contents }}
            </div>

            <p style="float: right; margin-top: 50px">
              <b-button>Apply now</b-button>
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="handleEdit(workList[0])"
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
              <router-link to="/about" class="nav-link">{{
                workList[1]?.title
              }}</router-link>
            </h3>
            <p>
              {{ workList[1]?.contents }}
            </p>
            <p style="text-align: left">
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="handleEdit(workList[1])"
                >Edit</b-button
              >
            </p>
          </div>
          <div class="right">
            <img :src="workList[1]?.image" alt="" style="width: 400px" />
          </div>
        </div>
      </div>
      <div class="t-con">
        <div style="display: flex; justify-content: space-between">
          <h3>{{ workList[2]?.title }}</h3>
        </div>

        <div class="content">
          <div class="left">
            <img :src="workList[2]?.image" alt="" style="width: 400px" />
          </div>
          <div class="right">
            <div>{{ workList[2]?.contents }}</div>
            <p style="text-align: right">
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="handleEdit(workList[2])"
                >Edit</b-button
              >
            </p>
          </div>
        </div>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>{{ workList[3]?.title }}</h3>
            <p>{{ workList[3]?.contents }}</p>
            <p style="text-align: left">
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="handleEdit(workList[3])"
                >Edit</b-button
              >
            </p>
          </div>
          <div class="right">
            <img :src="workList[3]?.image" alt="" style="width: 400px" />
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
      workList: [],
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
  mounted() {
    this.getPageList();
  },
  methods: {
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
    async getPageList() {
      const res = await this.$axios.get(`/page/list`);
      this.workList = res.data.data.filter((item) =>
        item.pgname.includes("work")
      );
    },
    handleEdit(item) {
      this.form = item;
      this.editModal = !this.editModal;
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
