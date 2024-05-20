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
            <dd class="text-justify"></dd>
            <dd>Street Address: 420 Kent St, Sydney NSW 2000</dd>
            <dd>Postal Address: PO Box 1988, Sydney NSW 2001</dd>
            <dd>ABN 733 0987 4859</dd>
            
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680585362408!2d151.20263251289106!3d-33.87212181912201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3ebab75803%3A0x1d65e9d8c180c7d5!2zNDIwIEtlbnQgU3QsIFN5ZG5leSBOU1cgMjAwMOa-s-Wkp-WIqeS6mg!5e0!3m2!1sen-US!2shk!4v1712807990850!5m2!1sen-US!2shk"
            width="100%"
            height="220px"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col>
        <!-- <b-col lg="4" sm="7" xs="7" md="8" class="wow slideInRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8912195377397!2d151.17041551289088!3d-33.866694218840856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afc5980ed26f%3A0x2b7571f3fc43888d!2sSt%20Joseph&#39;s%20Catholic%20Church!5e0!3m2!1szh-CN!2shk!4v1712808109697!5m2!1szh-CN!2shk"
            width="100%"
            height="220px"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col> -->
      </b-row>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        message: "",
        selected: null,
      },
      formData: {
        email: '',
        subject: '',
        content: ''
      },
      modalShow: false,

      options: [
        { value: "Membership", text: "Contact for Membership" },
        { value: "Front desk", text: "Contact our front desk" },
      ],
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        this.formData.email = this.form.phone;
        this.formData.subject = this.form.selected;
        this.formData.content = "My name is: " + this.form.name + this.form.message;
        const response = await axios.post('http://localhost:8090/send-mail', this.formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(response.data);
        console.log("Sending data:", this.formData);
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Mail send failed:', error);
        alert('Mail send failed!');
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
