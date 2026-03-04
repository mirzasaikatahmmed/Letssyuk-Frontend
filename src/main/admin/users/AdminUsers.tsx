import { useState, useMemo } from "react";
import DataTable, { type Column } from "../_components/DataTable/DataTable";
import UsersFilterBar from "./_components/UsersFilterBar";
import UserRoleBadge from "./_components/UserRoleBadge";
import UserStatusBadge from "./_components/UserStatusBadge";
import UserActionMenu from "./_components/UserActionMenu";

type Role = "Athlete" | "Agent" | "Club";
type UserStatus = "Active" | "Suspended" | "Pending";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  ageGroup: "18+" | "Under 18";
  status: UserStatus;
  subscription: string;
  joined: string;
}

const ALL_USERS: User[] = [
  {
    id: 1,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "Athlete",
    ageGroup: "18+",
    status: "Active",
    subscription: "Pro Monthly",
    joined: "Jan 15, 2026",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "Athlete",
    ageGroup: "18+",
    status: "Active",
    subscription: "Pro Monthly",
    joined: "Jan 15, 2026",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "Athlete",
    ageGroup: "18+",
    status: "Active",
    subscription: "Pro Monthly",
    joined: "Jan 15, 2026",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "Athlete",
    ageGroup: "18+",
    status: "Active",
    subscription: "Pro Monthly",
    joined: "Jan 15, 2026",
  },
  {
    id: 5,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "Athlete",
    ageGroup: "18+",
    status: "Active",
    subscription: "Pro Monthly",
    joined: "Jan 15, 2026",
  },
  {
    id: 6,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "Athlete",
    ageGroup: "18+",
    status: "Active",
    subscription: "Pro Monthly",
    joined: "Jan 15, 2026",
  },
  {
    id: 7,
    name: "James Wilson",
    email: "james.w@email.com",
    role: "Agent",
    ageGroup: "18+",
    status: "Suspended",
    subscription: "Pro Monthly",
    joined: "Oct 10, 2025",
  },
  {
    id: 8,
    name: "James Wilson",
    email: "james.w@email.com",
    role: "Agent",
    ageGroup: "18+",
    status: "Suspended",
    subscription: "Pro Monthly",
    joined: "Oct 10, 2025",
  },
  {
    id: 9,
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    role: "Club",
    ageGroup: "Under 18",
    status: "Pending",
    subscription: "Free (Under-18)",
    joined: "Feb 01, 2026",
  },
  {
    id: 10,
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    role: "Club",
    ageGroup: "Under 18",
    status: "Pending",
    subscription: "Free (Under-18)",
    joined: "Feb 01, 2026",
  },
];

const PAGE_SIZE = 10;

const AdminUsers = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [ageGroup, setAgeGroup] = useState("all");
  const [status, setStatus] = useState("all");
  const [plan, setPlan] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return ALL_USERS.filter((u) => {
      const matchSearch =
        search === "" ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchRole = role === "all" || u.role === role;
      const matchAge = ageGroup === "all" || u.ageGroup === ageGroup;
      const matchStatus = status === "all" || u.status === status;
      const matchPlan = plan === "all" || u.subscription === plan;
      return matchSearch && matchRole && matchAge && matchStatus && matchPlan;
    });
  }, [search, role, ageGroup, status, plan]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleClearFilters = () => {
    setSearch("");
    setRole("all");
    setAgeGroup("all");
    setStatus("all");
    setPlan("all");
    setCurrentPage(1);
  };

  const columns: Column<User>[] = [
    {
      key: "name",
      header: "Name",
      render: (user) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-white font-medium text-sm">{user.name}</span>
          <span className="text-gray-500 text-xs">{user.email}</span>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (user) => <UserRoleBadge role={user.role} />,
    },
    {
      key: "ageGroup",
      header: "Age Group",
      render: (user) => (
        <span className="text-gray-300 text-sm">{user.ageGroup}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (user) => <UserStatusBadge status={user.status} />,
    },
    {
      key: "subscription",
      header: "Subscription",
      render: (user) => (
        <span className="text-gray-300 text-sm">{user.subscription}</span>
      ),
    },
    {
      key: "joined",
      header: "Joined",
      render: (user) => (
        <span className="text-gray-300 text-sm">{user.joined}</span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      className: "text-right",
      render: (user) => (
        <div className="flex justify-end">
          <UserActionMenu
            onView={() => console.log("View", user.id)}
            onSuspend={() => console.log("Suspend", user.id)}
            onDelete={() => console.log("Delete", user.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#080a0f] p-4 sm:p-6 flex flex-col gap-6">
      <p className="text-gray-400 text-sm">Manage all platform users</p>

      {/* Filters */}
      <UsersFilterBar
        search={search}
        onSearchChange={(v) => {
          setSearch(v);
          setCurrentPage(1);
        }}
        role={role}
        onRoleChange={(v) => {
          setRole(v);
          setCurrentPage(1);
        }}
        ageGroup={ageGroup}
        onAgeGroupChange={(v) => {
          setAgeGroup(v);
          setCurrentPage(1);
        }}
        status={status}
        onStatusChange={(v) => {
          setStatus(v);
          setCurrentPage(1);
        }}
        plan={plan}
        onPlanChange={(v) => {
          setPlan(v);
          setCurrentPage(1);
        }}
        showing={filtered.length}
        total={ALL_USERS.length}
        onClearFilters={handleClearFilters}
      />

      {/* Table */}
      <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl overflow-hidden">
        <DataTable
          columns={columns}
          data={paginated}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          emptyMessage="No users match the current filters."
        />
      </div>
    </div>
  );
};

export default AdminUsers;
