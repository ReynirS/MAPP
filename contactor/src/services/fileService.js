import * as FileSystem from 'expo-file-system';
const contactDirectory = `${FileSystem.documentDirectory}contacts`;
import {filterContacts} from './contactService';

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const writeContact = async (contact, location) => {
  return await onException(() => FileSystem.writeAsStringAsync(location, contact));
}

const randomNameGenerator = number => {
  var numStr = number.toString();
	var cleanSpaces = numStr.replace(/\s/s, '');
	var nameArr = [];
	for(var i = 0; i < cleanSpaces.length; i++){
	nameArr.push(String.fromCharCode(97+parseInt(cleanSpaces[i])));
	}
	var name = nameArr.toString().replace(/,/g, '');
	return name;
}

const validNameMaker = (name, number) => {
  const cleanSpecialCharacters = name.replace(/[^A-Za-z0-9\s-]/g, "");
  var cleanSpaces = cleanSpecialCharacters.replace(/\s/g, '-');
  if(cleanSpaces === ''){
    cleanSpaces = randomNameGenerator(number);
  }
  return cleanSpaces;
}

export const addContact = async contact => {
  const contactName = validNameMaker(contact.name, contact.number);
  const cJSON = JSON.stringify(contact);
  await onException(() => writeContact(cJSON, `${contactDirectory}/${contactName}.json`));
}

const setupDirectory = async () =>{
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if(!dir.exists){
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
}

export const loadImportedContacts = async () => {
  const data = await filterContacts();
  await setupDirectory();
  for(var i = 0; i < data.length; i++){
      addContact(data[i]);
  }
}

export const loadContact = async contactName =>{
  return await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${contactName}`));
}

export const removeContact = async contact => {
  console.log(contact);
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  console.log(result);
  const fileName = validNameMaker(contact.name, contact.number);
  return await onException(() => FileSystem.deleteAsync(`${contactDirectory}/${fileName}.json`));
}

export const getAllContacts = async () => {
  await setupDirectory();

  const result = await onException(()=> FileSystem.readDirectoryAsync(contactDirectory));
  return Promise.all(result.map(async name => {
    const contact = await loadContact(name);
    const contactJSON = JSON.parse(contact);
    return {
      "name": contactJSON.name,
      "number": contactJSON.number,
      "image": contactJSON.image,
    };
  }));
}
