function showWeather() {
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if (city === "") {
        result.innerText = "Enter a city!";
        return;
    }

    result.innerHTML =
        "📍 " + city +
        "<br>🌡️ Temperature: 28°C" +
        "<br>💧 Humidity: 65%" +
        "<br>🌤️ Condition: Sunny";
}