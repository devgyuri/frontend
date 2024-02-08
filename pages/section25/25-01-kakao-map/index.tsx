import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(35.156707, 129.113775),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b719a4fed9105d746b3599cefa29da5a"
      ></script>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
