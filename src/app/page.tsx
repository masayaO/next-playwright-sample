'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p>Top Page</p>
      <button
        data-testid="top-page_go-to-about-page"
        onClick={() => router.push('/about')}
      >
        Aboutページへ移動
      </button>
    </div>
  );
}
