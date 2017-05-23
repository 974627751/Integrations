const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const datafire = require('datafire');

const MAX_DESCRIPTION_LENGTH = 120;

const maybeMkdirp = (dir) => {
  try {
    mkdirp.sync(dir);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

const truncateDescription = (desc) => {
  if (!desc) return;
  desc = desc || '';
  desc = desc.replace(/<(?:.|\n)*?>/gm, '');
  let newLine = desc.indexOf('\n');
  if (newLine > -1) {
    desc = desc.substring(0, newLine);
  }
  if (desc.length > MAX_DESCRIPTION_LENGTH) {
    desc = desc.substring(0, MAX_DESCRIPTION_LENGTH) + '...';
  }
  return desc;
}

const BASE_DIR = __dirname + '/../integrations/';
const OUT_DIR = __dirname + '/../json/';

let list = {};
function addDirToList(dir) {
  fs.readdirSync(dir).forEach(name => {
    console.log('adding', name);
    let packageName = require.resolve(path.join(dir, name));
    let integ = require(packageName);
    let package = require(path.join(dir, name, 'package.json'));
    if (list[name]) throw new Error("Duplicate name " + name);
    list[name] = {
      id: name,
      title: integ.title,
      description: integ.description,
      security: integ.security,
      logoURL: integ.logoURL,
    };
    let details = Object.assign({}, list[name]);
    list[name].description = truncateDescription(list[name].description);
    list[name].actionCount = integ.allActions.length;

    details.actions = integ.allActions.map(action => {
      details.definitions = details.definitions || action.inputSchema.definitions;
      let actionDetails = {
        id: action.id.split('/')[1],
        title: action.title,
        description: action.description,
        inputSchema: Object.assign({definitions: null}, action.inputSchema),
        outputSchema: Object.assign({definitions: null}, action.outputSchema),
      }
      if (action.security && action.security[name]) {
        actionDetails.security = {};
        actionDetails.security[name] = {integration: name};
      }
      delete actionDetails.inputSchema.definitions;
      delete actionDetails.outputSchema.definitions;
      return actionDetails;
    })
    let integDir = path.join(OUT_DIR, name, package.version);
    maybeMkdirp(integDir);
    fs.writeFileSync(path.join(integDir, 'index.json'), JSON.stringify(details, null, 2));
    if (integ.ajv) {
      integ.ajv._cache.clear();
    }
    integ = null;
    for (let key in require.cache) {
      if (key.indexOf(path.join(__dirname, '..')) !== -1) {
        delete require.cache[key];
      }
    }
  })
}

addDirToList(BASE_DIR + 'generated');
addDirToList(BASE_DIR + 'manual');
fs.writeFileSync(OUT_DIR + 'list.json', JSON.stringify(list, null, 2));

