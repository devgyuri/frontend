import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div key={props.el._id}>
          <span style={{ margin: "10px" }}>{props.el._id}</span>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>edit</button>
        </div>
      ) : (
        <div key={props.el._id}>
          <input type="text" />
        </div>
      )}
    </div>
  );
}
