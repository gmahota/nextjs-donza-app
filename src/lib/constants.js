/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://nextjs-donza-app.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Donza Learning App';
export const SITE_NAME_MULTILINE = ['Donza', 'Learn', 'App'];
export const SITE_NAME = 'Donza Learning App';
export const META_DESCRIPTION =
  'This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.';
export const SITE_DESCRIPTION =
  'An Easy way to Learn english.  ';
export const DATE = 'Janeiro 05, 2022';
export const SHORT_DATE = 'Jan 05 - 20:30pm PST';
export const FULL_DATE = 'Jan 05th 6pm Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/gmahota/nextjs-donza-app';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Courses',
    route: '/level'
  },
  {
    name: 'A1',
    route: '/level/a1'
  },
  {
    name: 'A2',
    route: '/level/a2'
  },
  {
    name: 'B1',
    route: '/level/b1'
  },
  {
    name: 'B2',
    route: '/level/b2'
  },
  {
    name: 'C1',
    route: '/level/c1'
  },
  {
    name: 'C2',
    route: '/level/c2'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Register',
    route: '/register'
  }
];

export const TicketGenerationState = 'default' | 'loading';
