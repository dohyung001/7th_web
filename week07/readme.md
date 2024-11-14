# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- Tanstack-Query 🍠
    - Tanstack-Query 초기 세팅 방법
        
        ```jsx
        npm install @tanstack/react-query
        ```
        
        ```jsx
        import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
        
        const queryClient = new QueryClient();
        
        function App() {
          return (
            <QueryClientProvider client={queryClient}>
              {/* Other components */}
            </QueryClientProvider>
          );
        }
        ```
        
    - Query-DevTools?
        
        개발중인 모든 쿼리(요청)의 상태를 표시해준다.
        
        또한 예상대로 작동하지 않는 경우 문제를 해결하는데 도움을 주는 도구이다.
        
        예를 들면, 쿼리(요청) 키로 쿼리를 표시해주고 **활성(fresh)**, **비활성(inActive)**, **만료(stale)**등의 모든 쿼리의 상태를 알려준다.
        
    - useQuery
        
        : `queryKey`를 이용하여 캐싱된 값을 이용하거나 API로 데이터를 가져옵니다
        
    - useInfiniteQuery
        
        :데이터의 무한 스크롤 요청을 위한 훅
        
        ```jsx
        import { useInfiniteQuery } from '@tanstack/react-query';
        
        function Example() {
          const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
            ['queryKey'],
            fetchFunction,
            {
              getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
            }
          );
          return <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>Load more</button>;
        }
        ```
        
    - queryKey
        
        :쿼리를 식별하는 키로, 캐싱된 값을 이용하거나 중복된 값을 방지할 때 useQuery에서 필요합니다
        
- Pagination 🍠
    - Pagination은 무엇인가요?
        
        :데이터를 여러 페이지에 나눠서 보여주는 방식
        
    - Pagination을 어떠한 방식으로 구현할 수 있을까요?
        
        : 무한 스크롤, 숫자형 페이지네이션, 이전/다음 버튼
        
    - Pagination의 장점과 단점에 대해 정리해주세요.
        
        장: 성능이 좋고, 데이터 양에 따른 부하가 적습니다
        
        단: 사용자가 더 많은 데이터 탐색을 위해 페이지를 전환해야합니다
        
- Infinite Scroll 🍠
    - Intersection Observer는 무엇인가요?
        
        < = >스크롤 이벤트 감지 
        특정 요소가 현재 화면(뷰포트)에 들어왔는지 여부를 감지하는 웹 API입니다. 
        
        - **무한 스크롤** 구현, **이미지 지연 로딩**(lazy loading), **애니메이션 트리거**
    - Infinite Scroll은 무엇일까요?
        
        :스크롤할때마다 다음 데이터를 자동으로 불러오는 방식
        
    - Inifinite Scroll은 어떻게 구현할까요?
        
        :페이지 하단이 뷰포트에 들어오면 자동으로 컨텐츠를 추가로 로드합니다
        
        ```jsx
        import { useInfiniteQuery } from '@tanstack/react-query';
        
        function InfiniteScrollComponent() {
          const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
            'fetchItems', // 고유한 쿼리 키
            fetchItems,   // 데이터 요청 함수
            {
              getNextPageParam: (lastPage) => lastPage.nextCursor, // 다음 데이터가 있을 때 nextCursor를 반환
            }
          );
        
          // 옵저버로 감지할 타겟 요소 참조
          const observerRef = useRef();
        
          useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage(); // 새로운 페이지 로드
              }
            });
        
            if (observerRef.current) observer.observe(observerRef.current);
        
            return () => observer.disconnect(); // 클린업 함수로 옵저버 해제
          }, [hasNextPage, fetchNextPage]);
        
          return (
            <div>
              {data.pages.map((page) =>
                page.items.map((item) => <div key={item.id}>{item.content}</div>)
              )}
              <div ref={observerRef}>
                {isFetchingNextPage && <p>Loading...</p>}
              </div>
            </div>
          );
        }
        
        ```
        
    - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
        
        장 : 사용자가 연속적으로 다음 컨텐츠를 탐색하기 쉽습니다
        
        단 : 특정한 데이터의 접근이 어렵습니다