import React from 'react';
import * as Contacts from 'expo-contacts';
import * as Permission from 'expo-permissions';

const getPermissions = async permissionsTypes => (
  await Promise.all(permissionsTypes.map(async type => await Permission.askAsync(type)))
);

export const loadContacts = async () => {
  await getPermissions([Permission.CONTACTS]);
  const result = await Contacts.getContactsAsync();
  const contact = [];
  result.data.forEach(element => {
    if(typeof element.phoneNumbers !== 'undefined'){
      const cont = {
        "name": element.name,
        "number": element.phoneNumbers[0].number
      };
      contact.push(cont);
    }
  });
  // console.log(contact);
  //const names = result.data.filter(object => object.firstName);
  //const names = result.filter(object => object.firstName > 4);

  //console.log(names);
}
