const temperatureInput = document.getElementById('temperature-input');
const temperatureUnit = document.getElementById('temperature-unit');
const convertButton = document.getElementById('convert-button');
const convertedTemperature = document.getElementById('converted-temperature');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = temperatureUnit.value;

  if (unit === 'celsius') {
    const fahrenheit = temperature * 9/5 + 32;
    const kelvin = temperature + 273.15;
    convertedTemperature.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`;
  } else if (unit === 'fahrenheit') {
    const celsius = (temperature - 32) * 5/9;
    const kelvin = (temperature - 32) * 5/9 + 273.15;
    convertedTemperature.textContent = `Celsius: ${celsius.toFixed(2)}°C, Kelvin: ${kelvin.toFixed(2)}K`;
  } else if (unit === 'kelvin') {
    const celsius = temperature - 273.15;
    const fahrenheit = (temperature - 273.15) * 9/5 + 32;
    convertedTemperature.textContent = `Celsius: ${celsius.toFixed(2)}°C, Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  }
});