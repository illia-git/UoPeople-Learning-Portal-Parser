#### UoPeople Learning Portal Parser

This repository contains two JavaScript scripts designed to parse quiz and assessment form elements from the UoPeople Learning Portal. These scripts can be executed in the browser's developer console to extract and format specific information for personal use.

#### Scripts:

1. **parseQuiz.js**: Extracts questions and their options from a quiz page.
2. **parseAssessmentForm.js**: Extracts and formats information from an assessment form page.

#### Usage:

1. Navigate to the desired page on the UoPeople Learning Portal.
2. Open the browser's developer console (usually by pressing `F12` or `Ctrl+Shift+I`).
3. Copy and paste the desired script into the console and press `Enter`.
4. The parsed information will be displayed in the console, ready for copying or further processing.

#### Details:

- **parseQuiz.js**: This script selects all `div` elements with the class `que` and extracts the question text and options. The results are logged in a structured format.

- **parseAssessmentForm.js**: This script selects all `fieldset` elements with the classes `assessmentform` and `clearfix`. It extracts the aspect title, overview, and grade options, and then formats the information in a specific structure. The results are logged in a structured format.

#### Disclaimer:

These scripts are intended for personal use only and are not affiliated with or endorsed by the University of the People. Always respect the terms of service and privacy policies of the UoPeople Learning Portal. Use these scripts responsibly and ethically.
