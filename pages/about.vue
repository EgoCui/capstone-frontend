Fundraising
<template>
  <my-slot class="home">
    <div class="container">
      <div class="t-con">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.680585362408!2d151.20263251289106!3d-33.87212181912201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3ebab75803%3A0x1d65e9d8c180c7d5!2zNDIwIEtlbnQgU3QsIFN5ZG5leSBOU1cgMjAwMOa-s-Wkp-WIqeS6mg!5e0!3m2!1szh-CN!2shk!4v1712807990850!5m2!1szh-CN!2shk"
                  width="100%"
                  height="440px"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <!-- <b-card-img
                :src="aboutList[0]?.image"
                alt="Image"
                class="rounded-0"
              ></b-card-img> -->
              
            </b-col>
            <b-col md="8">
              <b-card-body :title="aboutList[0]?.title">
                <b-card-text>
                  <div>
                    {{ aboutList[0]?.contents }}
                  </div>

                  <button
                    type="button"
                    class="btn btn-link"
                    data-toggle="modal"
                    data-target="#genesianModal"
                  >
                    The Sale of the Genesian Theatre's Historic Premises
                  </button>

                  <!-- First Modal -->
                  <div
                    class="modal fade"
                    id="genesianModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="genesianModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="genesianModalLabel">
                            The Sale of the Genesian Theatre's Historic Premises
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/u-aiqBu56_Q"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                          <p>
                            Central Sydney's oldest operating community theatre,
                            The Genesian Theatre Co has announced that the
                            Catholic Archdiocese of Sydney has entered a
                            contract of sale for its historic premises in Kent
                            Street.
                          </p>
                          <!-- Other paragraphs -->
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button to open the second modal -->
                  <div>
                    <button
                      type="button"
                      class="btn btn-link"
                      data-toggle="modal"
                      data-target="#secondModal"
                    >
                      A Strong Future for the Genesian
                    </button>

                    <!-- Second Modal -->
                    <div
                      class="modal fade"
                      id="secondModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="secondModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="secondModalLabel">
                              A Strong Future for the Genesian
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <iframe
                              width="100%"
                              height="315"
                              src="https://www.youtube.com/embed/6sN6TXhrfss"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                            <p>
                              The Genesian Theatre Company, central Sydney's
                              longest operating community theatre company, will
                              stay in its historic Kent St premises for another
                              twelve months following agreement between the
                              Board of the Genesian and the purchaser of the
                              building.
                            </p>
                            <br />
                            <p>
                              Theatre Director Roger Gimblett said that the
                              Board was delighted that the company would
                              celebrate its 75th anniversary in its long-term
                              premises, the former St John's Church dating from
                              1868, but confirmed that a move to a new location
                              would occur in 2020. "We have some exciting plans
                              lined up for the future of the company, and will
                              continue to produce great quality theatre for the
                              people of Sydney for many years to come", Gimblett
                              said.
                            </p>
                            <br />
                            <p>
                              Mr Gimblett expressed his gratitude to the
                              purchaser and to the Catholic Archdiocese of
                              Sydney for the support given to the organisation
                              which counts numerous household names amongst its
                              star-studded alumni.
                            </p>
                            <br />
                            <p>
                              Mr Gimblett confirmed the Board had already
                              obtained the rights to stage a number of exciting
                              shows at Kent St in 2019 and an announcement of
                              the 75th Anniversary season would be made shortly.
                              He said he "would not be at all surprised if an
                              Agatha Christie play featured", noting the
                              reputation the company has for annual sell-out
                              seasons of the Queen of Crime's works.
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  </div>
                  <br>
                  <br>
<!-- Add CSS here -->
<a href="https://genesian.sales.ticketsearch.com/sales/salesdonation/452" target="_blank">
  <b-button style="background-color: yellow; color: red;">Donate</b-button></a>
                  <p style="text-align: right">
                    <b-button
                      variant="outline-primary"
                      v-if="token?.roles == 1"
                      @click="handleEdit(aboutList[0])"
                      >Edit</b-button
                    >
                  </p>

                </b-card-text>
                
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        
      </div>
      <div class="t-con">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="aboutList[1]?.image"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="aboutList[1]?.title">
                <b-card-text>
                  <div>{{ aboutList[1]?.contents }}</div>
                  <p style="text-align: right">
                    <b-button
                      variant="outline-primary"
                      v-if="token?.roles == 1"
                      @click="handleEdit(aboutList[1])"
                      >Edit</b-button
                    >
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <hr />
      <!-- 现有的HTML结构 -->
      <div class="t-con">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="aboutList[2]?.image"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="aboutList[2]?.title">
                <b-card-text>
                  <div>
                    {{ aboutList[2]?.contents }}
                    <br>
                    <br>
                    

                  </div>
                  <div class="container">
  <div class="text-container">
    <span>Learn more about the history of <a href="https://en.wikipedia.org/wiki/Genesius_of_Rome">St Genesius</a>.</span>
  </div>
  <div class="link-container">
    <router-link to="/previous" class="nav-link">Previous Productions</router-link>
  </div>
</div>


                  <br />
                  <div>
                    Please click the button and fill out the form to contact
                    Theatre historian and archivist Grant.
                  </div>
                  <br>

                  <!-- 添加按钮触发模态框 -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click.stop="handelModel(1)"
                  >
                    Contact Us
                  </button>
                  <p style="text-align: right">
                    <b-button
                      variant="outline-primary"
                      v-if="token?.roles == 1"
                      @click="handleEdit(aboutList[2])"
                      >Edit</b-button
                    >
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <b-modal v-model="modalShow" centered :title="title">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-2" label="Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.subject"
              placeholder="Enter subject"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Message:" label-for="input-4">
            <b-form-textarea
              id="input-4"
              v-model="form.message"
              placeholder="Enter message"
              required
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" block variant="success">submit</b-button>
        </b-form>
        <template v-slot:modal-footer>
          <div class="w-100"></div>
        </template>
      </b-modal>

      <!-- 现有的HTML结构 -->
      <div class="t-con">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="aboutList[3]?.image"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="aboutList[3]?.title">
                <b-card-text>
                  <div>
                    {{ aboutList[3]?.contents }}
                  </div>
                  <br>
                  <!-- 添加按钮触发模态框 -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click.stop="handelModel(2)"
                  >
                    Contact Us
                  </button>
                  <p style="text-align: right">
                    <b-button
                      variant="outline-primary"
                      v-if="token?.roles == 1"
                      @click="handleEdit(aboutList[3])"
                      >Edit</b-button
                    >
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div class="t-con">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="aboutList[4]?.image"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body :title="aboutList[4]?.title">
                <b-card-text>
                  <div>
                    {{ aboutList[4]?.contents }}
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <!-- 添加按钮触发模态框 -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click.stop="handelModel(3)"
                  >
                    Contact Us
                  </button>
                  <p style="text-align: right">
                    <b-button
                      variant="outline-primary"
                      v-if="token?.roles == 1"
                      @click="handleEdit(aboutList[4])"
                      >Edit</b-button
                    >
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <b-modal v-model="editModal" centered title="Edit">
        <b-form @submit="onSubmit1">
          <b-form-group label="Title:" label-for="title">
            <b-form-input
              id="title"
              v-model="form.title"
              type="text"
              required
              placeholder="Enter your title"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="image:" label-for="image">
            <b-form-input
              id="image"
              v-model="form.image"
              type="text"
              required
              placeholder="Enter your image"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="contents:" label-for="contents">
            <b-form-textarea
              id="contents"
              v-model="form.contents"
              type=""
              required
              rows="3"
              max-rows="6"
              placeholder="Enter your contents"
            ></b-form-textarea>
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
    </div>
  </my-slot>
</template>

<script>
import MySlot from "@/components/slot/index";
import axios from "axios";
export default {
  components: {
    MySlot,
  },
  data() {
    return {
      modalShow: false,
      editModal: false,
      aboutList: [],
      title: "",
      form: {
        name: "",
        email: "",
        message: "",
        subject: "Genesian Membership||Genesian History",
        title: "",
        contents: "",
        image: "",
      },
      formData: {
        email: '',
        subject: '',
        content: ''
      },
    };
  },
  computed: {
    token() {
      // const token = nuxtStorage.localStorage.localStorage.getData("token");
      return this.$store.state.oauth;
    },
  },
  mounted() {
    this.getPageList();
  },
  methods: {
    handelModel(item) {
      this.modalShow = !this.modalShow;
      if (item == 1) {
        this.title = "The History of the Genesian Theatre";
        this.form.subject = "Genesian History";
      } else if (item == 2) {
        this.title = "Become a Member";
        this.form.subject = "Genesian Membership";
      } else if (item == 3) {
        this.title = "Wheelchair Accessibility";
        this.form.subject = "Genesian Wheelchair Booking";
      }
    },
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        this.formData.email = this.form.email;
        this.formData.subject = this.form.subject;
        this.formData.content = "My name is: " + this.form.name + this.form.contents;
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
    async onSubmit1(evt) {
      evt.preventDefault();
      console.log(this.form);
      const res = await this.$axios.post(
        `/page/mod?adminUid=${this.token.uid}`,
        {
          pgid: this.form.pgid,
          title: this.form.title,
          contents: this.form.contents,
          image: this.form.image,
        }
      );
      console.log(res);
      if (res) {
        this.getPageList();
        this.editModal = false;
        this.$bvToast.toast(res.data.msg, {
          title: "result",
          variant: "info",
        });
      }
    },
    handleEdit(item) {
      this.form.title = item.title;
      this.form.contents = item.contents;
      this.form.image = item.image;
      this.form.pgid = item.pgid;
      this.editModal = !this.editModal;
    },
    async getPageList() {
      const res = await this.$axios.get(`/page/list`);
      this.aboutList = res.data.data.filter((item) =>
        item.pgname.includes("about")
      );
    },
  },
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
.nav-link {
  text-decoration: underline;
  text-align: left;
}
.modal-backdrop.show {
  opacity: 0; /* 将透明度设置为 0 */
}
</style>
