import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>move page</button>

      <a href="/section25/25-02-kakao-map-routing-moved">
        move page by anchor tag
      </a>

      <Link href="/section25/25-02-kakao-map-routing-moved">
        <a>move page by Link tag</a>
      </Link>
    </>
  );
}
