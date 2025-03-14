// Sample restaurant data with categories and items
const restaurants = [
    {
      name: "Pizza Palace",
      category: "Pizza",
      rating: 4.5,
      delivery: "30 min",
      image: "https://tse4.mm.bing.net/th?id=OIP.J2yx4muErznusuQqBYCMdgHaHa&pid=Api&P=0&h=180",
      items: [
        { name: "Margherita Pizza", image: "https://tse2.mm.bing.net/th?id=OIP.W2Sds2jLM34SkwkCErPgYQHaEK&pid=Api&P=0&h=180", price: 12 },
        { name: "Pepperoni Pizza", image: "https://tse1.mm.bing.net/th?id=OIP.8U2v1mDJdak3MwPBDdYMcQHaFE&pid=Api&P=0&h=180", price: 14 }
      ]
    },
    {
      name: "Burger Hub",
      category: "Burgers",
      rating: 4.2,
      delivery: "20 min",
      image: "https://tse2.mm.bing.net/th?id=OIP.qGi86XUyFz-k-qtNkXcx1QHaHa&pid=Api&P=0&h=180",
      items: [
        { name: "Cheeseburger", image: "https://tse2.mm.bing.net/th?id=OIP.omaiF17Y0oqCf21Dzr6WcwHaEo&pid=Api&P=0&h=180", price: 8 },
        { name: "Double Bacon Burger", image: "https://tse4.mm.bing.net/th?id=OIP.xADV-nx0NSJs_0C_6pGyKAHaE8&pid=Api&P=0&h=180", price: 10 }
      ]
    },
    {
      name: "Dessert World",
      category: "Desserts",
      rating: 4.8,
      delivery: "25 min",
      image: "https://tse1.mm.bing.net/th?id=OIP._fCqZxcdIOFR27ooB5D2iAHaHa&pid=Api&P=0&h=180",
      items: [
        { name: "Chocolate Cake", image: "https://sp.yimg.com/ib/th?id=OPAC.Oqidruepp6JSyA474C474&o=5&pid=21.1&w=160&h=105", price: 5 },
        { name: "Ice Cream Sundae", image: "https://tse3.mm.bing.net/th?id=OIP.XmiNhOfrec8qPUgE3wojkQAAAA&pid=Api&P=0&h=180", price: 4 }
      ]
    },
  
  
    {
      name: "Sushi Express",
      category: "Japanese",
      rating: 4.7,
      delivery: "35 min",
      image: "https://cdn.dribbble.com/users/1238488/screenshots/15478349/sushi_4x.png",
      items: [
        { name: "California Roll", image: "https://www.simplyrecipes.com/thmb/yRMTPNJyxzHxViFj7VL0AyzlTTk=/5616x3744/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-California-Roll-LEAD-04-ca3515e6b8154644b45dc40e865a5217.jpg", price: 12 },
        { name: "Salmon Nigiri", image: "https://www.sushigallery.com.au/wp-content/uploads/2019/08/Salmon-Nigiri-Pack-scaled.jpg", price: 15 }
      ]
    },
    {
      name: "Tandoori Tadka",
      category: "Indian",
      rating: 4.9,
      delivery: "40 min",
      image: "https://lh5.googleusercontent.com/p/AF1QipORLjq_vgetfW2GiFcoPOx03ICc42a3cHLR87j3",
      items: [
        { name: "Butter Chicken", image: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg", price: 16 },
        { name: "Paneer Tikka", image: "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg", price: 14 }
      ]
    },
    {
      name: "Healthy Bites",
      category: "Healthy",
      rating: 4.3,
      delivery: "25 min",
      image: "https://static.vecteezy.com/system/resources/previews/000/595/729/original/healthy-life-logo-template-vector-icon-vector.jpg",
      items: [
        { name: "Quinoa Salad", image: "https://cdn.momsdish.com/wp-content/uploads/2019/11/Beet-Quinoa-Salad-02-scaled.jpg", price: 10 },
        { name: "Avocado Toast", image: "https://i.redd.it/fdh09it6w4j41.jpg", price: 8 }
      ]
    }
  ];
  
  // Store cart items and user details
  let cart = [];
  let currentUser = null;
 
  
  // Display all restaurants by default
  function showRestaurants() {
    const restaurantList = document.getElementById("restaurant-list");
    restaurantList.innerHTML = "";
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += `
        <div class="restaurant-card">
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <h3>${restaurant.name}</h3>
          <p>Category: ${restaurant.category}</p>
          <p>Rating: ⭐⭐⭐⭐ (${restaurant.rating})</p>
          <p>Delivery: ${restaurant.delivery}</p>
          <button onclick="selectRestaurant('${restaurant.name}')">View Menu</button>
        </div>`;
    });
  } function showAccountForm() {
    document.getElementById("create-account-section").style.display = "block";
    document.getElementById("create-account-section").scrollIntoView({ behavior: "smooth" });
  }
  
  // Handle account creation
  function createAccount() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (username === "" || email === "") {
      alert("Please enter both username and email.");
      return;
    }
  
    // Store user data (optional: save it in local storage)
    alert(`Welcome, ${username}! Your account has been created.`);
    document.getElementById("create-account-section").style.display = "none";
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }document.getElementById("address-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const address = {
      line1: document.getElementById("address-line1").value,
      line2: document.getElementById("address-line2").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip-code").value
    };
    
    alert("Your address has been saved!");
    console.log("Saved Address:", address);
    // Save address to local storage or send to server here
  });
  
  
  // Filter restaurants by category
  function filterByCategory(category) {
    const restaurantList = document.getElementById("restaurant-list");
    restaurantList.innerHTML = "";
  
    const filteredRestaurants = category === "all" 
      ? restaurants 
      : restaurants.filter((restaurant) => restaurant.category === category);
  
    filteredRestaurants.forEach((restaurant) => {
      restaurantList.innerHTML += `
        <div class="restaurant-card">
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <h3>${restaurant.name}</h3>
          <p>Category: ${restaurant.category}</p>
          <p>Rating: ⭐⭐⭐⭐ (${restaurant.rating})</p>
          <p>Delivery: ${restaurant.delivery}</p>
          <button onclick="selectRestaurant('${restaurant.name}')">View Menu</button>
        </div>`;
    });
  }
  
  // Select a restaurant and display its menu
  function selectRestaurant(restaurantName) {
    const selected = restaurants.find((restaurant) => restaurant.name === restaurantName);
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = `<h3>${selected.name} Menu</h3>`;
  
    selected.items.forEach((item) => {
      cartItems.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name} - $${item.price}</p>
          <button onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">Add to Cart</button>
        </div>`;
    });
  
    // Scroll to the cart section to view menu items
    document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
  }
  
  // Add items to the cart
  function addToCart(itemName, price, itemImage) {
    cart.push({ item: itemName, price, image: itemImage });
    updateCart();
  }
  
  // Update cart display
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartSummary = document.createElement("div");
    cartSummary.className = "cart-summary";
  
    if (cart.length === 0) {
      cartItems.innerHTML = "<p>No items in the cart yet.</p>";
      return;
    }
  
    cartItems.innerHTML = "";
    cart.forEach((cartItem, index) => {
      cartItems.innerHTML += `
        <div class="cart-item">
          <img src="${cartItem.image}" alt="${cartItem.item}">
          <p>${cartItem.item} - $${cartItem.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>`;
    });
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartItems.innerHTML += `<h3>Total: $${total}</h3>`;
    cartItems.appendChild(cartSummary);
  }
  
  // Remove an item from the cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Proceed to checkout
  function checkout() {
    if (cart.length === 0) {
      alert("Please add items to your cart before proceeding to checkout.");
      return;
    }
  
    if (!currentUser) {
      alert("Please create an account before proceeding to checkout.");
      return;
    }
  
    // Show payment section
    document.getElementById("payment-section").style.display = "block";
    document.getElementById("payment-section").scrollIntoView({ behavior: "smooth" });
  }
  
  // Handle payment form submission
  document.getElementById("payment-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Payment successful! Your order is being processed.");
    cart = [];
    updateCart();
    document.getElementById("payment-section").style.display = "none";
  });
  
  // Create Account
  function createAccount() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (username === "" || email === "") {
      alert("Please enter both username and email.");
      return;
    }
  
    currentUser = { username, email };
    alert(`Welcome, ${username}! Your account has been created.`);
    document.getElementById("create-account-section").style.display = "none";
    showRestaurants();
  }
  
  // Show the account creation form
  function showAccountForm() {
    document.getElementById("create-account-section").style.display = "block";
    document.getElementById("create-account-section").scrollIntoView({ behavior: "smooth" });
  } // Show payment section
  document.getElementById("payment-section").style.display = "block";


// Handle payment form submission
document.getElementById("payment-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Payment successful! Your order is being processed.");
  cart = [];
  updateCart();
  document.getElementById("payment-section").style.display = "none";
});
  
  