Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <div>
          <h3>Newsletter</h3>
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
            <h4>Static copy to be supplied, manual input</h4>
            <div>Click here to view the latest copy of our newsletter</div>
            <b-button style="float: right; margin-top: 50px"
              >Subscribe</b-button
            >
          </div>
        </div>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>Publicity/Reviews</h3>
            <p>
              Static copy to be supplied, manual input with ability to include
              hyperlinks
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
      <div class="t-con">
        <div>
          <h3>In the news</h3>
          <p>
            Static copy to be supplied, manual input, list of hyperlinks to
            external sources
          </p>
        </div>
      </div>
      <div class="t-con">
        <div class="">
          <h3>Social media</h3>
          <p>Follow us on our socials:</p>
        </div>
        <div style="display: flex; justify-content: space-evenly">
          <img
            style="width: 50px"
            src="https://dockx-movers.be/wp-content/uploads/2022/05/facebook_logo.png"
            alt=""
          />
          <img
            style="width: 50px"
            src="https://dockx-movers.be/wp-content/uploads/2022/05/facebook_logo.png"
            alt=""
          />
          <img
            style="width: 50px"
            src="https://dockx-movers.be/wp-content/uploads/2022/05/facebook_logo.png"
            alt=""
          />
        </div>
      </div>
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
