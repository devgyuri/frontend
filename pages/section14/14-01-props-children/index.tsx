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
          <button>Click me!</button>
        </div>
      </Example>
      <div>++++++ bottom part ++++++</div>
    </div>
  );
}
