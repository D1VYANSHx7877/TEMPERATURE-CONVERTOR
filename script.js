document.getElementById('convertBtn').addEventListener('click', function() {
  var inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
  var inputUnit = document.getElementById('inputUnit').value;
  var outputUnit = document.getElementById('outputUnit').value;
  var resultDiv = document.getElementById('result');

  if (isNaN(inputTemperature)) {
    resultDiv.textContent = 'Please enter a valid temperature.';
    return;
  }

  var convertedTemperature;

  if (inputUnit === 'celsius') {
    if (outputUnit === 'fahrenheit') {
      convertedTemperature = inputTemperature * 9/5 + 32;
    } else if (outputUnit === 'kelvin') {
      convertedTemperature = inputTemperature + 273.15;
    } else {
      convertedTemperature = inputTemperature;
    }
  } else if (inputUnit === 'fahrenheit') {
    if (outputUnit === 'celsius') {
      convertedTemperature = (inputTemperature - 32) * 5/9;
    } else if (outputUnit === 'kelvin') {
      convertedTemperature = (inputTemperature - 32) * 5/9 + 273.15;
    } else {
      convertedTemperature = inputTemperature;
    }
  } else if (inputUnit === 'kelvin') {
    if (outputUnit === 'celsius') {
      convertedTemperature = inputTemperature - 273.15;
    } else if (outputUnit === 'fahrenheit') {
      convertedTemperature = (inputTemperature - 273.15) * 9/5 + 32;
    } else {
      convertedTemperature = inputTemperature;
    }
  }

  resultDiv.textContent = 'Converted Temperature: ' + convertedTemperature.toFixed(2) + ' ' + outputUnit;
});
