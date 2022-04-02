# regex-validation

This validation function will validate Regex numeric, alphaonly, alphanumeric, alphanumericwithspecialchar, email

<h2>Install</h2>
npm i regex-validation<br><br>

<h2>Parameters</h2>
It'll accept two parameters- <br>
1. Original Data <br>
2. Validation Type <br><br>

<h2>Return Type</h2>
It'll return a boolean.<br><br>

<table>
  <tr>
    <th>Parameters</th>
    <th>Data Type</th>
    <th>Mandatory</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Original Data</td>
    <td>string</td>
    <td>Yes</td>
    <td>Need to send value, which needs to be validated</td>
  </tr>
  <tr>
    <td>Validation Type</td>
    <td>string</td>
    <td>Yes</td>
    <td>Need to send type of validation (numeric, alpha-numeric, alphabets-with-space)</td>
  </tr>
 
</table><br>

<h2>Implementation Guideline</h2>
Import the package from: <br><b>const validateRegexData= require('regex-validation')</b> or <b>import validateRegexData from 'regex-validation';</b><br>Use the function: <br><b>console.log(validateRegexData("123E45","numeric"))</b><br><br>

<h2>Realtime Examples</h2>

<b>Use case \# 1:</b><br>
<u>Requirement:</u><br> If the original data is `123E45` (which you want numeric regex validation) <br>
<u>Use:</u> <br>validateRegexData("123E45","numeric");<br>
<u>Output:</u> <br>`false`.<br><br>

<b>Use case \# 2:</b><br>
<u>Requirement:</u><br> If the original data is `123E45` (which you want alpha-numeric regex validation) <br>
<u>Use:</u> <br>validateRegexData("123E45","alpha-numeric");<br>
<u>Output:</u> <br>`true`.<br><br>

<b>Use case \# 3:</b><br>
<u>Requirement:</u><br> If the original data is `Demo Data` (which you want alphabets-with-space regex validation) <br>
<u>Use:</u> <br>validateRegexData("Demo Data","alphabets-with-space");<br>
<u>Output:</u> <br>`true`.<br><br>

<h2>Version History</h2>
<h3>1.0.0</h3>
Actual code and documentation published
<br><br>

<h2>Upcoming Updates</h2>
<h3>1.0.1</h3>
Others regex validation type will be added
<br><br>
