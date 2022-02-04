import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Page from '../../components/elements/page';

import Layout from '../../layouts'

import LevelGrid from '../../components/partials/levels-grid';

import { META_DESCRIPTION } from '../../lib/constants';

export default function LevelsList({ levels }) {
    const meta = {
        title: 'Donza Learn App',
        description: META_DESCRIPTION
    };

    return(<Page meta={meta} fullViewport>
        <Layout>
            <LevelGrid levels={levels}/>
        </Layout>
    </Page>)
}

//Get Server Side
export async function getServerSideProps(context) {

    const levels = [
        {
            code: "a1",
            title: "Basic",
            companyName: "Read",
            name: "Level A1",
            description:"If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern.",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/cropped-LOGOTIPO-MOHOTA-SERVICO-01.png"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "a2",
            title: "Basic",
            companyName: "Read an Write",
            name: "Level A2",
            description:"If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern.",
            
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/yoga-trainer.png"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
        {
            code: "b1",
            title: "Intermediary",
            companyName: "Read",
            description:"If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern.",
            
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
            companyName: "Read an Write",
            description:"If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern.",
            
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
            companyName: "Read",
            description:"If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern.",
            
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
            companyName: "Read an Write",
            description:"If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern.",
            
            name: "Level C2",
            image: {
                url: "https://mahotaservicos.com/wp-content/uploads/2021/03/student1-1.jpg"
            },
            bio: "If so, you’re not alone. English students all over the world are lamenting at the difficulty of the English language, with its irregular verb tenses and spelling that doesn’t seem to follow a logical pattern. But is it really as difficult as it seems?"
            , twitter: "https://twitter.com/mahota_g"
        },
    ]

    return {
        props: {
            levels
        }
    }

}
