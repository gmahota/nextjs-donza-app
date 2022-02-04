import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Page from '../components/elements/page';
import Hero from '../components/elements/hero';
import Form from '../components/elements/form';
import LearnMore from '../components/elements/learn-more';

import Layout from '../layouts'

import DanzoContainer from '../components/elements/danzo-container';

import { META_DESCRIPTION } from '../lib/constants';


export default function Home() {

  const { query } = useRouter();
  const meta = {
    title: 'Donza Learn App',
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <DanzoContainer>
             <Hero />
             {/* <Form /> */}
             <LearnMore />
        </DanzoContainer>
      </Layout>
    </Page>
  )
}
