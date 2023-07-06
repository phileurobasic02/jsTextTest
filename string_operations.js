import { capitalize, reverse } from './transformations.js';

const text = "hello, world!";

const capitalizedText = capitalize(text);
console.log(`Capitalized text: ${capitalizedText}`);

const reversedText = reverse(text);
console.log(`Reversed text: ${reversedText}`);
