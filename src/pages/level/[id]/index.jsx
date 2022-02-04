import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

import Page from '../../../components/elements/page';

import Layout from '../../../layouts'

import LevelSection from '../../../components/partials/level-section';

import { META_DESCRIPTION } from '../../../lib/constants';

export default function Level({ level }) {
    const meta = {
        title: 'Donza Learn App',
        description: META_DESCRIPTION
    };



    return (
        <Page meta={meta} fullViewport>
            <Layout>
                <LevelSection speaker={level} />
            </Layout>
        </Page>
    );
}

//Get Server Side
export async function getServerSideProps(context) {

    //get router id
    const id = context.params.id;

    const levels = [
        {
            code: "a1",
            title: "Basic",
            company: "Read",
            name: "Level A1",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/cropped-LOGOTIPO-MOHOTA-SERVICO-01.png"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "a2",
            title: "Basic",
            company: "Read an Write",
            name: "Level A2",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/yoga-trainer.png"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "b1",
            title: "Intermediary",
            company: "Read",
            name: "Level B1",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/student1-1.jpg"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "b2",
            title: "Intermediary",
            company: "Read an Write",
            name: "Level B2",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/nutritions.jpg"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "c1",
            title: "Advanced",
            company: "Read",
            name: "Level C1",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/student4-1.jpg"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "c2",
            title: "Advanced",
            company: "Read an Write",
            name: "Level C2",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/student1-1.jpg"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
    ]

    let level = levels.find(p => p.code === id);

    return {
        props: {
            level
        }
    }

}
