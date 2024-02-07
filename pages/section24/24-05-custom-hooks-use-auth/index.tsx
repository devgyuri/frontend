import { useAuth } from "../../../src/components/commons/hooks/useAuth";

export default function CumtomHooksUseAuthPage(): JSX.Element {
  useAuth();

  return <div>profile page</div>;
}
