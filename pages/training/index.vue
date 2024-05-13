Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con" v-for="item in trainingList" :key="item.pgid">
        <div>
          <h3>{{ item?.title }}</h3>
        </div>

        <div class="content">
          <div class="left">
            <img :src="item?.image" alt="" style="width: 400px" />
          </div>
          <div class="right">
<!--            <h4>Name of show</h4>-->
            <div>
              {{ item?.contents }}
            </div>
            <p style="float: right; margin-top: 50px">
              <b-button>Apply now</b-button>
              <b-button
                variant="outline-primary"
                v-if="token?.roles == 1"
                @click="handleEdit(item)"
                >Edit</b-button
              >
            </p>
          </div>
        </div>
        <!-- <div class="content">
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
        </div> -->
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
      trainingList: [],
      form: {
        title: "",
        contents: "",
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
  mounted() {
    this.getPageList();
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
