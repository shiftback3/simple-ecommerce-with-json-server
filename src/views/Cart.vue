<template>
  <div>
    <!-- Wrapper -->
    <div id="wrapper" class="wrapper">
      <!-- Header -->
      <div id="tm-home-area" class="tm-header tm-header-sticky">
        <div class="tm-header-toparea">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8">
                <ul class="tm-header-info">
                  <li>
                    <i class="ti ti-mobile"></i><b>Contact:</b>
                    <a href="tel:18009156270">1-800-915-6270 </a>
                  </li>
                  <li><i class="ti ti-time"></i><b>Work time:</b> 9:00-18:00</li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="tm-header-icons">
                  <li>
                    <router-link to="/order" class="hash-scroll-link"
                      >View Orders</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/cart"
                      ><i class="ti ti-shopping-cart"></i>
                      <span class="badge">{{ cart_count }}</span></router-link
                    >
                  </li>
                  <li>
                    <a href="#"><i class="ti ti-user"></i></a>
                  </li>
                  <li>
                    <button class="tm-header-searchtrigger">
                      <i class="ti ti-search"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="tm-header-bottomarea">
          <div class="container">
            <div class="tm-header-bottominside">
              <div class="tm-header-searcharea">
                <form action="#">
                  <input type="text" placeholder="Enter search keyword.." />
                  <button type="submit"><i class="ti ti-search"></i></button>
                </form>
                <button class="tm-header-searchclose"><i class="ti ti-close"></i></button>
              </div>
              <div class="tm-header-inner">
                <a href="#" class="tm-header-logo">
                  <img src="../assets/images/logo.png" alt="munu" />
                </a>
                <nav class="tm-header-nav">
                  <ul>
                    <li>
                      <a href="#tm-home-area">Home</a>
                      <!-- <ul>
                        <li><a href="index.html">Homepage 1</a></li>
                        <li><a href="index-2.html">Homepage 2</a></li>
                      </ul> -->
                    </li>
                    <li><a href="#tm-about-area">About</a></li>
                    <li><a href="#tm-service-area">Service</a></li>
                    <li>
                      <a href="#tm-shop-area">Shop</a>
                      <!-- <ul>
                        <li><a href="products.html">Products</a></li>
                        <li>
                          <a href="products-leftsidebar.html">Products Left Sidebar</a>
                        </li>
                        <li>
                          <a href="products-nosidebar.html">Products Without Sidebar</a>
                        </li>
                        <li><a href="product-details.html">Product Details</a></li>
                        <li>
                          <a href="product-details-leftsidebar.html"
                            >Product Details Left Sidebar</a
                          >
                        </li>
                        <li>
                          <a href="product-details-nosidebar.html"
                            >Product Details Without Sidebar</a
                          >
                        </li>
                        <li>
                          <a href="#tm-home-area">Others</a>
                          <ul>
                            <li><a href="cart.html">Shopping Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="login-register.html">Login & Register</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                          </ul>
                        </li>
                      </ul> -->
                    </li>
                    <!-- <li class="tm-header-nav-dropdown">
                      <a href="#tm-news-area">Blog</a>
                      <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-leftsidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                        <li>
                          <a href="blog-details-leftsidebar.html"
                            >Blog Details Left Sidebar</a
                          >
                        </li>
                        <li>
                          <a href="blog-details-gallery.html">Blog Details Gallery</a>
                        </li>
                        <li><a href="blog-details-audio.html">Blog Details Audio</a></li>
                        <li><a href="blog-details-video.html">Blog Details Video</a></li>
                      </ul>
                    </li> -->
                    <li><a href="#tm-contactus-area">Contact</a></li>
                  </ul>
                </nav>
                <div class="tm-header-button">
                  <router-link to="/order" class="tm-button hash-scroll-link"
                    >View Orders</router-link
                  >
                </div>
                <div class="tm-mobilenav"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--// Header -->

      <!-- Breadcrumb Area -->
      <div
        class="tm-breadcrumb-area tm-padding-section bg-grey"
        data-bgimage="assets/images/breadcrumb-bg.jpg"
      >
        <div class="container">
          <div class="tm-breadcrumb">
            <h2>Shopping Cart</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li>Shopping Cart</li>
            </ul>
          </div>
        </div>
      </div>
      <!--// Breadcrumb Area -->

      <!-- Page Content -->
      <main class="page-content">
        <!-- Shopping Cart Area -->
        <div class="tm-section shopping-cart-area bg-white tm-padding-section">
          <div class="container">
            <!-- Shopping Cart Table -->
            <div class="tm-cart-table table-responsive">
              <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th class="tm-cart-col-image" scope="col">Image</th>
                    <th class="tm-cart-col-productname" scope="col">Product</th>
                    <th class="tm-cart-col-price" scope="col">Price</th>
                    <th class="tm-cart-col-quantity" scope="col">Quantity</th>
                    <th class="tm-cart-col-total" scope="col">Total</th>
                    <th class="tm-cart-col-remove" scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item of cart_items" :key="item.id">
                    <td>
                      <a href="#" class="tm-cart-productimage">
                        <img :src="item.image" alt="product image" />
                      </a>
                    </td>
                    <td>
                      <a href="#" class="tm-cart-productname">{{ item.name }}</a>
                    </td>
                    <td class="tm-cart-price">N {{ item.price }}</td>
                    <td>
                      <div class="tm-quantitybox">
                        <input type="text" value="1" />
                      </div>
                    </td>
                    <td>
                      <span class="tm-cart-totalprice"
                        >N {{ item.quantity * item.price }}</span
                      >
                    </td>
                    <td>
                      <button class="tm-cart-removeproduct">
                        <i class="ti ti-close"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--// Shopping Cart Table -->

            <!-- Shopping Cart Content -->
            <div class="tm-cart-bottomarea">
              <div class="row">
                <div class="col-lg-8 col-md-6">
                  <div class="tm-buttongroup">
                    <a href="#" class="tm-button">Continue Shopping</a>
                    <a href="#" class="tm-button">Update Cart</a>
                  </div>
                  <form action="#" class="tm-cart-coupon">
                    <label for="coupon-field">Have a coupon code?</label>
                    <input
                      type="text"
                      id="coupon-field"
                      placeholder="Enter coupon code"
                      required="required"
                    />
                    <button type="submit" class="tm-button">Submit</button>
                  </form>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="tm-cart-pricebox">
                    <h2>Cart Totals</h2>
                    <div class="table-responsive">
                      <table class="table table-borderless">
                        <tbody>
                          <tr class="tm-cart-pricebox-subtotal">
                            <td>Cart Subtotal</td>
                            <td>$175.00</td>
                          </tr>
                          <tr class="tm-cart-pricebox-shipping">
                            <td>(+) Shipping Charge</td>
                            <td>N{{ shipping }}</td>
                          </tr>
                          <tr class="tm-cart-pricebox-total">
                            <td>Total</td>
                            <td>$190.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#" @click="checkOut" class="tm-button"
                      >Proceed To Checkout</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--// Shopping Cart Content -->
          </div>
        </div>
        <!--// Shopping Cart Area -->
      </main>
      <!--// Page Content -->

      <!-- Footer -->
      <div class="tm-footer">
        <!-- Instagram Photos -->
        <ul id="instafeed" class="tm-instaphotos"></ul>
        <!--// Instagram Photos -->

        <div
          class="tm-footer-toparea tm-padding-section"
          data-bgimage="assets/images/footer-bgimage.jpg"
          data-white-overlay="9"
        >
          <div class="container">
            <div class="widgets widgets-footer row">
              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-widget widget-info">
                  <a class="widget-info-logo" href="index.html"
                    ><img src="assets/images/logo.png" alt="white logo"
                  /></a>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod
                    tempor inci-didunt. It is a long established fact that a reader
                    distracted.
                  </p>
                  <ul>
                    <li>
                      <a href="#"><i class="ti ti-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti ti-twitter-alt"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti ti-pinterest"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="ti ti-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-widget widget-quicklinks">
                  <h4 class="widget-title">Quick Links</h4>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Faqs</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-widget widget-recentpost-2">
                  <h4 class="widget-title">Recent Posts</h4>
                  <ul>
                    <li>
                      <h6><a href="#">Only 1 week of the year!</a></h6>
                      <span><i class="ti ti-calendar"></i> April 08, 2019</span>
                    </li>
                    <li>
                      <h6><a href="#">Best tips for munu beauty</a></h6>
                      <span><i class="ti ti-calendar"></i> April 08, 2019</span>
                    </li>
                    <li>
                      <h6><a href="#">Our favorite makeup tips</a></h6>
                      <span><i class="ti ti-calendar"></i> April 08, 2019</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12">
                <div class="single-widget widget-hours">
                  <h4 class="widget-title">Opening Hours</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod
                    tempor inci-didunt.
                  </p>
                  <ul>
                    <li><span>Mon - Tue</span>: 9.00 AM - 18.00 PM</li>
                    <li><span>Wed - Fri</span>: 8.00 AM - 17.00 PM</li>
                    <li><span>Saturday</span>: 9.00 PM - 15.00 PM</li>
                    <li><span>Sunday</span>: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tm-footer-bottomarea">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <p class="tm-footer-copyright">
                  Powered By <a href="https://thememarch.com/">ThemeMarch</a> © 2019
                </p>
              </div>
              <div class="col-md-5">
                <div class="tm-footer-payment">
                  <img src="assets/images/payment-methods.png" alt="payment methods" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--// Footer -->

      <button id="back-top-top"><i class="ti ti-arrow-up"></i></button>
    </div>
    <!--// Wrapper -->

    <div id="snackbar">Order Deleted Successfully!..</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Order",
  components: {},
  data() {
    return {
      cart_items: [],
      shipping: 1500,
      cart_sub_total: 0,
      cart_total: 0,
    };
  },
  created() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "../assets/js/main.js");
    plugin.async = true;
    document.head.appendChild(plugin);
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async deleteOrder(payload) {
      var x = document.getElementById("snackbar");
      x.className = "show";
      try {
        const res = await axios.delete(`http://localhost:3000/orders/${payload.id}`);
        if (res) {
          this.orders = res.data;
          console.log(this.orders);
          this.loadData();
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    },
    loadData() {
      this.cart_items = JSON.parse(localStorage.getItem("cart"));

      console.log(this.cart_items);
    },
    checkOut() {
      this.cart_items.forEach((element) => {
        console.log(element);
        // try {
        //   axios.post("http://localhost:3000/orders", element).then((res) => {
        //     this.products = res.data;
        //     console.log(this.products);
        //   });
        // } catch (err) {
        //   console.log(err);
        // }
      });
    },
  },
};
</script>
<style></style>
