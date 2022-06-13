const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      title: "Mr.",
      picture: "https://randomuser.me/portraits/men/20.jpg",
      email: "patrickstar@gmail.com",
      dob: "ttt",
      age: 23,
      street: "rand",
      postcode: "rand",
      state: "rand",
      city: "rand",
      phone: "444",
      username: "josh",
      password: "secret",
    };
  },
  mounted() {
    fetchDataAPI(this);
  },
  methods: {
    getUser() {
      event.preventDefault();
      fetchDataAPI(this);
    },
  },
});

function updateFields(that, results) {
  that.age = results[0].dob.age;
  that.title = results[0].name.title;
  that.firstName = results[0].name.first;
  that.lastName = results[0].name.last;
  that.gender = results[0].gender;
  that.picture = results[0].picture.large;
  that.city = results[0].location.city;
  that.username = results[0].login.username;
}

async function fetchDataAPI(that) {
  const res = await fetch("https://randomuser.me/api/");
  const { results } = await res.json();

  updateFields(that, results);
}

app.mount("#app");
