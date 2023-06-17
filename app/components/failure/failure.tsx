interface FailureProps {
    data: any[] | undefined;
  }
  
  export function Failure({ data }: FailureProps) {
    return data && data.length === 0 ? (
      <div>Loading...</div>
    ) : data === undefined ? (
      <div>Something went wrong</div>
    ) : null;
  }
  
