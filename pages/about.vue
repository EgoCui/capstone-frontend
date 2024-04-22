Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <div style="display: flex; justify-content: space-between">
          <h3>About us</h3>
          <b-button variant="link">View past productions</b-button>
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
          </div>
        </div>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>Our history</h3>
            <p>Static copy to be supplied, manual input</p>
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
        <div style="display: flex; justify-content: space-between">
          <h3>Our new home</h3>
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
            <b-button style="margin-top: 50px">Done</b-button>
          </div>
        </div>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>Our members</h3>
            <p>Static copy to be supplied, manual input</p>
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
        <h3>Our Board</h3>
        <b-card-group deck>
          <b-card>
            <img
              src="https://picsum.photos/600/300/?image=25"
              alt=""
              style="height: 100px"
            />
            <b-card-text> Name Position </b-card-text>
          </b-card>

          <b-card>
            <img
              src="https://picsum.photos/600/300/?image=25"
              alt=""
              style="height: 100px"
            />
            <b-card-text> Name Position </b-card-text>
          </b-card>

          <b-card>
            <img
              src="https://picsum.photos/600/300/?image=25"
              alt=""
              style="height: 100px"
            />
            <b-card-text> Name Position </b-card-text>
          </b-card>
        </b-card-group>
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
