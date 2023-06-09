import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import ModalText from '../components/ModalText'
import styles from '../styles/Home.module.css'
import bg from "../public/mountain.jpg"
import lads from "../public/idisc-lads.jpg"
import lehigh from "../public/lehigh.png"
import sss from "../public/sss.png"
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
    const router = useRouter();

    const cards = [
      {
        title: "Week 1: 6/5 - 6/9",
        text: `This week, we went through a typical first week. We set up repositories,
        discussed our plan for the summer (and beyond), and familiarized ourselves with frameworks.
        Namely, we refreshed ourselves on the CUDA framework for C++, the main tool that we will be
        using throughout this project for GPU parallel programming. We began with simple, relevant
        problems such as vector addition, matrix multiplication, and sum reduction. Moreover, we
        acquainted ourselves with the state of the barretenberg repository as well as existing MSM
        implementations to get started on our own implementation. Next week, we plan to begin on a
        testing suite to ensure that future development of our MSM implementation passes for correctness.`
      },
      {
        title: "Week 2: 6/12 - 6/16",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 3: 6/19 - 6/23",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 4: 6/26 - 6/30",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 5: 7/3 - 7/7",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 6: 7/10 - 7/14",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 7: 7/17 - 7/21",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 8: 7/24 - 7/28",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 9: 7/31 - 8/4",
        text: "This card is for a week in the future..."
      },
      {
        title: "Week 10: 8/7 - 8/10",
        text: "This card is for a week in the future..."
      },
    ]

    return (
      <>
        <Head>
          <title>Weekly Reports</title>
          <meta name="description" content="Weekly blogs of my 2023 Mountaintop Experience" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main} style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}>
          <h1 className={styles.title}>Mountaintop Experience Weekly Reports</h1>
          <h2 className={styles.subtitle}>Jon Klein</h2>
          <Image
          src={lehigh}
          width={0}
          height={0}
          sizes="100vw"
          style={{ position: 'absolute', width: '5%', height: 'auto', top: '10px', left: 0, zIndex: 1000}}
          />
          <Image
          src={sss}
          width={0}
          height={0}
          sizes="100vw"
          style={{ position: 'absolute', width: '5%', height: 'auto', top: 0, right: '10px', zIndex: 1000}}
          />
          <div className={styles.contentbox}>
            <div className={styles.infobox}>
              <Image
              src={lads}
              alt="I-DISC"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '60%', height: 'auto', borderRadius: '25px' }}
              />
              <p>
                <br/>
                Hello! I'm a rising Junior studying Math and Computer Science through Lehigh's IDEAs program. This summer,
                I'm continuing Zero-Knowledge research with my teammates Caleb and Victor through the Mountaintop Experience
                program.
                <br/>
                <br/>
                We're aiming to enhance the performance of the UltraPLONK proving system by parallelizing its proof generation
                algorithm. We're doing this using NVIDIA's CUDA framework, which enables us to harness the power of their GPUs
                to write code that runs in parallel.
                <br/>
                <br/>
                You can our week-by-week progress by using the right panel:
              </p>
            </div>
            <div className={styles.cardbox}>
              {cards.map(card => {
                return (
                  <Link href={`?card=${cards.indexOf(card)}`}>
                    <Card key={cards.indexOf(card)} title={card["title"]} text={card["text"]} />
                  </Link>
                );
              })}
            </div>
          </div>
          {router.query.card && (
            <Modal close={() => router.push("/")}>
              <ModalText title={cards[router.query.card]["title"]} text={cards[router.query.card]["text"]} />
            </Modal>
          )}
        </main>
      </>
    )
}

export default Home;
