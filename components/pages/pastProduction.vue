<template>
  <my-slot class="home">
    <div class="t-con">
      <h3>Past productions</h3>
      <p>Paragraph section - body text</p>
    </div>
    <div>
      <div class="input-group">
        <b-form-input
          v-model="text"
          placeholder="Enter your name"
        ></b-form-input>
        <b-button @click="search">Search</b-button>
      </div>
    </div>
    <div class="detail">
      <h3 class="center">Search results view</h3>
      <h3>Name of show</h3>
      <p>Date of production</p>
      <p>Production</p>
      <ul>
        <li>information Cast</li>
        <li>list Crew list</li>
      </ul>
      <img
        src="https://www.genesiantheatre.com.au/images/banner/72.jpg"
        alt=""
      />
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
      text: "",
    };
  },
  async mounted() {},
  methods: {
    search() {
      console.log(this.text, "--search");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .detail {
    margin-top: 20px;
    .center {
      text-align: center;
      margin: 20px 0;
    }
    ul {
      padding-left: 40px;
    }
    li {
      list-style-type: disc;
    }
  }
}
</style>
