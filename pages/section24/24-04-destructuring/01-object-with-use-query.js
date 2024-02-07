function useQuery(qqq) {
  // qqq API 요청하기
  return {
    data: { fetchBoard: { writer: "kitty" } },
    refetch: () => {
      console.log("refetch execute!");
    },
  };
}

const { data, refetch } = useQuery("FETCH_BOARD");
const result = useQuery("FETCH_BOARD");

console.log(result.data.fetchBoard.writer);
result.refetch();
