const fs = require('fs');
const { decisions } = require('./tokens');

const toCamelCase = (string) => {
  return string.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
};

const cleanLines = (string = '') => {
  return string.trim().replace(/^\n\n/gm, '\n');
};

function transformTokens(object, parentKey = '') {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey];
    const camelCaseKey = parentKey ? `${parentKey}${toCamelCase(objectKey)}` : toCamelCase(objectKey);

    if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(value, `${camelCaseKey}`)}`;
    }

    return `${transformedTokens}\n  ${camelCaseKey}: '${value}',`;
  }, '');
}

function buildColors() {
  const transformedDecisions = transformTokens(decisions);
  const customProperties = `${transformedDecisions}\n`;

  const data = `export const colors = {\n${cleanLines(customProperties)}\n};\n`;

  fs.writeFile('./src/assets/colors/index.ts', data, 'utf8', (error) => {
    if (error) throw error;
  });
}

buildColors();
