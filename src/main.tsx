import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { worker } from './mocks/browser.ts';
import { registerSW } from 'virtual:pwa-register';

if (import.meta.env.VITE_ENV === 'develop') {
  worker.start().then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  });
} else {
  createRoot(document.getElementById('root')!).render(<App />);
}

registerSW({
  onNeedRefresh() {
    console.log('🔄 새 버전이 있어요! 새로고침하면 업데이트됩니다.');
  },
  onOfflineReady() {
    console.log('✅ 오프라인 사용 준비 완료!');
  },
});
