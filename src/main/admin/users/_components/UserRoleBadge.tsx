type Role = "Athlete" | "Agent" | "Club";

const roleStyles: Record<Role, string> = {
  Athlete: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
  Agent: "bg-purple-500/15 text-purple-400 border border-purple-500/25",
  Club: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
};

interface UserRoleBadgeProps {
  role: Role;
}

const UserRoleBadge = ({ role }: UserRoleBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${roleStyles[role]}`}
    >
      {role}
    </span>
  );
};

export default UserRoleBadge;
