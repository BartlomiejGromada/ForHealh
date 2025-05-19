import { useFetch } from "@/hooks/useFetch";
import { useUserId } from "@/hooks/useUserId";
import { Visit } from "@/types/Visit";
import { useCallback, useEffect, useState } from "react";
import { visitByIdRequest } from "../api/vistiByIdRequest";

type useVisitDetailsProps = {
  visitId: string;
};

export const useVisitDetails = ({ visitId }: useVisitDetailsProps) => {
  const userId = useUserId();

  const [visit, setVisit] = useState<Visit | null>();

  const fetchVisitDetails = useCallback(
    () => visitByIdRequest({ userId, visitId }),
    [userId, visitId]
  );

  const handleFetchSuccess = useCallback((payload: Visit | null) => {
    setVisit(payload);
  }, []);

  const { fetch, isLoading, isSuccess } = useFetch<Visit | null>({
    onFetch: fetchVisitDetails,
    onSuccess: handleFetchSuccess,
  });

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { visit, isLoading, isSuccess };
};
