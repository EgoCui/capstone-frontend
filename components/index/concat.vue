<template>
  <section class="concat bg-dark text-light">
    <div class="container">
      <b-row>
        <b-col lg="4" sm="5" xs="5" md="5" class="wow slideInRight">
          <dl>
            <dt class="title mb-2">
              <b-button @click.stop="modalShow = !modalShow"
                >contact us</b-button
              >
            </dt>
            <dd class="text-justify">xxxxxxxxxxxx。</dd>
            <dd>address: xxxxxxxxxxxxxxxx</dd>
            <dd>phone： xxxxxxxxxxxx</dd>
            <dd>email：xxxxxxxxxxxxx.com</dd>
          </dl>

          <b-modal v-model="modalShow" centered title="contact us">
            <b-form @submit="onSubmit">
              <b-form-input
                class="mb-4"
                v-model="form.name"
                name="发信人姓名"
                required
                placeholder="your name"
              ></b-form-input>
              <b-form-input
                class="mb-4"
                v-model="form.phone"
                required
                name="发信人联系方式"
                placeholder="your phone or email"
              ></b-form-input>
              <b-form-select
                class="mb-4"
                required
                v-model="form.selected"
                :options="options"
              ></b-form-select>
              <b-form-textarea
                class="mb-4"
                v-model="form.message"
                required
                name="发信人留言"
                placeholder="your message"
              ></b-form-textarea>
              <b-button type="submit" block variant="success">submit</b-button>
            </b-form>
            <template v-slot:modal-footer>
              <div class="w-100">
                <!-- <p class="float-left">Modal Footer Content</p>
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-right"
                  @click="modalShow = false"
                >
                  Close
                </b-button> -->
              </div>
            </template>
          </b-modal>
        </b-col>
        <b-col lg="4" sm="7" xs="7" md="8" class="wow slideInRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680585362408!2d151.20263251289106!3d-33.87212181912201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3ebab75803%3A0x1d65e9d8c180c7d5!2zNDIwIEtlbnQgU3QsIFN5ZG5leSBOU1cgMjAwMOa-s-Wkp-WIqeS6mg!5e0!3m2!1szh-CN!2shk!4v1712807990850!5m2!1szh-CN!2shk"
            width="100%"
            height="220px"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col>
        <b-col lg="4" sm="7" xs="7" md="8" class="wow slideInRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8912195377397!2d151.17041551289088!3d-33.866694218840856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afc5980ed26f%3A0x2b7571f3fc43888d!2sSt%20Joseph&#39;s%20Catholic%20Church!5e0!3m2!1szh-CN!2shk!4v1712808109697!5m2!1szh-CN!2shk"
            width="100%"
            height="220px"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        message: "",
        selected: null,
      },
      modalShow: false,

      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const phoneReg = /^1[3456789]\d{9}$/;
      const emailReg =
        /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
      if (!phoneReg.test(this.form.phone) && !emailReg.test(this.form.phone)) {
        this.$bvToast.toast(`提交失败，请输入正确的手机号或邮箱号`, {
          title: "提交结果",
          variant: "danger",
          autoHideDelay: 5000,
        });
        return;
      }
      const res = await this.$axios.post(`/sendmail`, {
        type: "留言",
        html: `
          <p><strong>发信人姓名：</strong></p>
          <p>${this.form.name}</p>
          <p><strong>发信人联系方式：</strong></p>
          <p>${this.form.phone}</p>
          <p><strong>发信人留言：</strong></p>
          <p>${this.form.message}</p>
        `,
      });
      if (res.data.error_code === 200) {
        this.form = {
          name: "",
          phone: "",
          message: "",
        };
        this.$bvToast.toast(`提交成功，我们将尽快与您取得联系！`, {
          title: "提交结果",
          variant: "success",
          autoHideDelay: 5000,
        });
      } else {
        this.$bvToast.toast(`提交失败，请稍后重试！`, {
          title: "提交结果",
          variant: "danger",
          autoHideDelay: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.concat {
  padding: 50px 0;
  .title {
    font-size: 16px;
  }
}
</style>
