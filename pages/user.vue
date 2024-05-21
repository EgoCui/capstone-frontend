Fundraising
<template>
  <my-slot class="home">
    <b-button @click="addUser">addUser</b-button>

    <b-table
      :fields="fields"
      :items="items"
      :busy="isBusy"
      class="mt-3"
      outlined
    >
      <template #cell(role)="data">
       {{ getRoleName(data.item.roles)}}
      </template>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(actions)="row">
        <!-- <b-button size="sm" class="mr-1"> Info modal </b-button> -->
        <b-button size="sm" @click="handleDelete(row)"> Delete </b-button>
      </template>
    </b-table>
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
    <b-modal v-model="addModal" centered title="Add">
      <b-form @submit="onSubmit2">
        <b-form-group label="username:" label-for="username">
          <b-form-input
            id="username"
            v-model="userform.username"
            type="text"
            required
            placeholder="Enter your username"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="firstname:" label-for="firstname">
          <b-form-input
            id="firstname"
            v-model="userform.firstname"
            type="text"
            required
            placeholder="Enter your firstname"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="lastname:" label-for="lastname">
          <b-form-input
            id="lastname"
            v-model="userform.lastname"
            type="text"
            required
            placeholder="Enter your lastname"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="pwd:" label-for="pwd">
          <b-form-input
            id="pwd"
            v-model="userform.pwd"
            type="password"
            required
            placeholder="Enter your pwd"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="email:" label-for="email">
          <b-form-input
            id="email"
            v-model="userform.email"
            type="email"
            required
            placeholder="Enter your email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="roles:"
          label-for="roles"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            id="roles"
            v-model="userform.roles"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-options"
          ></b-form-radio-group>
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
      addModal: false,
      form: {
        title: "",
        blog: "",
      },
      isBusy: false,
      fields: [
  { key: 'role', label: 'Role' },
  'username',
  'email',
  { key: 'actions', label: 'Actions' }
],
      items: [ { role: "1", username: "admin", email: "admin@example.com" },
        { role: "2", username: "marketing", email: "marketing@example.com" },
        { role: "3", username: "manager", email: "manager@example.com" },],
      userform: {
        username: "",
        pwd: "",
        firstname: "",
        lastname: "",
        email: "",
        roles: "",
      },
      options: [
        { text: "Administrator", value: "1" },
        { text: "Marketing", value: "2" },
        { text: "Manager", value: "3" },
        { text: "Member", value: "4" },
      ],
    };
  },
  computed: {
    token() {
      // const token = nuxtStorage.localStorage.localStorage.getData("token");
      return this.$store.state.oauth;
    },
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    async onSubmit1(evt) {
      evt.preventDefault();
      console.log(this.form);
    },
    async onSubmit2(evt) {
      evt.preventDefault();
      console.log(this.form);
      const { username, pwd, firstname, lastname, email, roles } =
        this.userform;
      const res = await this.$axios.post(
        `/user/save?uid=${this.token.uid}`,
        {
          username,
          pwd,
          firstname,
          lastname,
          email,
          roles,
        }
      );
      this.addModal = false;
      this.getUserList();
    },
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    async getUserList() {
      const res = await this.$axios.get(`/user/list`);
      console.log(res.data.data);
      this.items = res.data.data;
    },
    addUser() {
      this.userform = this.$options.data().userform;
      this.addModal = true;
    },
    handleDelete(row) {
      console.log(row, "--handleDelete");
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then(async (value) => {
          if (value) {
            const res = await this.$axios.get(`/user/delete`, {
              params: {
                uid: row.item.uid,
                adminUid: this.token.uid,
              },
            });
            this.getUserList();
          }
        })
        .catch((err) => {
          // An error occurred
        });
    },
    getRoleName(role) {
    const roleMapping = {
      '1': 'Administrator',
      '2': 'Marketing',
      '3': 'Manager',
      '4': 'Member'
    };
    return roleMapping[role] || 'Unknown';
  },
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
