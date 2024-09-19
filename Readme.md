# Small demo

# .env example

```dotenv
INTEGRATION='{"endpoint":"https://condo.d.doma.ai/admin/api","authRequisites":{"phone":"****","password":"****"}}'
ORGANIZATION=****
PROPERTY_ID=****
DISABLE_LOGGING=false
```

# To run on node v14.19.x

```shell
yarn
node index.js
```

# Example output

```shell
currentUser {
  type: 'staff',
  name: 'Demo пользователь',
  avatar: null,
  meta: null,
  isPhoneVerified: true,
  isEmailVerified: false,
  isAdmin: false,
  isSupport: false,
  id: '41d01a01-d2b9-41b4-9460-54d17601311a',
  dv: 1,
  sender: { dv: 1, fingerprint: 'UqbtCKsKQ5bk' },
  createdBy: null,
  updatedBy: null,
  createdAt: '2022-09-08T18:58:13.325Z',
  updatedAt: '2022-09-08T18:58:13.325Z'
}


classifier {
  id: 'da68292d-c5ab-41e7-b1b8-8df50c97af53',
  place: { id: '5e341876-fcfb-4f2c-8a7f-d381979809a6', name: 'Квартира' },
  category: { id: '05d5da18-7b68-4f2d-a486-41ae30fe8e57', name: 'Канализация' }
}


newTicket {
  completedAt: null,
  organization: {
    id: '52284b8d-221d-4d3c-ba15-ce81bc48bac6',
    name: 'ООО "Связь-Инвест"',
    country: 'ru'
  },
  property: {
    id: 'add0910d-10a6-4f47-b8ab-4238011fe258',
    name: 'г Екатеринбург, ул Бажова, д 68',
    address: 'г Екатеринбург, ул Бажова, д 68',
    deletedAt: null,
    addressMeta: { dv: 1, value: 'г Екатеринбург, ул Бажова, д 68' }
  },
  propertyAddress: 'г Екатеринбург, ул Бажова, д 68',
  unitType: null,
  unitName: null,
  sectionName: null,
  sectionType: 'section',
  floorName: null,
  status: {
    id: '6ef3abc4-022f-481b-90fb-8430345ebfc2',
    name: 'Открыта',
    type: 'new_or_reopened',
    organization: null,
    colors: { primary: '#EB3468', secondary: '#FFFFFF', additional: '#FFFFFF' }
  },
  number: 100371,
  client: null,
  clientName: null,
  clientEmail: null,
  clientPhone: null,
  contact: null,
  details: 'Не набирается вода в туалете в унитаз просьба от Председателя МКД',
  source: {
    id: '7da1e3be-06ba-4c9e-bba6-f97f278ac6e4',
    name: 'Другое',
    type: 'other'
  },
  sourceMeta: null,
  classifier: {
    id: 'da68292d-c5ab-41e7-b1b8-8df50c97af53',
    place: { id: '5e341876-fcfb-4f2c-8a7f-d381979809a6', name: 'Квартира' },
    category: { id: '05d5da18-7b68-4f2d-a486-41ae30fe8e57', name: 'Канализация' },
    problem: null
  },
  id: '775807a7-fb4b-4391-bd4d-08508da2dc44',
  dv: 1,
  sender: { dv: 1, fingerprint: 'apollo-server-client' },
  createdBy: {
    id: '41d01a01-d2b9-41b4-9460-54d17601311a',
    name: 'Demo пользователь'
  },
  updatedBy: {
    id: '41d01a01-d2b9-41b4-9460-54d17601311a',
    name: 'Demo пользователь'
  },
  createdAt: '2023-01-24T13:13:52.376Z',
  updatedAt: '2023-01-24T13:13:52.376Z'
}


ticketFile {
  id: 'a5150a22-6782-4e0c-b7a3-bfbdd56d603d',
  file: {
    id: 'clda9dq1704e40qsj1zv07yky',
    originalFilename: 'Readme.md',
    publicUrl: 'https://condo.d.doma.ai/api/files/ticket/clda9dq1704e40qsj1zv07yky.md',
    mimetype: 'text/markdown'
  },
  organization: { id: '52284b8d-221d-4d3c-ba15-ce81bc48bac6' },
  ticket: { id: '775807a7-fb4b-4391-bd4d-08508da2dc44' },
  dv: 1,
  sender: { dv: 1, fingerprint: 'apollo-server-client' },
  createdBy: {
    id: '41d01a01-d2b9-41b4-9460-54d17601311a',
    name: 'Demo пользователь'
  },
  updatedBy: {
    id: '41d01a01-d2b9-41b4-9460-54d17601311a',
    name: 'Demo пользователь'
  },
  createdAt: '2023-01-24T13:13:55.094Z',
  updatedAt: '2023-01-24T13:13:55.094Z'
}
All done


```
<img width="884" alt="image" src="https://user-images.githubusercontent.com/1640424/214308137-fa8d756a-46d2-4a26-941b-c0340b052128.png">

