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
        text: `Our first week was more or less a typical starting week. We set up repositories,
        discussed our plan for the summer (and beyond), and familiarized ourselves with frameworks.
        Namely, we refreshed ourselves on the CUDA framework for C++, the main tool that we will be
        using throughout this project for GPU parallel programming. We began by implementing simple,
        relevant problems such as vector addition, matrix multiplication, and sum reduction. We also
        acquainted ourselves with the state of the barretenberg repository as well as existing MSM
        implementations to get started on our own implementation. Next week, we plan to begin on a
        testing suite to ensure that future development of our MSM implementation passes for correctness.`
      },
      {
        title: "Week 2: 6/12 - 6/16",
        text: `This week, we dove into CUDA even more, optimizing sum reduction and matrix multiplication.
        We explored advanced optimization techinques and special features of CUDA and discussed with a former
        student (and future Aztec engineer) about the project and the best ways to tackle MSM optimization.
        Furthermore, we met with a PhD student about mathematical ways to optimize the MSM algorithm and 
        planned meetings with him for next week to share ideas. We also explored existing implementations of
        MSM, namely a simple python project, to further our understanding of the complex algorithm. Next week, we
        want to dive into the existing codebase and begin benchmarking the current parallel implementation of the
        MSM that we have so that we can easily add optimizations down the road.`
      },
      {
        title: "Week 3: 6/19 - 6/23",
        text: `This week, we began several implementations of MSM algorithms in C++. Specifically, I created classes
        to represent our very own elliptic curve, elliptic curve points, msm algorithms, and more. One challenge that
        I faced was getting double-and-add to work. This simply deals with multiplying an EC point by some scalar n by
        writing n*P as (2^(a_k)+...+2^(a_0))*P (writing n as a sum of powers of 2). In the end, the problem turned out to
        be the naive implementation of n*P (P+P+...+P+P), which was a tad infuriating. At the end of the week I got started
        on the test suite, which I plan to finish in bash, comparing the output of pippenger's bucket method with that of the
        double-and-add algorithm. We also started an implementation of pippenger's algorithm which we will turn into the bucket
        method next week. Next week we want to have the bucket method finished along with a robust testing suite.`
      },
      {
        title: "Week 4: 6/26 - 6/30",
        text: `This week, a major focus was on refining the codebase, with particular emphasis on completing the implementation
        of the bucket method within pippenger's algorithm as well as a focus in finishing our test suite. Specifically, we
        finished the test suite and finished implementing the bucket method in its entirety, but failed to achieve correctness.
        I was successful in putting my memory optimization to work, which entails aggregating each window's set of buckets one by
        one, meaning that the buffer used by each window can be reused and we therefore only need to allocate memory for the size
        of one window. As for the test suite, we didn't run into too many difficulties, only small hurdles with becoming familiar
        with bash scripting. Currently, the test suite is running perfectly but we would like to upgrade it into providing more
        specific insights (how many tests passed, accuracy score, etc). Next week, since we've already dedicated a substantial
        amount of time to this implementation of the MSM, we plan to move forward and advance our understanding through reading
        research papers.`
      },
      {
        title: "Week 5: 7/3 - 7/7",
        text: `This week, our primary focus was working through the research paper PipeMSM, written by Ingonyama. PipeMSM spends a
        lot of time breaking down the MSM as well as Pippenger's algorithm, the most well-known method of performing it. Down the
        road, the paper discusses specific optimization methods, which our team found extremely useful. Some of the optimization 
        techinques mentioned dove into parallel processing specifically, which directly apply to our team's project. Other
        optimizations mentioned include low-hamming weight representations, a batched bucket method implementation, and the
        Montgomery trick. Apart from PipeMSM, we began preparing for our press conference next week by giving a mock presentation
        about this project to fellow Mountaintop participants.`
      },
      {
        title: "Week 6: 7/10 - 7/14",
        text: `This week, we focused on preparing for our press conference presentation. We settled on limiting the scope of our
        presentation to general blockchain applications with small insights into ZK-proofs and benchmarking. We weren't able to do
        much more due to this intensive preparation, but thanks to it, the event went very well for us.`
      },
      {
        title: "Week 7: 7/17 - 7/21",
        text: `This week, our team continued working through research papers and enhancing our mathematical understanding of the
        MSM algorithm. Namely, we tackled reading the cuZK paper written by researchers at Zhejiang University and the Ant Group in
        China. This concept of this paper is to represent the MSM problem using sparse matrices. Since sparse matrix operations are 
        extremely fast, representation alone gives high potential to a faster MSM algorithm. According to cuZK, the results are serious:
        "The evaluation results show that our MSM module provides over 2.08x (up to 2.94x) speedup versus the state-of-the-art GPU
        implementation. cuZK achieves over 2.65x (up to 4.86x) speedup on standard benchmarks and 2.18x speedup on a GPU-accelerated
        cryptocurrency application, Filecoin." After reading this paper and reviewing PipeMSM, we held a formal meeting with a PhD
        Numerical Analysis student and several professors to discuss how these papers may fit into our research.`
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
          <a target="_blank" href="https://creativeinquiry.lehigh.edu/mountaintop-programs/mountaintop-summer-experience" rel="noopener noreferrer">
            <Image
            src={lehigh}
            width={0}
            height={0}
            sizes="100vw"
            style={{ position: 'absolute', width: '5%', height: 'auto', top: '10px', left: 0, zIndex: 1000}}
            />
          </a>
          <a target="_blank" href="https://wordpress.lehigh.edu/sss/" rel="noopener noreferrer">
            <Image
            src={sss}
            width={0}
            height={0}
            sizes="100vw"
            style={{ position: 'absolute', width: '5%', height: 'auto', top: 0, right: '10px', zIndex: 1000}}
            />
          </a>
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
                program. This particular project is a continuation of our project from this past spring in which we studied
                and benchmarked PLONK-based Zero-Knowledge proving schemes under the supervision of Professor Hank Korth and
                former masters student Tal Derei. From that experience came the publication of the
                <a target="_blank" href="/VDBS_ZK_paper.pdf" rel="noopener noreferrer"><u> VDBS paper</u></a>.
                Now, we're aiming to enhance the performance of the UltraPLONK proving system by parallelizing its proof
                generation algorithm. We're doing this using NVIDIA's CUDA framework, which enables us to harness the power
                of their GPUs to write code that runs in parallel.
                <br/>
                <br/>
                You can view our week-by-week progress by using the right panel:
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
