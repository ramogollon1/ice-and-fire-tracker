import { useEffect, useState } from "react";
import { fetchMembers } from "services/members";

interface Member {
  name: string;
  died?: string;
}

export function useMembers(memberUrls: string[]) {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const loadMembers = async () => {
      try {
        const membersData = await fetchMembers(memberUrls, signal);
        setMembers(membersData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(`Failed to load members: ${error}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadMembers();

    return () => {
      controller.abort();
    };
  }, [memberUrls]);

  return { members, isLoading, error };
}
