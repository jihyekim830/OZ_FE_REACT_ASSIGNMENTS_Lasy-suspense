import { lazy, Suspense } from 'react';
import Loading from '@components/Loading';
const TestComponent = lazy(() => import('@components/TestComponent'));
import '@styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>
      <Suspense fallback={<Loading />}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
