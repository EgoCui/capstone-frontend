<template>
  <my-slot class="home">
    <div class="t-con">
      <h3>On stage now</h3>
      <div class="content">
        <div class="left">
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
          </b-carousel>
        </div>
        <div class="right">
          <h3>Name of show</h3>
          <p>Excerpt goes here</p>
          <div>
            Synopsis of show taken from first paragraph of post with a click
            more/expand option
          </div>
          <b-button class="fl-b" variant="outline-primary">Book Now</b-button>
        </div>
      </div>
    </div>
    <div class="t-con">
      <h3>Reviews</h3>
      <p>
        Pull quote style paragraph section, automatically scrolling through (max
        4 entries)
      </p>
      <div class="card-scroll">
        <b-card class="mb-3">
          <!-- <b-card-img src="@/assets/img/product/product01.jpg"></b-card-img> -->
          <b-card-title>{{ randomItem.title }}</b-card-title>
          <b-card-text class="text-muted">
            <li v-for="(item, index) in randomItem.desc" :key="index">
              {{ item }}
            </li>
          </b-card-text>
          <b-button variant="outline-info" class="d-block ml-auto"
            >Learn More</b-button
          >
        </b-card>
      </div>
    </div>
    <div class="t-con">
      <h3 class="center">What’s on</h3>
      <p class="center">View full calendar</p>
      <div class="img-detail">
        <div v-for="i in 3" :key="i" class="item">
          <img
            src="https://picsum.photos/1024/480/?image=10"
            alt=""
            style="width: 200px"
          />
          <p>Name of show</p>
          <p>Excerpt goes here</p>
        </div>
      </div>
    </div>
    <div class="t-con">
      <div class="content">
        <div class="left">
          <h3>Help us build our new home</h3>
          <p>Paragraph section - body text</p>
          <b-link href="#foo">Learn more</b-link>
          <b-button class="fl-b" variant="outline-primary">Book Now</b-button>
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

    <div></div>
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
      list: [
        {
          id: 1,
          icon: require("~/static/img/product/product01.jpg"),
          title: "Season 2024",
          desc: [
            "Love Letters :13th Jan to 28th Jan",
            "Plaza Suite: 3rd Feb to 2nd Mar",
            "Strangers on a Train: 16th Mar to 20th Apr",
            "Let's Kill Agatha Christie:	4th May to 8th Jun",
          ],
        },
        {
          id: 2,
          icon: require("~/static/img/product/product02.jpg"),
          title: "Season 2025",
          desc: [
            "Love Letters :13th Jan to 28th Jan",
            "Plaza Suite: 3rd Feb to 2nd Mar",
            "Strangers on a Train: 16th Mar to 20th Apr",
            "Let's Kill Agatha Christie:	4th May to 8th Jun",
          ],
        },
        {
          id: 3,
          icon: require("~/static/img/product/product03.jpg"),
          title: "Season 2026",
          desc: ["Love Letters :13th Jan to 28th Jan"],
        },
        {
          id: 4,
          icon: require("~/static/img/product/product04.jpg"),
          title: "Season 2027",
          desc: ["Love Letters :13th Jan to 28th Jan"],
        },
      ],
      modalShow: false,
      randomItem: {},
    };
  },
  methods: {
    randomize() {
      const randomIndex = Math.floor(Math.random() * this.list.length);
      this.randomItem = this.list[randomIndex];
    },
  },
  mounted() {
    this.randomize();
  },
};
</script>

<style lang="scss" scoped>
.home {
  .t-con {
    margin-bottom: 20px;
    .card-scroll {
      height: 230px;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: hidden;
      overflow-y: auto;
    }
    .img-detail {
      display: flex;
      justify-content: space-between;
      .item {
      }
    }
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
