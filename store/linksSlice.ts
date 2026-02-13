
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LinkItem } from '../types';

interface LinksState {
  links: LinkItem[];
  loading: boolean;
}

const initialState: LinksState = {
  links: [
    // {
    //   id: '1',
    //   title: 'Contact us ',
    //   url: 'tel:+919876543210',
    //   iconType: 'portfolio',
    //   colorClass: 'text-blue-600',
    //   bgClass: 'bg-blue-100',
    // },
    {
      id: '4',
      title: 'My Services',
      url: '#',
      iconType: 'projects',
      colorClass: 'text-orange-600',
      bgClass: 'bg-orange-50',
    },
    {
      id: '5',
      title: 'UnoGreen',
      url: 'https://pro.unogreencard.com/unogreen',
      iconType: 'resumes',
      colorClass: 'text-purple-600',
      bgClass: 'bg-purple-100',
    },
    {
      id: '6',
      title: 'Google StreetView 360',
      url: 'https://maps.app.goo.gl/2FFGSovTsFecdoEV9',
      iconType: 'websites',
      colorClass: 'text-cyan-600',
      bgClass: 'bg-cyan-100',
    },
    {
      id: '2',
      title: 'Google Consultation',
      url: '/doc/1.pdf?inline=1',
      iconType: 'google',
      colorClass: 'text-blue-700',
      bgClass: 'bg-blue-50',
    },
    {
      id: '8',
      title: 'HD Photography',
      url: 'https://drive.google.com/drive/folders/1ghhjByNxtWAPduY79AUINyU4yuzebUpD',
      iconType: 'camera',
      colorClass: 'text-green-600',
      bgClass: 'bg-green-50',
    },
    {
      id: '10',
      title: 'Rank Local',
      url: 'https://ranklocal.echobooom.ai/register',
      iconType: 'rank',
      colorClass: 'text-indigo-600',
      bgClass: 'bg-indigo-50',
    },
    {
      id: '9',
      title: 'AI Post Pack',
      url: 'https://drive.google.com/file/d/1nA_n-dOK7ayayl-7J_1pnvtDxcj8E58k/view?usp=drivesdk',
      iconType: 'ai',
      colorClass: 'text-purple-600',
      bgClass: 'bg-purple-50',
    },
    {
    //   id: '11',
    //   title: 'Add to Contacts',
    //   url: '/doc/contact.vcf',
    //   iconType: 'contacts',
    //   colorClass: 'text-teal-600',
    //   bgClass: 'bg-teal-50',
    // },
    // {
    //   id: '3',
    //   title: 'GitHub Repo',
    //   url: '#',
    //   iconType: 'github',
    //   colorClass: 'text-gray-900',
    //   bgClass: 'bg-gray-100',
    // },

  ],
  loading: false,
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, action: PayloadAction<LinkItem[]>) => {
      state.links = action.payload;
    },
  },
});

export const { setLinks } = linksSlice.actions;
export default linksSlice.reducer;
