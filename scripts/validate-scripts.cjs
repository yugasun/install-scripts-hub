const fs = require('fs');
const path = require('path');

// Simple script to validate that all shell scripts referenced in the data exist
// Run with: node scripts/validate-scripts.js

const SCRIPTS_DATA_PATH = path.join(__dirname, '../src/lib/data/scripts.ts');
const INSTALLS_PATH = path.join(__dirname, '../public/installs');

function validate() {
  console.log('🔍 Validating scripts data...');
  
  const content = fs.readFileSync(SCRIPTS_DATA_PATH, 'utf8');
  
  // Extract URLs using regex (simple approach for this demo)
  const urlRegex = /url:\s*['"]([^'"]+)['"]/g;
  let match;
  const urls = [];
  
  while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  let hasError = false;
  urls.forEach(url => {
    if (url.startsWith('http')) return;
    
    const filePath = path.join(INSTALLS_PATH, url);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing script file: ${url} (expected at ${filePath})`);
      hasError = true;
    } else {
      console.log(`✅ Found: ${url}`);
    }
  });
  
  if (hasError) {
    process.exit(1);
  } else {
    console.log('✨ All scripts validated successfully!');
  }
}

validate();
