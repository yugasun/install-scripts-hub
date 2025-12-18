const fs = require('fs');
const path = require('path');

/**
 * This script parses the GitHub Issue body and updates src/lib/data/scripts.ts
 * It's designed to be run in a GitHub Action.
 */

const SCRIPTS_DATA_PATH = path.join(process.cwd(), 'src/lib/data/scripts.ts');

function parseIssueBody(body) {
  const extractField = (label) => {
    const regex = new RegExp(`### ${label}\\s*([\\s\\S]*?)(?=###|$)`);
    const match = body.match(regex);
    return match ? match[1].trim() : '';
  };

  return {
    id: extractField('Script ID'),
    url: extractField('Script URL'),
    sourceUrl: extractField('Source URL'),
    name_en: extractField('Name \\(English\\)'),
    description_en: extractField('Description \\(English\\)'),
    name_zh: extractField('Name \\(Chinese\\)'),
    description_zh: extractField('Description \\(Chinese\\)'),
    command: extractField('Custom Command \\(Optional\\)'),
  };
}

function updateScriptsData(newData) {
  console.log('Reading existing scripts data...');
  let content = fs.readFileSync(SCRIPTS_DATA_PATH, 'utf8');

  // Check if ID already exists
  if (content.includes(`id: '${newData.id}'`)) {
    console.error(`Error: Script ID "${newData.id}" already exists.`);
    process.exit(1);
  }

  const escape = (str) => str.replace(/'/g, "\\'");

  const newEntry = `	{
		id: '${escape(newData.id)}',
		url: '${escape(newData.url)}',
		sourceUrl: '${escape(newData.sourceUrl)}',
		translations: {
			en: {
				name: '${escape(newData.name_en)}',
				description: '${escape(newData.description_en)}',
			},
			zh: {
				name: '${escape(newData.name_zh)}',
				description: '${escape(newData.description_zh)}',
			},
		},
		${newData.command ? `command: '${escape(newData.command)}',` : ''}
	},
];`;

  console.log('Adding new entry:', newData.id);
  content = content.replace(/];\s*$/, newEntry);

  fs.writeFileSync(SCRIPTS_DATA_PATH, content);
  console.log('Successfully updated scripts data!');
}

// Main execution
const issueBody = process.env.ISSUE_BODY;
if (!issueBody) {
  console.error('Error: ISSUE_BODY environment variable is not set.');
  process.exit(1);
}

const parsedData = parseIssueBody(issueBody);

// Basic validation of parsed data
if (!parsedData.id || !parsedData.url || !parsedData.name_en) {
  console.error('Error: Failed to parse required fields from issue body.');
  console.log('Parsed data:', parsedData);
  process.exit(1);
}

updateScriptsData(parsedData);
