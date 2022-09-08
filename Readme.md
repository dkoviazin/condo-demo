# Small demo

# .env example

```dotenv
INTEGRATION='{"endpoint":"https://condo.d.doma.ai/admin/api","authRequisites":{"phone":"+12313112123","password":"Без пароля"}}'
ORGANIZATION=52284b8d-221d-4d3c-ba15-ce81bc48bac6
PROPERTY_ID=add0910d-10a6-4f47-b8ab-4238011fe258
DISABLE_LOGGING=false
```

# To run on node v14.19.x

```shell
yarn
node index.js
```

# Example output

```shell
Logged in as  {
  type: 'staff',
  name: 'Demo пользователь',
  avatar: null,
  meta: null,
  isPhoneVerified: true,
  isEmailVerified: false,
  importId: null,
  importRemoteSystem: null,
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
Ticket is classified as {
  place: { id: '5e341876-fcfb-4f2c-8a7f-d381979809a6', name: 'Квартира' },
  category: { id: '05d5da18-7b68-4f2d-a486-41ae30fe8e57', name: 'Канализация' },
  classifier: {
    id: 'da68292d-c5ab-41e7-b1b8-8df50c97af53',
    place: { id: '5e341876-fcfb-4f2c-8a7f-d381979809a6', name: 'Квартира' },
    category: { id: '05d5da18-7b68-4f2d-a486-41ae30fe8e57', name: 'Канализация' }
  }
}
Created new ticket {
  canReadByResident: false,
  completedAt: null,
  lastCommentAt: null,
  lastResidentCommentAt: null,
  isResidentTicket: false,
  reviewValue: null,
  reviewComment: null,
  deadline: null,
  deferredUntil: null,
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
  statusReopenedCounter: 0,
  statusUpdatedAt: null,
  statusReason: null,
  number: 98881,
  client: null,
  clientName: null,
  clientEmail: null,
  clientPhone: null,
  contact: null,
  operator: null,
  assignee: null,
  executor: null,
  details: 'Не набирается вода в туалете в унитаз просьба от Председателя МКД',
  related: null,
  isEmergency: false,
  isPaid: false,
  isWarranty: false,
  meta: null,
  source: {
    id: '7da1e3be-06ba-4c9e-bba6-f97f278ac6e4',
    name: 'Другое',
    type: 'other'
  },
  sourceMeta: null,
  categoryClassifier: { id: '05d5da18-7b68-4f2d-a486-41ae30fe8e57' },
  placeClassifier: { id: '5e341876-fcfb-4f2c-8a7f-d381979809a6' },
  problemClassifier: null,
  classifier: {
    id: 'da68292d-c5ab-41e7-b1b8-8df50c97af53',
    place: { id: '5e341876-fcfb-4f2c-8a7f-d381979809a6', name: 'Квартира' },
    category: { id: '05d5da18-7b68-4f2d-a486-41ae30fe8e57', name: 'Канализация' },
    problem: null
  },
  id: '0f2b86da-9307-49a4-a7df-3ad7e9790e60',
  dv: 1,
  sender: { dv: 1, fingerprint: 'ticket-demo-bot' },
  createdBy: {
    id: '41d01a01-d2b9-41b4-9460-54d17601311a',
    name: 'Demo пользователь'
  },
  updatedBy: {
    id: '41d01a01-d2b9-41b4-9460-54d17601311a',
    name: 'Demo пользователь'
  },
  createdAt: '2022-09-08T19:10:10.590Z',
  updatedAt: '2022-09-08T19:10:10.590Z'
}
All done

```

