var hotel = {
  name: "park",
  rooms: 120,
  booked: 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elPool = document.getElementById("Pool");
elPool.textContent = "Pool: " + hotel.pool;

var elGym = document.getElementById("Gym");
elGym.textContent = "Gym: " + hotel.gym;
