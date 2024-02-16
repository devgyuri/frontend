import Head from "next/head";

export default function OpengraphProviderPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta property="og:description" content="나의 당근, 나의 중고" />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/a-bunch-of-fresh-carrots-on-a-weathered-old-cutting-board-with-deep-cuts-on-a-beautiful-wooden-brown-table-top-view_346278-438.jpg?w=1800&t=st=1708064276~exp=1708064876~hmac=8f02636ef5a3f69bb47a26c426da3962c2fb47bf529d98447caf9015276d52a5"
        />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다!</div>
    </>
  );
}
