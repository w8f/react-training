type Before = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
type After = {
  id: number;
  name: string;
  username: string;
  email: string;
  address_street: string;
  address_suite: string;
  address_city: string;
  address_zipcode: string;
  address_geo_lat: string;
  address_geo_lng: string;
  phone: string;
  website: string;
  company_name: string;
  company_catchPhrase: string;
  company_bs: string;
};
/**
 * CSV出力用にオブジェクトの階層をフラットにする関数
 *
 // before
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
 // after
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address_street: 'Kattie Turnpike',
    address_suite: 'Suite 198',
    address_city: 'Lebsackbury',
    address_zipcode: '31428-2261',
    address_geo: [Object]
    phone: '024-648-3804',
    website: 'ambrose.net',
    company_name: 'Hoeger LLC',
    company_catchPhrase: 'Centralized empowering task-force',
    company_bs: 'target end-to-end models'
  }
 */

exports.flatten = (inputs: Partial<Before>[]) => {
  return inputs.map((input) => {
    return {
      id: input.id,
      name: input.name,
      username: input.username,
      email: input.email,
      address_street: input.address?.street ?? null,
      address_suite: input.address?.suite ?? null,
      address_city: input.address?.city ?? null,
      address_zipcode: input.address?.zipcode ?? null,
      address_geo_lat: input.address?.geo.lat ?? null,
      address_geo_lng: input.address?.geo.lng ?? null,
      phone: input.phone,
      website: input.website,
      company_name: input.company?.name ?? null,
      company_catchPhrase: input.company?.catchPhrase ?? null,
      company_bs: input.company?.bs ?? null,
    };
  });
};
