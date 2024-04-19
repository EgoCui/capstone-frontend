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
      <b-table striped hover :fields="fields" :items="items">
        <template v-slot:cell(pname)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <a :href="`/previous/${data.item.pid}`">{{ data.value }}</a>
        </template>
      </b-table>
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
      fields: [{ key: "pname", label: "pname" }, "subtitle", "startdate"],
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
        year: "",
        name: "",
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
    };
  },
  async mounted() {
    // this.onSubmit()
    const res = await this.$axios.get(`/api/show/fSearch`, {
      params: {
        kw: this.form.name,
        year: this.form.year,
      },
    });
    this.items = res.data.data;
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
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
      this.onSubmit(evt);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
