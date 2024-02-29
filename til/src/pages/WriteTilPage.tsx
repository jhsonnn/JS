import { useState } from "react";
import Page from "../components/Page";
import { useAppDispatch } from "../store";
import { writeTil } from "../store/reducers/til.reducer";

function WriteTilPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const handleClickWrite = () => {
    // 원래는 액션을 만들고,
    const action = writeTil({ title, content });

    //그 액션을 우체부에게 보냈음
    dispatch(action);
  };

  return (
    <Page title='띨 작성하기'>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='띨 제목'
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='띨 내용'
      />

      <button onClick={handleClickWrite}>작성하기</button>
    </Page>
  );
}

export default WriteTilPage;
