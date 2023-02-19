import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './styles.css';
import { Article } from './components/Article';
import { AddArticle } from './components/AddArticle';
import { addArticle, removeArticle } from './store/actionCreators';
import { Dispatch } from 'redux';
import './App.css';

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (articles: IArticle) => dispatch(addArticle(articles)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((articles: IArticle) => (
        <Article
          key={articles.id}
          articles={articles}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};
export default App;
