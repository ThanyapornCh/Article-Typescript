import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

type Props = {
  articles: IArticle;
  removeArticle: (Articles: IArticle) => void;
};

export const Article: React.FC<Props> = ({ articles, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (articles: IArticle) => dispatch(removeArticle(articles)),
    [dispatch, removeArticle]
  );

  return (
    <div className="Article">
      <div>
        <h1>{articles.title}</h1>
        <p>{articles.body}</p>
      </div>
      <button onClick={() => deleteArticle(articles)}>Delete</button>
    </div>
  );
};
