/* eslint-disable */

import Example from "../../../src/components/units/board/14-props-children-example";

export default function PageChildrenPage(): JSX.Element {
  return (
    <div>
      <div>++++++ top part ++++++</div>
      <Example school="elementarySchool">
        <div>
          <input type="text" />
          <div>I'm manggu</div>
          <span>한글 테스트입니다 폰트 적용 가능?</span>
          <button>Click me!</button>
        </div>
      </Example>
      <div>++++++ bottom part ++++++</div>
    </div>
  );
}
