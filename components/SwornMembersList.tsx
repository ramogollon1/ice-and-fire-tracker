"use client";
import { useMembers } from "hooks/useMembers";

interface Member {
  name: string;
  died?: string;
}

export function SwornMembersList({ memberUrls }: { memberUrls: string[] }) {
  const { members, isLoading, error } = useMembers(memberUrls);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Sworn Members</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul>
          {members.length === 0 && !isLoading ? (
            <li>This house has no sworn members</li>
          ) : (
            members.map((member: Member, index: number) => (
              <li key={index}>
                <strong>{member.name || "Unknown"}</strong>
                {member.died ? (
                  <span className="text-red-500">
                    {" "}
                    - Deceased: {member.died}
                  </span>
                ) : (
                  <span className="text-green-500"> - Alive</span>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
