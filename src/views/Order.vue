<template>
  <div>
    <router-link to="/" class="hash-scroll-link">back to home</router-link>
    <div style="overflow-x: auto">
      <table>
        <tr>
          <th>S/N</th>
          <th>Product</th>
          <th>Reference</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
        <tr v-for="(order, index) of orders" :key="order.id">
          <td>{{ index + 1 }}</td>
          <td>{{ order.product_name }}</td>
          <td>{{ order.txn_ref }}</td>
          <td>{{ order.price }}</td>
          <td>{{ order.quantity }}</td>
          <td>
            <button @click="deleteOrder(order)">
              <i style="color: hotpink" class="ti ti-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
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
      orders: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async deleteOrder(payload) {
      try {
        const res = await axios.delete(`http://localhost:3000/orders/${payload.id}`);
        if (res) {
          this.orders = res.data;
          console.log(this.orders);
          this.loadData();
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async loadData() {
      try {
        const res = await axios.get("http://localhost:3000/orders");
        this.orders = res.data;
        console.log(this.orders);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #4caf50;
  color: white;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 15px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
