Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <div>
          <h3>Auditions</h3>
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
            <h4>Name of show</h4>
            <div>
              Synopsis of show taken from first paragraph of post with a click
              more/expand option
            </div>
            <b-button style="float: right; margin-top: 50px"
              >Apply now</b-button
            >
          </div>
        </div>
      </div>
      <div class="t-con">
        <div class="content">
          <div class="left">
            <h3>Member ship</h3>
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
          <h3>Volunteer</h3>
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
            <h3>Apply to Direct a show</h3>
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
