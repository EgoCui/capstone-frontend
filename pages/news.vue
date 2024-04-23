<template>
  <my-slot class="home">
    <div class="container">
      
      <!-- Newsletter Section -->
      <div class="t-con newsletter-section">
        <h3>Subscribe to our Newsletter</h3>
        <p>We send out an email newsletter about once a month letting you know about our upcoming productions and any special news. Subscribe to our newsletter below.</p>
        <form action="YOUR_SUBSCRIPTION_ENDPOINT" method="POST" class="newsletter-form">
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Email address *" required>
            <input type="email" id="confirm-email" name="confirm_email" placeholder="Confirm your email address *" required>
          </div>
          <div class="format-choice">
            <input type="checkbox" id="html-format" name="format" value="html">
            <label for="html-format">I prefer to receive emails in HTML format</label>
          </div>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>

      <!-- Publicity/Reviews Section -->
      <div class="t-con publicity-reviews">
        <div class="left">
          <h3>Publicity/Reviews</h3>
          <p>Static copy to be supplied, manual input with the ability to include hyperlinks</p>
        </div>
        <div class="right">
          <img src="https://picsum.photos/1024/480/?image=10" alt="" class="responsive-image" />
        </div>
      </div>

      <!-- Social Media Links Section -->
      <div class="t-con social-media">

        <h3>Follow us on our socials:</h3>
        <div class="social-links">
          <a href="https://www.facebook.com/GenesianTheatre" target="_blank">
            <img src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=464" alt="Facebook" />
          </a>
          <a href="https://twitter.com/genesians" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/genesiantheatre/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/genesiantheatre" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/640px-YouTube_social_white_square_%282017%29.svg.png" alt="YouTube" />
          </a>
          <a href="https://www.tiktok.com/@genesiantheatre" target="_blank">
            <img src="https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/01/tech-guide_header-image-tiktok.webp" alt="TikTok" />
          </a>
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
    background: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .newsletter-section {
    form {
      display: flex;
      flex-direction: column;
    }
    .form-group input[type="email"] {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .format-choice {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .btn-primary {
      background-color: #0056b3;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: darken(#0056b3, 10%);
      }
    }
  }
  .publicity-reviews, .social-media {
    display: flex;
    align-items: center;
    .left, .right {
      flex: 1;
    }
    .responsive-image {
      max-width: 100%;
      height: auto;
    }
  }
  .social-links img {
    width: 50px;
    margin-right: 4rem;
  }
}
</style>
