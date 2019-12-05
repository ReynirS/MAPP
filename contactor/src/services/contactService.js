import React from 'react';
import * as Contacts from 'expo-contacts';
import * as Permission from 'expo-permissions';

const getPermissions = async permissionsTypes => (
  await Promise.all(permissionsTypes.map(async type => await Permission.askAsync(type)))
);

const loadContacts = async () => {
  await getPermissions([Permission.CONTACTS]);
  const allContacts = await Contacts.getContactsAsync();
  return allContacts;
}

const variableChecker = variable =>{
  if(typeof variable === 'undefined'){
    return 'NaN';
  }
  else{
    return variable;
  }
}

export const filterContacts = async () => {
  const allContacts = await loadContacts();
  const filtered = [];
  allContacts.data.forEach(element => {
      var numberChecker = true;
      var imageUri = 'No Image';
      var number = 'No Number';
      if(typeof element.phoneNumbers !== 'undefined'){
        number = element.phoneNumbers[0].number;
      }
      const name = variableChecker(element.name);
      if(element.imageAvailable === true){
        imageUri = element.image.uri;
      }
      const con = {
        "name": name,
        "number": number,
        "image": imageUri
      };
      filtered.push(con);
  });
  return filtered;
}
