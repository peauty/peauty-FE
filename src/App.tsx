import { BrowserRouter, Route, Routes } from 'react-router-dom';

import QueryProvider from './provider/query-provider';
import GlobalStyle from './style/global-style';

export default function App() {
  return (
    <QueryProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main />} /> 이런식으로 작성*/}
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}
