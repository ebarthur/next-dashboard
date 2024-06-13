import SignIn from '@/app/(auth)/sign-in/components/sign-in';

type UserProps = {
  id: number;
  name: string;
  email: string;
  username: string;
};

type SignedIn = {
  username: string;
};

export const Users: UserProps[] = [
  {
    id: 11004272,
    name: 'Ishaan Bhardwaj',
    email: 'ishaanbhardwaj1219@gmail.com',
    username: 'ishaanbhardwaj1219',
  },
  {
    id: 11356824,
    name: 'Edward Opoku Agyemang',
    email: 'money01ed@gmail.com',
    username: 'money01ed',
  },
  {
    id: 11213307,
    name: 'Attu Samuel Idana',
    email: 'crisskenylis@gmail.com',
    username: 'crisskenylis',
  },
  {
    id: 11012330,
    name: 'Ebenezer Arthur',
    email: 'ebenarthur134@gmail.com',
    username: 'ebenarthur134',
  },
  {
    id: 11348310,
    name: 'Apetsi Freda Elikplim',
    email: 'Apetsisibsfcube@gmail.com',
    username: 'Apetsisibsfcube',
  },
  {
    id: 11139245,
    name: 'Maame Afua Ayisibea Ayisi',
    email: 'maameayisibea223@gmail.com',
    username: 'maameayisibea223',
  },
  {
    id: 11014977,
    name: 'Mohammed Salihu Hamisu',
    email: 'juniorsalihu010@gmail.com',
    username: 'juniorsalihu010',
  },
  {
    id: 11105235,
    name: 'Kwarteng Andrews Twum',
    email: 'andrewskwartengt@gmail.com',
    username: 'andrewskwartengt',
  },
  {
    id: 11358243,
    name: 'NANA KWASI WADIE KWAKYE',
    email: 'lilnanak1z@gmail.com',
    username: 'lilnanak1z',
  },
  {
    id: 11254301,
    name: 'Kudiabor Jonathan Kwabena Ewenam',
    email: 'jonathan.ewenam16@gmail.com',
    username: 'jonathan.ewenam16',
  },
  {
    id: 11238291,
    name: 'Ninson Obed',
    email: 'ninsonobed5630@gmail.com',
    username: 'ninsonobed5630',
  },
  {
    id: 11296641,
    name: 'King David Asare Baffour',
    email: 'asarebaffourkingdavid@gmail.com',
    username: 'asarebaffourkingdavid',
  },
  {
    id: 11246366,
    name: 'Anewah Vincent',
    email: 'vincentanewah199@gmail.com',
    username: 'vincentanewah199',
  },
  {
    id: 11164744,
    name: 'Samuel Kojo Anafi Antwi',
    email: 'samuelantwi103@gmail.com',
    username: 'samuelantwi103',
  },
  { id: 11018690, name: 'Pius Oblie', email: 'obliepius13@gmail.com', username: 'obliepius13' },
  {
    id: 11285635,
    name: 'David Tetteh Ankrah',
    email: 'Davidtettehankrah4@gmail.com',
    username: 'Davidtettehankrah4',
  },
  {
    id: 11297849,
    name: 'Isaac Nii Nortey Barnor',
    email: 'ibarnor076@gmail.com',
    username: 'ibarnor076',
  },
  {
    id: 11338323,
    name: 'Ahmed Fareed Opare',
    email: 'mysterokhidjhnr020@gmail.com',
    username: 'mysterokhidjhnr020',
  },
  {
    id: 11252857,
    name: 'Nuku-Tagbor Joshua',
    email: 'nukujosh119@gmail.com',
    username: 'nukujosh119',
  },
  {
    id: 11254405,
    name: 'Abena Nhyira Nsaako',
    email: 'abenanhyiransaako@gmail.com',
    username: 'abenanhyiransaako',
  },
  {
    id: 11123762,
    name: 'Bernardine Adusei-Okrah',
    email: 'Okrahkwabenaebo@gmail.com',
    username: 'Okrahkwabenaebo',
  },
  {
    id: 10979385,
    name: 'ABDULMUMIN LUQMAN',
    email: 'labdulmumin559@gmail.com',
    username: 'labdulmumin559',
  },
  {
    id: 11264010,
    name: 'Ayertey Vanessa Esinam',
    email: 'ayerteyvanessa@gmail.com',
    username: 'ayerteyvanessa',
  },
  { id: 11053386, name: 'AMPOMAH SAMUEL', email: 'sasug540@gmail.com', username: 'sasug540' },
  { id: 11275876, name: 'Nyayun Prince', email: 'nyayunp@gmail.com', username: 'nyayunp' },
  {
    id: 11209640,
    name: 'Latifah Abubakar',
    email: 'rukayaissaka9876@gmail.com',
    username: 'rukayaissaka9876',
  },
  {
    id: 11015506,
    name: 'DANIEL AGYIN MANFORD',
    email: 'manfordd6@gmail.com',
    username: 'manfordd6',
  },
  {
    id: 11025159,
    name: 'David Kwaku Ntow Anno',
    email: 'Davidnanno720@gmail.com',
    username: 'Davidnanno720',
  },
  {
    id: 11117318,
    name: 'Nyarko Steven Abrokwah',
    email: 'nyarkosteven43@gmail.com',
    username: 'nyarkosteven43',
  },
  {
    id: 11330446,
    name: 'Yasmeen Xoladem Korkor Doku',
    email: 'yasmeendoku@gmail.com',
    username: 'yasmeendoku',
  },
  {
    id: 11293871,
    name: 'Amponsah Jonathan Boadu',
    email: 'kkwesi956@gmail.com',
    username: 'kkwesi956',
  },
  {
    id: 11262592,
    name: 'Dedoo Donatus',
    email: 'dedoodonatus@gmail.com',
    username: 'dedoodonatus',
  },
  {
    id: 11332163,
    name: 'Matthew Kotey Mensah',
    email: 'matthewdaddyspride@gmail.com',
    username: 'matthewdaddyspride',
  },
  {
    id: 11049523,
    name: 'Peggy Esinam Somuah',
    email: 'peggysomuahe@gmail.com',
    username: 'peggysomuahe',
  },
  {
    id: 11038081,
    name: 'Agyepong Kwesi Asante',
    email: 'santankwesi@gmail.com',
    username: 'santankwesi',
  },
  {
    id: 11116537,
    name: 'Yakubu Tanko Mohammed-Awal',
    email: 'awal18525@gmail.com',
    username: 'awal18525',
  },
  {
    id: 11292620,
    name: 'Sena Delase Anyomi',
    email: 'senanyoming@gmail.com',
    username: 'senanyoming',
  },
  {
    id: 11023595,
    name: 'Nyavor Cyril Etornam M.',
    email: 'cemnyavor@st.ug.edu.gh',
    username: 'cemnyavor',
  },
  {
    id: 11116737,
    name: 'Eririe Jeffrey',
    email: 'goldeneririe@gmail.com',
    username: 'goldeneririe',
  },
  { id: 11116804, name: 'Kafu Kemeh', email: 'cafcem234@gmail.com', username: 'cafcem234' },
  { id: 11172376, name: 'Isaac Atta Wenide', email: 'iwenide@gmail.com', username: 'iwenide' },
  {
    id: 11139828,
    name: 'Philemon Ansrogya Kwabena',
    email: 'philseyytariq@gmail.com',
    username: 'philseyytariq',
  },
  {
    id: 11353826,
    name: 'Dabanka Hayet Maame Adwoa Gyasiwaa',
    email: 'dabankaadwoa@gmail.com',
    username: 'dabankaadwoa',
  },
  {
    id: 11012343,
    name: 'Kumi Kelvin Gyabaah',
    email: 'gyabaahkelvin27@gmail.com',
    username: 'gyabaahkelvin27',
  },
  {
    id: 11170350,
    name: 'Nkansah Boadu Tabi',
    email: 'nkansah679@gmail.com',
    username: 'nkansah679',
  },
  { id: 11010910, name: 'Samia Soleimani', email: 'samia71283@gmail.com', username: 'samia71283' },
  {
    id: 11296662,
    name: 'Amevenku Kwaku Mawuli',
    email: 'amevenkawuli@gmail.com',
    username: 'amevenkawuli',
  },
  {
    id: 11112276,
    name: 'Fiavor Isaac Sedem',
    email: 'fiavorisaac46@gmail.com',
    username: 'fiavorisaac46',
  },
  {
    id: 11117536,
    name: 'Muhammad Nurul Haqq Abdul-Bassit Munagah',
    email: 'munagahmnh@gmail.com',
    username: 'munagahmnh',
  },
  {
    id: 11253931,
    name: 'Desmond Afelete Kamasah',
    email: 'sophiapatel40@gmail.com',
    username: 'sophiapatel40',
  },
  {
    id: 11252855,
    name: 'Jeffery Quansah',
    email: 'quansahjeffery801@gmail.com',
    username: 'quansahjeffery801',
  },
  {
    id: 11254079,
    name: 'John Edward Fordjour',
    email: 'fordjourjohn067@gmail.com',
    username: 'fordjourjohn067',
  },
];

export const SignedUsers: SignedIn = {
  username: 'admin',
};
