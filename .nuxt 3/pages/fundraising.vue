Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <h3>Building a new home for the Genesian</h3>
        <p>Paragraph section - body text</p>
        <p style="text-align: right"><b-button>Donate</b-button></p>
      </div>
      <div class="t-con">
        <h3>Fundraising events</h3>
        <img
          src="https://www.genesiantheatre.com.au/images/banner/72.jpg"
          alt=""
        />
        <p>Name of show</p>
        <p>Excerpt goes here</p>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>Help us build our new home</h3>
            <p>Paragraph section - body text</p>
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
      <div class="t-con">
        <h3>More ways to help</h3>
        <b-card
          img-src="https://www.genesiantheatre.com.au/images/banner/72.jpg"
          img-alt="Card image"
          img-left
          class="mb-3"
          v-for="item in 3"
          :key="item"
        >
          <b-card-text> Paragraph section - body text </b-card-text>
        </b-card>
      </div>
      <b-button block variant="primary">Subscribe for updates</b-button>
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
    return {};
  },
  methods: {},
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
