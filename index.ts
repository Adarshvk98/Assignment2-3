// Import stylesheets
import './style.css';

interface UserDetails {
  id: number;
  name: string;
  year: number;
  address?: string;
}

// Assignment 2
/* Add an additional key address: 
“Any Address of your choice” with each record in the following array.
 */
const data: UserDetails[] = [
  {
    id: 1,
    name: 'cerulean',
    year: 2000,
  },
  {
    id: 2,
    name: 'fuchsia rose',
    year: 2001,
  },
  {
    id: 5,
    name: 'Tigerlily',
    year: 2004,
  },
  {
    id: 6,
    name: 'blue turquoise',
    year: 2005,
  },
];

const address = [
  {
    id: 1,
    value: 'Address 1',
  },
  {
    id: 2,
    value: 'Address 2',
  },
  {
    i: 5,
    value: 'Address 5',
  },
  {
    id: 6,
    value: 'Address 6',
  },
];

const addAddress = (userDetails: UserDetails[]): UserDetails[] => {
  return (userDetails || []).map((item, index) => {
    if (item?.id === address[index]?.id) {
      return {
        ...item,
        address: address[index]?.value,
      };
    }
  });
};

// Assignment 3
/* Using the above array, filter and get all records that contain year greater than or equal to 2001
 */

const filterYear = (userDetails: UserDetails[]): UserDetails[] => {
  return (userDetails || []).filter(({ year }) => year >= 2001);
};

// Output

let addressKeyAdded = addAddress(data);

let yearFilter = filterYear(data);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Assignment 2 </h1>
<div>
  Add an additional key address: 
  “Any Address of your choice” with each record in the following array.
</div>
Output :
<code>${JSON.stringify(addressKeyAdded)}</code>

<h1>Assignment 3 </h1>
<div>
Using the above array, filter and get all records that contain year greater than or equal to 2001

</div>
Output :
<code>${JSON.stringify(yearFilter)}</code>
`;
