<template>
  <my-slot class="home">
    <div class="container">
      <b-form inline @submit="onSubmit" @reset="onReset">
        <label class="mr-sm-2" for="inline-form-input-name">Name</label>
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Name"
          v-model="form.name"
        ></b-input>

        <label class="mr-sm-2" for="inline-form-input-year">Year</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            id="inline-form-input-year"
            placeholder="Year"
            v-model="form.year"
          ></b-input>
        </b-input-group>

        <b-button type="submit" variant="primary" style="margin: 0 5px"
          >Search</b-button
        >
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <p></p>
      <p><b-button @click="addShow">addShow</b-button></p>
      <b-table striped hover :fields="fields" :items="items">
        <template v-slot:cell(pname)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <a :href="`/previous/${data.item.pid}`">{{ data.value }}</a>
        </template>
        <template #cell(actions)="row">
          <div v-if="token?.roles == 1">
            <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
            >
              Edit
            </b-button>
            <b-button size="sm" @click="handleDelete(row.item)">
              Delete
            </b-button>
          </div>
          <div v-else>-</div>
        </template>
      </b-table>
    </div>
    <b-modal v-model="editModal" centered scrollable :title="ModalTitle">
      <b-form @submit="onSubmit1">
        <b-form-group label="Pname:" label-for="pname">
          <b-form-input
            id="pname"
            v-model="form.pname"
            type="text"
            required
            placeholder="Enter your pname"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Subtitle:" label-for="subtitle">
          <b-form-input
            id="subtitle"
            v-model="form.subtitle"
            type="text"
            required
            placeholder="Enter your subtitle"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="startdate:" label-for="startdate">
          <b-form-input
            id="startdate"
            v-model="form.startdate"
            type="date"
            required
            placeholder="Enter your startdate"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="enddate:" label-for="enddate">
          <b-form-input
            id="enddate"
            v-model="form.enddate"
            type="date"
            required
            placeholder="Enter your enddate"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="productions:" label-for="productions">
          <b-form-input
            id="productions"
            v-model="form.productions"
            type="text"
            required
            placeholder="Enter your productions"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="casts:" label-for="casts">
          <b-form-input
            id="casts"
            v-model="form.casts"
            type="text"
            required
            placeholder="Enter your casts"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="crews:" label-for="crews">
          <b-form-input
            id="crews"
            v-model="form.crews"
            type="text"
            required
            placeholder="Enter your crews"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="contents:" label-for="contents">
          <b-form-input
            id="contents"
            v-model="form.contents"
            type="text"
            required
            placeholder="Enter your contents"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="cover:" label-for="cover">
          <b-form-input
            id="cover"
            v-model="form.cover"
            type="text"
            required
            placeholder="Enter your cover"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="stills:" label-for="stills">
          <b-form-input
            id="stills"
            v-model="form.stills"
            type="text"
            required
            placeholder="Enter your stills"
          ></b-form-input>
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
      fields: [
        { key: "pname", label: "pname" },
        "subtitle",
        "startdate",
        { key: "actions", label: "actions" },
      ],
      items: [
        {
          pid: 1,
          pname: "Love Letters",
          subtitle: "['By A.R. Gurney', 'Directed by Richard Cotter']",
          startdate: "2024-01-13",
          enddate: "2024-01-28",
          productions:
            '{"Director":["Richard Cotter"], "Lighting Design":["Cian Byrne"]}',
          casts:
            '{"Stage Manager":["Mary Abraham", "Kayleigh Longuehaye", "Brooke McKenzie", "Amy Roberts"], "Lighting Operation":["Gregory George"]}',
          crews:
            '{"Andrew Makepeace Ladd III":["Richard Cotter"], "Melissa Gardner":["Tricia Youlden"]}',
          contents:
            'Andrew Makepeace Ladd III and Melissa Gardner, both born to wealth and position, are childhood friends whose lifelong correspondence begins with birthday party thank-you notes and summer camp postcards. Romantically attached, they continue to exchange letters through the boarding school and college years—where Andy goes on to excel at Yale and law school, while Melissa flunks out of a series of "good schools."\nWhile Andy is off at war Melissa marries, but her attachment to Andy remains strong and she continues to keep in touch as he marries, becomes a successful attorney, gets involved in politics and, eventually, is elected to the U.S. Senate. Meanwhile, her marriage in tatters, Melissa dabbles in art and gigolos, drinks more than she should, and becomes estranged from her children.\nThe piece is comprised of letters exchanged over a lifetime between two people who grew up together, went their separate ways, but continued to share confidences. As the actors read the letters aloud, what is created is an evocative, touching, frequently funny but always telling pair of character studies in which what is implied is as revealing and meaningful as what is actually written down.',
          cover: "https://www.genesiantheatre.com.au/s2024/1/images/poster.jpg",
          stills: "[]",
        },
        {
          pid: 2,
          pname: "Love Letters",
          subtitle: "['By A.R. Gurney', 'Directed by Richard Cotter']",
          startdate: "2024-01-13",
          enddate: "2024-01-28",
          productions:
            '{"Director":["Richard Cotter"], "Lighting Design":["Cian Byrne"]}',
          casts:
            '{"Stage Manager":["Mary Abraham", "Kayleigh Longuehaye", "Brooke McKenzie", "Amy Roberts"], "Lighting Operation":["Gregory George"]}',
          crews:
            '{"Andrew Makepeace Ladd III":["Richard Cotter"], "Melissa Gardner":["Tricia Youlden"]}',
          contents:
            'Andrew Makepeace Ladd III and Melissa Gardner, both born to wealth and position, are childhood friends whose lifelong correspondence begins with birthday party thank-you notes and summer camp postcards. Romantically attached, they continue to exchange letters through the boarding school and college years—where Andy goes on to excel at Yale and law school, while Melissa flunks out of a series of "good schools."\nWhile Andy is off at war Melissa marries, but her attachment to Andy remains strong and she continues to keep in touch as he marries, becomes a successful attorney, gets involved in politics and, eventually, is elected to the U.S. Senate. Meanwhile, her marriage in tatters, Melissa dabbles in art and gigolos, drinks more than she should, and becomes estranged from her children.\nThe piece is comprised of letters exchanged over a lifetime between two people who grew up together, went their separate ways, but continued to share confidences. As the actors read the letters aloud, what is created is an evocative, touching, frequently funny but always telling pair of character studies in which what is implied is as revealing and meaningful as what is actually written down.',
          cover: "https://www.genesiantheatre.com.au/s2024/1/images/poster.jpg",
          stills: "[]",
        },
      ],
      form: {
        pname: "",
        subtitle: "",
        startdate: "",
        enddate: "",
        productions: "You can change everything",
        casts: "You can change everything",
        crews: "You can change everything",
        contents: "You can change everything",
        cover: "You can change everything",
        stills: "You can change everything', 'You can change everything",
      },
      editModal: false,
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      active: {},
      ModalTitle: "",
    };
  },
  async mounted() {
    // this.onSubmit();
    const res = await this.$axios.get(`/api/show/fSearch`, {
      params: {
        kw: this.form.name,
        year: this.form.year,
      },
    });
    this.items = res.data.data;
  },
  computed: {
    token() {
      // const token = nuxtStorage.localStorage.localStorage.getData("token");
      return this.$store.state.oauth;
    },
  },
  methods: {
    async onSubmit(evt) {
      evt?.preventDefault();
      console.log(this.form);
      const res = await this.$axios.get(`/api/show/fSearch`, {
        params: {
          kw: this.form.name,
          year: this.form.year,
        },
      });
      console.log(res);
      this.items = res.data.data;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.year = "";
      this.form.name = "";
      // this.onSubmit(evt);
    },
    async onSubmit1(evt) {
      evt.preventDefault();
      console.log(this.form);
      if (this.ModalTitle == "edit") {
        await this.$axios.post(
          `/api/show/mod?uid=${this.token.uid}`,
          this.form
        );
      } else {
        await this.$axios.post(
          `/api/show/save?uid=${this.token.uid}`,
          this.form
        );
      }

      this.editModal = false;
      this.onSubmit();
    },
    info(item, index, button) {
      console.log(item, "--onSubmit");
      this.$axios.get(`/api/show/detail/${item.pid}`).then((res) => {
        this.form = { ...res.data.data };
        this.active = res.data.data;
        this.ModalTitle = "edit";
        this.editModal = true;
        console.log(res.data.data, index, button);
      });
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
          console.log(this.token);
          if (value) {
            const res = await this.$axios.get(`/api/show/delete`, {
              params: {
                pid: row.pid,
                uid: this.token.uid,
              },
            });
            this.onSubmit();
          }
        })
        .catch((err) => {
          console.log(err);
          // An error occurred
        });
    },
    addShow() {
      this.ModalTitle = "add";
      this.editModal = true;
      console.log(this.$options);
      this.form = this.$options.data().form;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
