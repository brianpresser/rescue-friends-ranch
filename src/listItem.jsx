import React from 'react';
import DogTwo from '../src/assets/images/dog-2.jpg';

export const ListItem = () => {

  const listItems = [{
    user : {
      image: '',
      firstName: '',
      lastName: '',
      homeAddressNumber: '',
      streetName: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNumber: '',
      comments: '',
      links: [{linkName: '', linkAddress: '', linkIcon: ''}]
    },
    animals: [{
      image: DogTwo,
      type: 'dog',
      breed: 'good boi',
      age: 0,
      weight: 0,
      comments: ''
    }]
  }]

  const getItems = items => {
    return items.map((item, i) => {
      return (
        <li key={i}>
          <div>{item.animals[0].type}</div>
        </li>
      )
    })
  }

  return (
    <div>
      <ul>
        {getItems(listItems)}
      </ul>
    </div>
  )
}