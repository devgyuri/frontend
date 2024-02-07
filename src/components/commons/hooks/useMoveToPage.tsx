import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../stores";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path);
    localStorage.setItem("visitedPage", path);
    void router.push(path);
  };

  return {
    onClickMoveToPage,
    visitedPage,
  };
};
